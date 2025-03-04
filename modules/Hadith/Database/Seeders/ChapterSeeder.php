<?php

namespace Modules\Hadith\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Modules\Hadith\Models\Chapter;

use function Laravel\Prompts\info;
use function Laravel\Prompts\progress;

class ChapterSeeder extends Seeder
{
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        info('Creating Chapters...');
        $this->seedWithProgress(
            label: 'Chapters creation status',
            steps: 10,
            callback: fn () => Chapter::factory()->create(),
        );
        info('Chapters created.');

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
