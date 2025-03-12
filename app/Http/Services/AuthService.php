<?php

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthService {
    public function login($request){
        $request->authenticate();
        $request->session()->regenerate();
    }

    public function logout($request){
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        Inertia::clearHistory();
    }

    public function register($request){
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return $user;
    }
}
