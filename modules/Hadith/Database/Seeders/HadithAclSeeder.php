<?php

namespace Modules\Hadith\Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class HadithAclSeeder extends Seeder
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
            'hadith-index',
            'hadith-list',
            'hadith-view',
            'hadith-create',
            'hadith-edit',
            'hadith-delete',
            'hadith-recycle-bin-list',
            'hadith-recycle-bin-delete',
            'hadith-recycle-bin-restore',
        ];
    }
}