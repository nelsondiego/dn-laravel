<?php

namespace App\Http\Services;

use App\Http\Providers\UserProvider;

class AccountService {

    protected $userProvider;

    public function __construct(UserProvider $userProvider) {
        $this->userProvider = $userProvider;
    }


    public function getAccount($id) {
        return $this->userProvider->getUsersbyId($id);
    }
}