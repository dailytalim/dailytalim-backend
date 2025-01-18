<?php

use Illuminate\Support\Facades\Route;
use Modules\Hadith\Http\Controllers\ChapterController;
use Modules\Hadith\Http\Controllers\HadithController;
use Modules\Hadith\Http\Controllers\KitabController;

/** Kitab Routes */
Route::prefix('kitab')->name('kitab.')->controller(KitabController::class)->group(function () {
    Route::get('/', 'index')
        ->name('index')
        ->can('kitab-list');

    Route::get('/create', 'create')
        ->name('create')
        ->can('kitab-create');

    Route::post('/', 'store')
        ->name('store')
        ->can('kitab-create');

    Route::get('/{id}/edit', 'edit')
        ->name('edit')
        ->can('kitab-edit');

    Route::put('/{id}', 'update')
        ->name('update')
        ->can('kitab-edit');

    Route::delete('/{id}', 'destroy')
        ->name('destroy')
        ->can('kitab-delete');

    /** Recycle Bin Routes */
    Route::prefix('recycle-bin')->name('recycleBin.')->group(function () {
        Route::get('/', 'recycleBin')
            ->name('index')
            ->can('kitab-recycle-bin-list');

        Route::get('/{id}/restore', 'restore')
            ->name('restore')
            ->can('kitab-recycle-Bin-Restore');

        Route::delete('/{id}/destroy', 'destroyForce')
            ->name('destroyForce')
            ->can('kitab-recycle-bin-delete');

        Route::delete('/empty', 'emptyRecycleBin')
            ->name('empty')
            ->can('kitab-recycle-bin-delete');

        Route::get('/restore', 'restoreRecycleBin')
            ->name('restoreAll')
            ->can('kitab-recycle-Bin-Restore');
    });
});

/** chapter Routes */
Route::prefix('chapter')->name('chapter.')->controller(ChapterController::class)->group(function () {
    Route::get('/', 'index')
        ->name('index')
        ->can('chapter-list');

    Route::get('/create', 'create')
        ->name('create')
        ->can('chapter-create');

    Route::post('/', 'store')
        ->name('store')
        ->can('chapter-create');

    Route::get('/{id}/edit', 'edit')
        ->name('edit')
        ->can('chapter-edit');

    Route::put('/{id}', 'update')
        ->name('update')
        ->can('chapter-edit');

    Route::delete('/{id}', 'destroy')
        ->name('destroy')
        ->can('chapter-delete');

    /** Recycle Bin Routes */
    Route::prefix('recycle-bin')->name('recycleBin.')->group(function () {
        Route::get('/', 'recycleBin')
            ->name('index')
            ->can('chapter-recycle-bin-list');

        Route::get('/{id}/restore', 'restore')
            ->name('restore')
            ->can('chapter-recycle-Bin-Restore');

        Route::delete('/{id}/destroy', 'destroyForce')
            ->name('destroyForce')
            ->can('chapter-recycle-bin-delete');

        Route::delete('/empty', 'emptyRecycleBin')
            ->name('empty')
            ->can('chapter-recycle-bin-delete');

        Route::get('/restore', 'restoreRecycleBin')
            ->name('restoreAll')
            ->can('chapter-recycle-Bin-Restore');
    });
});

/** hadith Routes */
Route::prefix('hadith')->name('hadith.')->controller(HadithController::class)->group(function () {
    Route::post('hadith/upload-editor-image', 'uploadEditorImage')
        ->name('uploadEditorImage')
        ->can('hadith-create')
        ->can('hadith-edit');

    Route::get('/', 'index')
        ->name('index')
        ->can('hadith-list');

    Route::get('/create', 'create')
        ->name('create')
        ->can('hadith-create');

    Route::post('/', 'store')
        ->name('store')
        ->can('hadith-create');

    Route::get('/{id}/edit', 'edit')
        ->name('edit')
        ->can('hadith-edit');

    Route::put('/{id}', 'update')
        ->name('update')
        ->can('hadith-edit');

    Route::delete('/{id}', 'destroy')
        ->name('destroy')
        ->can('hadith-delete');

    /** Recycle Bin Routes */
    Route::prefix('recycle-bin')->name('recycleBin.')->group(function () {
        Route::get('/', 'recycleBin')
            ->name('index')
            ->can('hadith-recycle-bin-list');

        Route::get('/{id}/restore', 'restore')
            ->name('restore')
            ->can('hadith-recycle-Bin-Restore');

        Route::delete('/{id}/destroy', 'destroyForce')
            ->name('destroyForce')
            ->can('hadith-recycle-bin-delete');

        Route::delete('/empty', 'emptyRecycleBin')
            ->name('empty')
            ->can('hadith-recycle-bin-delete');

        Route::get('/restore', 'restoreRecycleBin')
            ->name('restoreAll')
            ->can('hadith-recycle-Bin-Restore');
    });
});
