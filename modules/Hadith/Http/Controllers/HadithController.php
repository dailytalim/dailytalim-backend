<?php
namespace Modules\Hadith\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Modules\Hadith\Http\Requests\HadithValidate;
use Modules\Hadith\Models\Hadith;
use Modules\Support\Http\Controllers\BackendController;

class HadithController extends BackendController
{
    public function index(): Response
    {
        $hadiths = Hadith::orderBy('id')
            ->search(request('searchContext'), request('searchTerm'))
            ->paginate(request('rowsPerPage', 10))
            ->withQueryString()
            ->through(fn($hadith) => [
                'id'          => $hadith->id,
                'description' => $hadith->description,
                'created_at'  => $hadith->created_at->format('d/m/Y H:i') . 'h',
            ]);

        return inertia('Hadith/HadithIndex', [
            'hadiths' => $hadiths,
        ]);
    }

    public function create(): Response
    {
        return inertia('Hadith/HadithForm');
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
}
