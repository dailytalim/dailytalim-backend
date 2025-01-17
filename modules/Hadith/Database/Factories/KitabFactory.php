<?php

namespace Modules\Hadith\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Hadith\Models\Kitab;

class KitabFactory extends Factory
{
    protected $model = Kitab::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->company,
            'created_at' => $this->faker->dateTimeBetween('-1 year', '-6 month'),
            'updated_at' => $this->faker->dateTimeBetween('-5 month', 'now'),
        ];
    }
}