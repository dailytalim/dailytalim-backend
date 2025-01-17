<?php

namespace Modules\Hadith\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Modules\Hadith\Models\Hadith;

use function Laravel\Prompts\info;
use function Laravel\Prompts\progress;

class HadithSeeder extends Seeder
{
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        info('Creating Hadiths...');
        $this->seedWithProgress(
            label: 'Hadiths creation status',
            steps: 5,
            callback: fn () => Hadith::factory()->create(),
        );
        info('Hadiths created.');

        Schema::enableForeignKeyConstraints();
    }

    private function seedWithProgress(string $label, int $steps, callable $callback): void
    {
        progress(
            label: $label,
            steps: $steps,
            callback: $callback,
        );
    }
}