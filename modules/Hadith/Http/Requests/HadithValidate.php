<?php

namespace Modules\Hadith\Http\Requests;

use Illuminate\Validation\Rule;
use Modules\Hadith\Models\Chapter;
use Modules\Hadith\Models\Kitab;
use Modules\Support\Http\Requests\Request;

class HadithValidate extends Request
{
    public function rules(): array
    {
        return [
            'kitab_id' => [
                'required',
                'integer',
                Rule::exists(Kitab::class, 'id'),
            ],

            'chapter_id' => [
                'required',
                'integer',
                Rule::exists(Chapter::class, 'id'),
            ],
            'hadith_number' => 'nullable|string',
            'description' => 'required|string',
            'active' => 'nullable|boolean',
            'view_count' => 'nullable|integer',
        ];
    }
}
