<?php

namespace Modules\Hadith\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Modules\Hadith\Http\Requests\ChapterValidate;
use Modules\Hadith\Models\Chapter;
use Modules\Support\Http\Controllers\BackendController;

class ChapterController extends BackendController
{
    public function index(): Response
    {
        $chapters = Chapter::with('kitab')
            ->orderBy('name')
            ->search(request('searchContext'), request('searchTerm'))
            ->paginate(request('rowsPerPage', 10))
            ->withQueryString()
            ->through(fn ($chapter) => [
                'id' => $chapter->id,
                'kitab' => $chapter->kitab,
                'name' => $chapter->name,
                'active' => $chapter->active,

                'created_at' => $chapter->created_at->format('d/m/Y H:i').'h',
                'updated_at' => $chapter->updated_at->format('d/m/Y H:i').'h',
                'created_by' => $chapter->createdBy?->name,
                'updated_by' => $chapter->updatedBy?->name,
            ]);

        return inertia('Chapter/ChapterIndex', [
            'chapters' => $chapters,
        ]);
    }

    public function create(): Response
    {
        return inertia('Chapter/ChapterForm');
    }

    public function store(ChapterValidate $request): RedirectResponse
    {
        Chapter::create($request->validated());

        return redirect()->route('chapter.index')
            ->with('success', 'Chapter created.');
    }

    public function edit(int $id): Response
    {
        $chapter = Chapter::find($id);

        return inertia('Chapter/ChapterForm', [
            'Chapter' => $chapter,
        ]);
    }

    public function update(ChapterValidate $request, int $id): RedirectResponse
    {
        $chapter = Chapter::findOrFail($id);

        $chapter->update($request->validated());

        return redirect()->route('chapter.index')
            ->with('success', 'Chapterupdated.');
    }

    public function destroy(int $id): RedirectResponse
    {
        Chapter::findOrFail($id)->delete();

        return redirect()->route('chapter.index')
            ->with('success', 'Chapterdeleted.');
    }

    public function recycleBin(): Response
    {
        $chapters = Chapter::onlyTrashed()
            ->orderBy('id')
            ->search(request('searchContext'), request('searchTerm'))
            ->paginate(request('rowsPerPage', 10))
            ->withQueryString()
            ->through(fn ($chapter) => [
                'id' => $chapter->id,
                'name' => $chapter->name,
                'deleted_at' => $chapter->deleted_at ? Carbon::parse($chapter->deleted_at)->format('d/m/Y') : null,
                'deletedBy' => $chapter->deletedBy,
                'active' => $chapter->active,
            ]);

        return inertia('Chapter/ChapterRecycleBin', [
            'chapters' => $chapters,
        ]);
    }

    public function restore(int $id): RedirectResponse
    {
        Chapter::onlyTrashed()->findOrFail($id)->restore(); // Restore soft deleted record

        return redirect()->route('chapter.recycleBin')
            ->with('success', 'ChapterRestored.');
    }

    public function destroyForce(int $id): RedirectResponse
    {

        $chapter = Chapter::onlyTrashed()->findOrFail($id);

        $chapter->forceDelete();

        return redirect()->route('chapter.recycleBin')->with('success', 'Chapterdeleted.');
    }

    public function emptyRecycleBin(): RedirectResponse
    {
        $chapters = Chapter::onlyTrashed()->get();

        foreach ($chapters as $chapter) {
            $chapter->forceDelete();
        }

        return redirect()->route('chapter.recycleBin')
            ->with('success', 'Recycle bin emptied.');
    }

    public function restoreRecycleBin(): RedirectResponse
    {
        Chapter::onlyTrashed()->restore(); // Restore soft deleted records

        return redirect()->route('chapter.recycleBin')
            ->with('success', 'Chapter Restored.');
    }
}
