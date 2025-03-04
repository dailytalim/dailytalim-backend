<?php

namespace Modules\Hadith\Database\Factories;

use App\Models\User;
use Modules\Hadith\Models\Kitab;
use Illuminate\Database\Eloquent\Factories\Factory;

class KitabFactory extends Factory
{
    protected $model = Kitab::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->company,
            'active' => $this->faker->boolean(true),
            
            'created_by' => User::inRandomOrder()->first()->id ?? null,
            'updated_by' => User::inRandomOrder()->first()->id ?? null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}