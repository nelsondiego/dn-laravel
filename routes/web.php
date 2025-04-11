<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', "landing")->name('home');

// LOGIN
Route::get('login', [AuthController::class, 'login'])->name('login');
Route::post('login', [AuthController::class, 'doLogin'])->name('doLogin');
Route::get('register', [AuthController::class, 'register'])->name('register');
Route::post('register', [AuthController::class, 'doRegister'])->name('doRegister');
Route::post('logout', [AuthController::class, 'logout'])->name('logout')->middleware('auth');

// Auth Routes
Route::middleware('auth')->group(function () {
    // Dashboard
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Account
    Route::get('account', [AccountController::class, 'index'])->name('account');
});
