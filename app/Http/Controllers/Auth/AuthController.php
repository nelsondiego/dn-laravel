<?php

namespace App\Http\Controllers\Auth;

use App\Http\Actions\Auth\LoginAction;
use App\Http\Actions\Auth\LogoutAction;
use App\Http\Actions\Auth\RegisterAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

/**
 * Controller for handling user authentication
 */
class AuthController extends Controller
{
    /**
     * Display the login page
     *
     * @return \Inertia\Response
     */
    public function login(){
        return Inertia::render('auth/login');
    }

    /**
     * Process the login request
     *
     * @param LoginRequest $request Validated login request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function doLogin(LoginRequest $request) {
        try {
            $action = new LoginAction($request);
            $action->execute();
            return redirect()->intended(route('dashboard', absolute: false));
        } catch (\Throwable $th) {
            Log::error('Error during login: ' . $th->getMessage());
            return redirect()->back()->with('error', 'Hubo un problema al iniciar sesión. Por favor, verifica tus credenciales.');
        }
    }

    /**
     * Display the registration page
     *
     * @return \Inertia\Response
     */
    public function register (){
        return Inertia::render('auth/register');
    }

    /**
     * Process the registration request
     *
     * @param RegisterRequest $request Validated registration request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function doRegister (RegisterRequest $request){
        try {
            $action = new RegisterAction();
            $user = $action->execute($request);
            Auth::login($user);
            return redirect()->route('dashboard');
        } catch (\Throwable $th) {
            Log::error('Error during registration: ' . $th->getMessage());
            return redirect()->back()->with('error', 'No pudimos completar tu registro en este momento. Por favor, inténtalo de nuevo.');
        }
    }

    /**
     * Process the logout request
     *
     * @param Request $request The incoming request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(Request $request){
        try {
            $action = new LogoutAction();
            $action->execute($request);
            return redirect()->route('login');
        } catch (\Throwable $th) {
            Log::error('Error during logout: ' . $th->getMessage());
            // Optionally redirect back with error, or just redirect to login anyway
            return redirect()->route('login')->with('error', 'Ocurrió un error al cerrar tu sesión. Por favor, inténtalo nuevamente.');
        }
    }
}
