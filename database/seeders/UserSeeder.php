<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Ilman s',
            'email' => 'Ilmansunannudin2@gmail.com',
            'password' => bcrypt('password'),
        ]);

        $user->assignRole('admin');
    }
}
