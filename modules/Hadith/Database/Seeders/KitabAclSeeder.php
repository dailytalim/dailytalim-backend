<?php

namespace Modules\Hadith\Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class KitabAclSeeder extends Seeder
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
            'kitab-index',
            'kitab-list',
            'kitab-view',
            'kitab-create',
            'kitab-edit',
            'kitab-delete',
            'kitab-recycle-bin-list',
            'kitab-recycle-bin-delete',
            'kitab-recycle-bin-restore',
        ];
    }
}
