<?php
namespace App\Http\Actions\Account;

use App\Http\Requests\Account\UpdatePersonalInfoRequest;
use App\Models\User;
use Illuminate\Support\Facades\Log;

/**
 * Action for updating a user's personal information
 */
class UpdatePersonalInfo {

    /**
     * Execute the personal information update action
     *
     * @param User $user The user to update
     * @param array $personalInfo The array of personal information
     * @return User The updated user model
     * @throws \Throwable If an error occurs during the update
     */
    public function execute (User $user, $personalInfo): User {
        try {
            $user->update($personalInfo);
            return $user;
        } catch (\Throwable $th) {
            Log::error('Error updating personal info in UpdatePersonalInfo action: ' . $th->getMessage());
            throw $th;
        }
    }
}