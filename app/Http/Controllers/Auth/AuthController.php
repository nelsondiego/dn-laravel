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
use Inertia\Inertia;

class AuthController extends Controller
{
    protected $loginAction;
    protected $logoutAction;
    protected $registerAction;

    public function __construct(
        LoginAction $loginAction,
        LogoutAction $logoutAction,
        RegisterAction $registerAction
    ){
        $this->loginAction = $loginAction;
        $this->logoutAction = $logoutAction;
        $this->registerAction = $registerAction;
    }

    public function login(){
        return Inertia::render('auth/login');
    }

    public function doLogin(LoginRequest $request) {
        $this->loginAction->execute($request);
        return redirect()->intended(route('dashboard', absolute: false));
    }

    public function register (){
        return Inertia::render('auth/register');
    }

    public function doRegister (RegisterRequest $request){
        $user = $this->registerAction->execute($request);
        Auth::login($user);
        return redirect()->route('login');
    }

    public function logout(Request $request){
        $this->logoutAction->execute($request);
        return redirect()->route('login');
    }
}
