<?php
namespace Modules\Index\Http\Controllers;

use Modules\Hadith\Models\Hadith;
use Modules\Hadith\Models\Kitab;
use Modules\Support\Http\Controllers\SiteController;

class IndexController extends SiteController
{
    public function index()
    {
        

        $todaysHadith = Hadith::inRandomOrder()->select('ar','bn','en')->first();

        return [
            'todaysHadith' => $todaysHadith,
        ];

        // return view('index::index', compact('hadith'));
    }

    public function hadiths()
    {
        return  Kitab::select('id', 'name') // Select only needed columns
            ->with([
                'chapters'         => function ($query) {
                    $query->select('id', 'kitab_id', 'name'); // Select only necessary columns for chapters
                },
                'chapters.hadiths' => function ($query) {
                    $query->select('id', 'chapter_id', 'description'); // Select only necessary columns for hadiths
                }
            ])->get();
    }
}
