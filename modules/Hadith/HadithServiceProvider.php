<?php

namespace Modules\Hadith;

use Modules\Support\BaseServiceProvider;

class HadithServiceProvider extends BaseServiceProvider
{
    public function boot()
    {
        parent::boot();

        $this->loadMigrationsFrom(__DIR__.'/Database/Migrations');
        $this->loadViewsFrom(__DIR__.'/views', 'hadith');
    }
}
