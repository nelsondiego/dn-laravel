<?php

namespace App\Http\Actions\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

/**
 * Action for registering a new user
 */
class RegisterAction
{
    /**
     * Execute the user registration action
     *
     * @param RegisterRequest $request Validated registration request
     * @return User The newly created user
     * @throws \Throwable If an error occurs during user creation
     */
    public function execute(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            return $user;
        } catch (\Throwable $th) {
            // Log the detailed error
            Log::error('Error creating user during registration: ' . $th->getMessage());
            // Re-throw the exception to be caught by the controller
            throw $th;
        }
    }
}