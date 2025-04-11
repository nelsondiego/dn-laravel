<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Http\Services\AccountService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AccountController extends Controller
{

    protected $accountService;

    public function __construct(AccountService $accountService) {
        $this->accountService = $accountService;
    }


    public function index() {
        return Inertia::render("account/account",[
            'user' => new UserResource(
                $this->accountService->getAccount(Auth::id())
            )
        ]);
    }
}
