<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', "landing")->name('home');


Route::middleware(['guest'])->group(function () {
    // Auth Login
    Route::get('login', [AuthController::class, 'login'])->name('login');
    Route::post('login', [AuthController::class, 'doLogin'])->name('doLogin');

    // Auth Register
    Route::get('register', [AuthController::class, 'register'])->name('register');
    Route::post('register', [AuthController::class, 'doRegister'])->name('doRegister');

    // Auth Forgot Password
    Route::get('forgot-password', [PasswordController::class, 'forgotPassword'])->name('forgotPassword');
    Route::post('send-reset-link', [PasswordController::class, 'sendResetLink'])->name('sendResetLink');

    // Auth Reset Password
    Route::get('reset-password/{token}', [PasswordController::class, 'resetPassword'])->name('password.reset');
    Route::post('reset-password', [PasswordController::class, 'doResetPassword'])->name('password.store');
});

// Auth Routes
Route::middleware('auth')->group(function () {
    // Dashboard
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Account
    Route::get('account', [AccountController::class, 'index'])->name('account');
    Route::put('account/{user}', [AccountController::class, 'updatePersonalInfo'])->name('account.updatePersonalInfo');
    Route::put('account/{user}/password', [AccountController::class, 'updatePassword'])->name('account.updatePassword');
    Route::delete('account/{user}', [AccountController::class, 'deleteAccount'])->name('account.deleteAccount');

    // Logout
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');
});
