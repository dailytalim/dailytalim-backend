<?php

namespace Modules\Hadith\Http\Requests;

use Modules\Support\Http\Requests\Request;

class HadithValidate extends Request
{
    public function rules(): array
    {
        return [
            'name' => 'required',
        ];
    }
}
