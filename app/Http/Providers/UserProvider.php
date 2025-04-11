<?php

namespace App\Http\Providers;

use App\Models\User;

class UserProvider {
    public function getUsersbyId($id) {
        return User::first($id);
    }
}