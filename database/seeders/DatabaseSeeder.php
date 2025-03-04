<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Acl\Database\Seeders\AclModelHasRolesSeeder;
use Modules\Acl\Database\Seeders\AclPermissionSeeder;
use Modules\Acl\Database\Seeders\AclRoleSeeder;
use Modules\Blog\Database\Seeders\BlogAclSeeder;
use Modules\Blog\Database\Seeders\BlogSeeder;
use Modules\Hadith\Database\Seeders\ChapterAclSeeder;
use Modules\Hadith\Database\Seeders\ChapterSeeder;
use Modules\Hadith\Database\Seeders\HadithAclSeeder;
use Modules\Hadith\Database\Seeders\HadithSeeder;
use Modules\Hadith\Database\Seeders\KitabAclSeeder;
use Modules\Hadith\Database\Seeders\KitabSeeder;
use Modules\User\Database\Seeders\UserSeeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            AclRoleSeeder::class,
            AclPermissionSeeder::class,
            AclModelHasRolesSeeder::class,

            BlogAclSeeder::class,
            KitabAclSeeder::class,
            ChapterAclSeeder::class,
            HadithAclSeeder::class,

            BlogSeeder::class,
            KitabSeeder::class,
            ChapterSeeder::class,
            HadithSeeder::class,

        ]);
    }
}
