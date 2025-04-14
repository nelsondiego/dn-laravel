<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Validation\ValidationException;

/**
 * Controller for handling password reset functionality
 */
class PasswordController extends Controller
{
    /**
     * Display the forgot password page
     *
     * @return \Inertia\Response
     */
    public function forgotPassword()
    {
        return Inertia::render('auth/forgot-password');
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @param Request $request The incoming request
     * @return RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function sendResetLink(Request $request): RedirectResponse
    {
        try {
            $request->validate([
                'email' => 'required|email',
            ]);

            $status = Password::sendResetLink(
                $request->only('email')
            );
            if ($status === Password::RESET_LINK_SENT) {
                return back()->with('success', __('passwords.sent'));
            }

            // Use the status message if available, otherwise a generic error
            return back()->with('error', __($status) ?? __('passwords.throttled'));
        } catch (ValidationException $e) {
            // Validation errors are handled by Laravel, but re-throw if needed or handle differently
            throw $e; // Or return back()->withErrors($e->errors());
        } catch (\Throwable $th) {
            log('Error sending password reset link: ' . $th->getMessage());
            return back()->with('error', 'No pudimos enviar el enlace de restablecimiento en este momento. Por favor, inténtalo de nuevo más tarde.');
        }
    }

    /**
     * Display the password reset page
     *
     * @param Request $request The incoming request with token and email
     * @return Response
     */
    public function resetPassword(Request $request): Response
    {
        return Inertia::render('auth/reset-password', [
            'email' => $request->email,
            'token' => $request->route('token'),
        ]);
    }

    /**
     * Process the password reset request
     *
     * @param Request $request The incoming request with token, email and new password
     * @return \Illuminate\Http\RedirectResponse
     * @throws ValidationException
     */
    public function doResetPassword(Request $request)
    {
        try {
            $request->validate([
                'token' => 'required',
                'email' => 'required|email',
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ]);

            // Here we will attempt to reset the user's password. If it is successful we
            // will update the password on an actual user model and persist it to the
            // database. Otherwise we will parse the error and return the response.
            $status = Password::reset(
                $request->only('email', 'password', 'password_confirmation', 'token'),
                function ($user) use ($request) {
                    $user->forceFill([
                        'password' => Hash::make($request->password),
                        'remember_token' => Str::random(60),
                    ])->save();

                    // event(new PasswordReset($user));
                }
            );

            // If the password was successfully reset, we will redirect the user back to
            // the application's home authenticated view with a success message in Spanish.
            // If there is an error we will redirect them back with an error message.
            if ($status == Password::PASSWORD_RESET) {
                return to_route('login')->with('success', __('passwords.reset'));
            }

            return back()->with('error', __($status)); // Use the status message for specific errors
        } catch (ValidationException $e) {
            // Let Laravel handle validation exception redirection
            throw $e;
        } catch (\Throwable $th) {
            log('Error resetting password: ' . $th->getMessage());
            return back()->with('error', 'Hubo un problema al restablecer tu contraseña. Por favor, verifica los datos o solicita un nuevo enlace.');
        }
    }
}
