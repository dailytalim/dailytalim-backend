<?php

namespace Modules\Hadith\Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Hadith\Models\Chapter;
use Modules\Hadith\Models\Kitab;

class ChapterFactory extends Factory
{
    protected $model = Chapter::class;

    public function definition(): array
    {
        return [
            'kitab_id' => Kitab::inRandomOrder()->first()->id ?? null,
            'name' => $this->faker->company,
            'active' => $this->faker->boolean(true),

            'created_by' => User::inRandomOrder()->first()->id ?? null,
            'updated_by' => User::inRandomOrder()->first()->id ?? null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
