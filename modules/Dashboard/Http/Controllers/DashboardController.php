<?php

namespace Modules\Dashboard\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Modules\Blog\Models\Tag;
use Modules\Blog\Models\Post;
use Modules\Hadith\Models\Kitab;
use Modules\Blog\Models\Category;
use Modules\Hadith\Models\Hadith;
use Modules\Hadith\Models\Chapter;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Modules\Support\Http\Controllers\BackendController;

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
            'posts' => Post::count(),
            'categories' => Category::count(),
            'tags' => Tag::count(),
        ];

        return Inertia::render('Dashboard/DashboardIndex', [
            'count' => $count,
        ]);
    }
}
