<?php

namespace Modules\Hadith\Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class ChapterAclSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = $this->getPermissions();

        foreach ($permissions as $permission) {
            Permission::create([
                'name' => $permission,
                'guard_name' => 'user',
            ]);
        }
    }

    private function getPermissions(): array
    {
        return [
            'chapter-index',
            'chapter-list',
            'chapter-view',
            'chapter-create',
            'chapter-edit',
            'chapter-delete',
            'chapter-recycle-bin-list',
            'chapter-recycle-bin-delete',
            'chapter-recycle-bin-restore',
        ];
    }
}
