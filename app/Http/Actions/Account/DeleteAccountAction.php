<?php

namespace App\Http\Actions\Account;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

/**
 * Action for deleting a user's account
 */
class DeleteAccountAction
{
    /**
     * Execute the account deletion action
     *
     * @param Request $request The incoming request with password confirmation
     * @return void
     * @throws \Throwable If an error occurs during the deletion
     */
    public function execute(Request $request): void
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        try {
            Auth::logout();

            $user->delete();

            $request->session()->invalidate();
            $request->session()->regenerateToken();
        } catch (\Throwable $th) {
            log('Error during account deletion action: ' . $th->getMessage());
            // Re-throw to be caught by the controller
            throw $th;
        }
    }
}