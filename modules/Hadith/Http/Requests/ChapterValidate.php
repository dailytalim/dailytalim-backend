<?php

namespace Modules\Hadith\Http\Requests;

use Illuminate\Validation\Rule;
use Modules\Support\Http\Requests\Request;

class ChapterValidate extends Request
{
    public function rules(): array
    {
        return [
            'kitab_id' => Rule::validate([
                'required',
                
            ]),
            'name' => 'required',
        ];
    }
}
