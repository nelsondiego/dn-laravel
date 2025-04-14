<?php
namespace App\Http\Actions\Account;

use App\Http\Requests\Account\UpdatePersonalInfoRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

/**
 * Action for updating a user's password
 */
class UpdatePasswordAction {

    /**
     * Execute the password update action
     *
     * @param User $user The user to update
     * @param string $password The new password (unencrypted)
     * @return User The updated user model
     * @throws \Throwable If an error occurs during the update
     */
    public function execute (User $user, $password): User {
        try {
            $user->update([
                'password' => Hash::make($password),
            ]);
            return $user;
        } catch (\Throwable $th) {
            log('Error updating password in UpdatePasswordAction: ' . $th->getMessage());
            throw $th;
        }
    }
}