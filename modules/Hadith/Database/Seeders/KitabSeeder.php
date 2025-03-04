<?php

namespace Modules\Hadith\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Modules\Hadith\Models\Kitab;

use function Laravel\Prompts\info;
use function Laravel\Prompts\progress;

class KitabSeeder extends Seeder
{
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        info('Creating Kitabs...');
        $this->seedWithProgress(
            label: 'Kitabs creation status',
            steps: 5,
            callback: fn () => Kitab::factory()->create(),
        );
        info('Kitabs created.');

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
