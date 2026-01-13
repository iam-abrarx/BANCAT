<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // Check if exists or create to avoid Duplicate Entry 500 error
        \App\Models\User::firstOrCreate(
            ['email' => 'admin@bancat.org'],
            [
                'name' => 'Admin User',
                'role' => 'admin',
                'password' => bcrypt('password'),
                'is_active' => true,
            ]
        );
        
        $this->call([
            TeamMemberSeeder::class,
            ProgramSeeder::class,
            // Add other seeders here
        ]);
    }
}
