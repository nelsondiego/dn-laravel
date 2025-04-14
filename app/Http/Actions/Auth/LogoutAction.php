<?php

namespace App\Http\Actions\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

/**
 * Action for logging out the user
 */
class LogoutAction
{
    /**
     * Execute the logout action
     *
     * @param Request $request The incoming request
     * @return void
     * @throws \Throwable If an error occurs during logout
     */
    public function execute(Request $request)
    {
        try {
            Auth::guard('web')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            Inertia::clearHistory();
        } catch (\Throwable $th) {
            log('Error during logout action: ' . $th->getMessage());
            // Re-throw the exception to be caught by the controller
            throw $th;
        }
    }
}