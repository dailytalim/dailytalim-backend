<?php

use Modules\Message\MessageServiceProvider;

return [
    App\Providers\AppServiceProvider::class,

    Modules\Support\SupportServiceProvider::class,
    Modules\AdminAuth\AdminAuthServiceProvider::class,
    Modules\User\UserServiceProvider::class,
    Modules\Dashboard\DashboardServiceProvider::class,
    Modules\Acl\AclServiceProvider::class,

    Modules\Index\IndexServiceProvider::class,
    Modules\Blog\BlogServiceProvider::class,
    Modules\Hadith\HadithServiceProvider::class,

    MessageServiceProvider::class,
];
