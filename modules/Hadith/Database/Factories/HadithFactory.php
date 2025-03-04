<?php

namespace Modules\Hadith\Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Hadith\Models\Chapter;
use Modules\Hadith\Models\Hadith;
use Modules\Hadith\Models\Kitab;

class HadithFactory extends Factory
{
    protected $model = Hadith::class;

    public function definition(): array
    {
        return [
            'kitab_id' => Kitab::inRandomOrder()->first()->id,
            'chapter_id' => Chapter::inRandomOrder()->first()->id,
            'hadith_number' => $this->faker->numberBetween(1, 1000),
            'description' => $this->faker->text,
            'active' => $this->faker->boolean(true),
            'view_count' => $this->faker->numberBetween(1, 1000),

            'created_by' => User::inRandomOrder()->first()->id ?? null,
            'updated_by' => User::inRandomOrder()->first()->id ?? null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
