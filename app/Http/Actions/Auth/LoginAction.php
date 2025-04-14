<?php

namespace App\Http\Actions\Auth;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginAction
{
    /**
     * Create a new LoginAction instance.
     *
     * @param  LoginRequest  $request  The validated login request
     */
    public function __construct(private LoginRequest $request)
    {
    }


    /**
     * Execute the action to authenticate the user and regenerate the session.
     */
    public function execute(): void
    {

        $this->ensureIsNotRateLimited();

        if (!Auth::attempt($this->request->only('email', 'password'), $this->request->boolean('remember'))) {
            RateLimiter::hit(key: $this->throttleKey());

            throw ValidationException::withMessages([
                'email' => 'Las credenciales no coinciden con nuestros registros',
            ]);
        }

        RateLimiter::clear($this->throttleKey());
        Session::regenerate();
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (!RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        $seconds = RateLimiter::availableIn($this->throttleKey());
        $minutes = ceil($seconds / 60);
        throw ValidationException::withMessages([
            'email' => "Demasiados intentos. Por favor intente de nuevo en {$minutes} minutos.",
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->request->email) . '|' . $this->request->ip());
    }
}