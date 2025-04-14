<?php

namespace App\Http\Actions\Account;

use App\Models\User;

class GetAccountAction
{
    public function execute($id)
    {
        return User::first($id);
    }
}