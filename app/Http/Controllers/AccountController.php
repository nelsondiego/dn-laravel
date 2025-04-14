<?php

namespace App\Http\Controllers;

use App\Http\Actions\Account\DeleteAccountAction;
use App\Http\Actions\Account\GetAccountAction;
use App\Http\Actions\Account\UpdatePasswordAction;
use App\Http\Actions\Account\UpdatePersonalInfo;
use App\Http\Requests\Account\UpdatePasswordRequest;
use App\Http\Requests\Account\UpdatePersonalInfoRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

/**
 * Controller for handling user account actions
 */
class AccountController extends Controller
{
   
    /**
     * Display the user account page
     *
     * @param Request $request The incoming request
     * @param User $user The authenticated user
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        return Inertia::render("account/account", [
            'currentUser' => new UserResource(
                Auth::user()
            )
        ]);
    }

    /**
     * Update the user's personal information
     *
     * @param UpdatePersonalInfoRequest $request Validated request with personal info
     * @param User $user The user to update
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updatePersonalInfo(UpdatePersonalInfoRequest $request, User $user)
    {
        try {
            $action = new UpdatePersonalInfo();
            $action->execute(user: $user, personalInfo: $request->validated());

            return redirect()->back()->with('success', 'Se actualizó la información personal correctamente');
        } catch (\Throwable $th) {
            log('Error updating personal info in accounts: ' . $th->getMessage());
            return redirect()->back()->with('error', 'No se pudo actualizar la información personal');
        }
    }


    /**
     * Update the user's password
     *
     * @param UpdatePasswordRequest $request Validated request with new password
     * @param User $user The user to update
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updatePassword(UpdatePasswordRequest $request, User $user)
    {
        try {
            $action = new UpdatePasswordAction();
            $action->execute(user: $user, password: $request->password);

            return redirect()->back()->with('success', 'Se actualizó la contraseña correctamente');
        } catch (\Throwable $th) {
            log('Error to update password on accounts: ' . $th->getMessage());
            return redirect()->back()->with('error', 'No se pudo actualizar la contraseña');
        }
    }

    /**
     * Delete the user's account
     *
     * @param Request $request The incoming request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function deleteAccount(Request $request) {
        try {
            $action = new DeleteAccountAction();
            $action->execute(request: $request);

            return redirect()->route('login')->with('success', 'Se eliminó la cuenta correctamente');
        } catch (\Throwable $th) {
            log('Error deleting account: ' . $th->getMessage());
            return redirect()->back()->with('error', 'No se pudo eliminar la cuenta');
        }
    }
}
