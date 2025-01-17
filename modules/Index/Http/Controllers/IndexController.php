<?php
namespace Modules\Index\Http\Controllers;

use Modules\Hadith\Models\Hadith;
use Modules\Support\Http\Controllers\SiteController;

class IndexController extends SiteController
{
    public function index()
    {
        $hadith = Hadith::inRandomOrder()->first();

        return view('index::index', compact('hadith'));
    }
}
