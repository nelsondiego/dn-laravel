<?php

namespace App\Http\Actions\Auth;

use App\Http\Requests\Auth\LoginRequest;

class LoginAction
{
    public function execute(LoginRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();
    }
}