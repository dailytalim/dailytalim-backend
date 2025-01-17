<?php
namespace Modules\User\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Modules\User\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        // this will be a SuperAdmin...

        $testUser = User::factory()->create([
            'name'              => 'Mehedi Jaman',
            'email'             => 'mail4mjaman@gmail.com',
            'email_verified_at' => now(),
            // 'password' => '$2y$12$uR.rLtnO72yxMt23ulxMF.Cb6NuM/Qt/RC326fxylS63X1zXZKvU2', // password
            'password'          => Hash::make('mehedi!@#'),
        ]);

        Schema::enableForeignKeyConstraints();
    }
}
