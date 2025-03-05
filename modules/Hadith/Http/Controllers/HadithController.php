<?php

namespace Modules\Hadith\Http\Controllers;

use Carbon\Carbon;
use Inertia\Response;
use Modules\Hadith\Models\Kitab;
use Modules\Hadith\Models\Hadith;
use Illuminate\Http\RedirectResponse;
use Modules\Support\Traits\UploadFile;
use Modules\Support\Traits\EditorImage;
use Modules\Hadith\Http\Requests\HadithValidate;
use Modules\Support\Http\Controllers\BackendController;

class HadithController extends BackendController
{
    use EditorImage, UploadFile;

    protected string $uploadImagePath = 'hadith';

    public function index(): Response
    {
        $hadiths = Hadith::with([
            'kitab',
            'chapter',
        ])
            ->orderBy('kitab_id', 'asc')
            ->orderBy('Hadith_id', 'asc')
            ->orderBy('hadith_number', 'asc')
            ->search(request('searchContext'), request('searchTerm'))
            ->paginate(request('rowsPerPage', 10))
            ->withQueryString()
            ->through(fn ($hadith) => [
                'id' => $hadith->id,
                'kitab' => $hadith->kitab,
                'chapter' => $hadith->chapter,
                'hadith_number' => $hadith->hadith_number,
                'description' => $hadith->description,
                'active' => $hadith->active,
                'view_count' => $hadith->view_count,

                'created_at' => $hadith->created_at->format('d/m/Y H:i').'h',
                'updated_at' => $hadith->updated_at->format('d/m/Y H:i').'h',
                'created_by' => $hadith->createdBy?->name,
                'updated_by' => $hadith->updatedBy?->name,
            ]);

        return inertia('Hadith/HadithIndex', [
            'hadiths' => $hadiths,
        ]);
    }

    public function create(): Response
    {
        return inertia('Hadith/HadithForm', [
            'kitabs' => Kitab::with('chapters')->get(),
        ]);
    }

    public function store(HadithValidate $request): RedirectResponse
    {
        Hadith::create($request->validated());

        return redirect()->route('hadith.index')
            ->with('success', 'Hadith created.');
    }

    public function edit(int $id): Response
    {
        $hadith = Hadith::find($id);

        return inertia('Hadith/HadithForm', [
            'hadith' => $hadith,
            'kitabs' => Kitab::with('chapters')->get(),
        ]);
    }

    public function update(HadithValidate $request, int $id): RedirectResponse
    {
        $hadith = Hadith::findOrFail($id);

        $hadith->update($request->validated());

        return redirect()->route('hadith.index')
            ->with('success', 'Hadith updated.');
    }

    public function destroy(int $id): RedirectResponse
    {
        Hadith::findOrFail($id)->delete();

        return redirect()->route('hadith.index')
            ->with('success', 'Hadith deleted.');
    }

    public function recycleBin(): Response
    {
        $hadiths = Hadith::onlyTrashed()
            ->orderBy('id')
            ->search(request('searchContext'), request('searchTerm'))
            ->paginate(request('rowsPerPage', 10))
            ->withQueryString()
            ->through(fn ($hadith) => [
                'id' => $hadith->id,
                'name' => $hadith->name,
                'deleted_at' => $hadith->deleted_at ? Carbon::parse($hadith->deleted_at)->format('d/m/Y') : null,
                'deletedBy' => $hadith->deletedBy,
                'active' => $hadith->active,
            ]);

        return inertia('Hadith/HadithRecycleBin', [
            'hadiths' => $hadiths,
        ]);
    }

    public function restore(int $id): RedirectResponse
    {
        Hadith::onlyTrashed()->findOrFail($id)->restore(); // Restore soft deleted record

        return redirect()->route('hadith.recycleBin.index')
            ->with('success', 'Hadith Restored.');
    }

    public function destroyForce(int $id): RedirectResponse
    {

        $hadith = Hadith::onlyTrashed()->findOrFail($id);

        $hadith->forceDelete();

        return redirect()->route('hadith.recycleBin.index')->with('success', 'Hadith Deleted.');
    }

    public function emptyRecycleBin(): RedirectResponse
    {
        $hadiths = Hadith::onlyTrashed()->get();

        foreach ($hadiths as $hadith) {
            $hadith->forceDelete();
        }

        return redirect()->route('hadith.recycleBin.index')
            ->with('success', 'Recycle bin emptied.');
    }

    public function restoreRecycleBin(): RedirectResponse
    {
        Hadith::onlyTrashed()->restore(); // Restore soft deleted records

        return redirect()->route('hadith.recycleBin.index')
            ->with('success', 'Hadith Restored.');
    }
}
