<?php

namespace Modules\Hadith\Database\Factories;

use App\Models\User;
use Modules\Hadith\Models\Chapter;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChapterFactory extends Factory
{
    protected $model = Chapter::class;

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