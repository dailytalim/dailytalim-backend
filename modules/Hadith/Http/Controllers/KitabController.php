<?php

namespace Modules\Hadith\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Modules\Hadith\Http\Requests\KitabValidate;
use Modules\Hadith\Models\Kitab;
use Modules\Support\Http\Controllers\BackendController;

class KitabController extends BackendController
{
    public function index(): Response
    {
        $kitabs = Kitab::orderBy('name')
            ->search(request('searchContext'), request('searchTerm'))
            ->paginate(request('rowsPerPage', 10))
            ->withQueryString()
            ->through(fn ($kitab) => [
                'id' => $kitab->id,
                'name' => $kitab->name,
                'chapters' => $kitab->chapters()->count(),
                'hadiths' => $kitab->hadiths()->count(),
                'active' => $kitab->active,

                'created_at' => $kitab->created_at->format('d/m/Y H:i').'h',
                'updated_at' => $kitab->updated_at->format('d/m/Y H:i').'h',
                'created_by' => $kitab->createdBy?->name,
                'updated_by' => $kitab->updatedBy?->name,
            ]);

        return inertia('Kitab/KitabIndex', [
            'kitabs' => $kitabs,
        ]);
    }

    public function create(): Response
    {
        return inertia('Kitab/KitabForm');
    }

    public function store(KitabValidate $request): RedirectResponse
    {
        Kitab::create($request->validated());

        return redirect()->route('kitab.index')
            ->with('success', 'Kitabcreated.');
    }

    public function edit(int $id): Response
    {
        $kitab = Kitab::find($id);

        return inertia('Kitab/KitabForm', [
            'kitab' => $kitab,
        ]);
    }

    public function update(KitabValidate $request, int $id): RedirectResponse
    {
        $kitab = Kitab::findOrFail($id);

        $kitab->update($request->validated());

        return redirect()->route('kitab.index')
            ->with('success', 'Kitabupdated.');
    }

    public function destroy(int $id): RedirectResponse
    {
        Kitab::findOrFail($id)->delete();

        return redirect()->route('kitab.index')
            ->with('success', 'Kitabdeleted.');
    }

    public function recycleBin(): Response
    {
        $kitabs = Kitab::onlyTrashed()
            ->orderBy('id')
            ->search(request('searchContext'), request('searchTerm'))
            ->paginate(request('rowsPerPage', 10))
            ->withQueryString()
            ->through(fn ($kitab) => [
                'id' => $kitab->id,
                'name' => $kitab->name,
                'deleted_at' => $kitab->deleted_at ? Carbon::parse($kitab->deleted_at)->format('d/m/Y') : null,
                'deletedBy' => $kitab->deletedBy,
                'active' => $kitab->active,
            ]);

        return inertia('Kitab/KitabRecycleBin', [
            'kitabs' => $kitabs,
        ]);
    }

    public function restore(int $id): RedirectResponse
    {
        Kitab::onlyTrashed()->findOrFail($id)->restore(); // Restore soft deleted record

        return redirect()->route('kitab.recycleBin.index')
            ->with('success', 'KitabRestored.');
    }

    public function destroyForce(int $id): RedirectResponse
    {

        $kitab = Kitab::onlyTrashed()->findOrFail($id);

        $kitab->forceDelete();

        return redirect()->route('kitab.recycleBin.index')->with('success', 'Kitab deleted.');
    }

    public function emptyRecycleBin(): RedirectResponse
    {
        $kitabs = Kitab::onlyTrashed()->get();

        foreach ($kitabs as $kitab) {
            $kitab->forceDelete();
        }

        return redirect()->route('kitab.recycleBin.index')
            ->with('success', 'Recycle bin emptied.');
    }

    public function restoreRecycleBin(): RedirectResponse
    {
        Kitab::onlyTrashed()->restore(); // Restore soft deleted records

        return redirect()->route('kitab.recycleBin.index')
            ->with('success', 'Kitab Restored.');
    }
}
