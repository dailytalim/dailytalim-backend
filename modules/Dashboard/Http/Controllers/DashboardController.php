<?php

namespace Modules\Dashboard\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Modules\Hadith\Models\Chapter;
use Modules\Hadith\Models\Hadith;
use Modules\Hadith\Models\Kitab;
use Modules\Support\Http\Controllers\BackendController;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DashboardController extends BackendController
{
    /**
     * Display the dashboard view.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $count = [
            'users' => User::count(),
            'permissions' => Permission::count(),
            'roles' => Role::count(),
            'hadiths' => Hadith::count(),
            'kitabs' => Kitab::count(),
            'chapters' => Chapter::count(),
        ];

        return Inertia::render('Dashboard/DashboardIndex', [
            'count' => $count,
        ]);
    }
}
