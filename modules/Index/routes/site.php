<?php

use Illuminate\Support\Facades\Route;
use Modules\Index\Http\Controllers\IndexController;
use Modules\Message\Http\Controllers\SiteMessageController;

Route::get('/', [
    IndexController::class, 'index',
])->name('index.index');

Route::get('/hadiths', [
    IndexController::class, 'hadiths',
])->name('index.hadiths');

Route::post('message', [SiteMessageController::class, 'store'])->name('site.contact.store');
