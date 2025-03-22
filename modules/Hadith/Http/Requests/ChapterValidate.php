<?php
namespace Modules\Hadith\Http\Requests;

use Illuminate\Validation\Rule;
use Modules\Hadith\Models\Chapter;
use Modules\Hadith\Models\Kitab;
use Modules\Support\Http\Requests\Request;

class ChapterValidate extends Request
{
    public function rules(): array
    {
        return [
            'kitab_id'  => [
                'required',
                'integer',
                Rule::exists(Kitab::class, 'id'),
            ],
            'parent_id' => [
                'nullable',
                'integer',
                Rule::exists(Chapter::class, 'id'),
            ],
            'name'      => 'required|string|max:255',
            'active'    => 'required|boolean',
        ];
    }
}
