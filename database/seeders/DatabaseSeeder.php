<?php

namespace Database\Seeders;

use App\Models\Feature;
use App\Models\Package;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('123.321Aa'),
        ]);

        Feature::created([
            'image' => 'https://static-00.iconduck.com/assets.00/plus-icon-2048x2048-z6v59bd6.png',
            'route_name' => 'feature1.index',
            'name' => 'Calculate Sum',
            'description' => 'Calculete sum of two numbers', 
            'required_credits' => 1,
            'active' => true,
        ]);

        Feature::created([
            'image' => 'https://cdn-icons-png.freepik.com/512/929/929430.png',
            'route_name' => 'feature2.index',
            'name' => 'Calculate Difference',
            'description' => 'Calculete difference of two numbers', 
            'required_credits' => 3,
            'active' => true,
        ]);

        Package::created([
            'name' => 'Basic',
            'price' => 5,
            'credits' => 20,
        ]);

        Package::created([
            'name' => 'Silver',
            'price' => 50,
            'credits' => 500,
        ]);

        Package::created([
            'name' => 'Gold',
            'price' => 50,
            'credits' => 500,
        ]);
    }
}
