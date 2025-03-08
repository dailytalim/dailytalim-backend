<?php

namespace Modules\Index\Http\Controllers;

use Modules\Hadith\Models\Hadith;
use Modules\Hadith\Models\Kitab;
use Modules\Support\Http\Controllers\SiteController;

class IndexController extends SiteController
{
    public function index()
    {
        $todaysHadith = Hadith::inRandomOrder()->select('id','ar', 'bn', 'en')->first();

        return [
            'todaysHadith' => $todaysHadith,
        ];
    }

    public function hadiths()
    {
        return Kitab::select('id', 'name') // Select only needed columns
            ->with([
                'chapters' => function ($query) {
                    $query->select('id', 'kitab_id', 'name'); // Select only necessary columns for chapters
                },
                'chapters.hadiths' => function ($query) {
                    $query->select('id', 'chapter_id', 'ar', 'bn', 'en'); // Select only necessary columns for hadiths
                },
            ])->get();
    }
}
