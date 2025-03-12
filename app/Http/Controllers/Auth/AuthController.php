<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Services\AuthService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AuthService $authService){
        $this->authService = $authService;
    }

    public function login(){
        return Inertia::render('auth/login');
    }

    public function doLogin(LoginRequest $request) {
        $this->authService->login($request);
        return redirect()->intended(route('dashboard', absolute: false));
    }

    public function register (){
        return Inertia::render('auth/register');
    }

    public function doRegister (RegisterRequest $request){
        $user = $this->authService->register($request);
        Auth::login($user);
        return redirect()->route('login');
    }

    public function logout(Request $request){
        $this->authService->logout($request);
        return redirect()->route('login');
    }
}
