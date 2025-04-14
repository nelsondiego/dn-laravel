<?php

namespace App\Http\Controllers;

use App\Http\Actions\Account\GetAccountAction;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AccountController extends Controller
{
    protected $getAccountAction;

    public function __construct(GetAccountAction $getAccountAction) {
        $this->getAccountAction = $getAccountAction;
    }

    public function index() {
        return Inertia::render("account/account",[
            'user' => new UserResource(
                $this->getAccountAction->execute(Auth::id())
            )
        ]);
    }
}
