<?php

namespace Modules\Hadith\Http\Requests;

use Modules\Support\Http\Requests\Request;

class KitabValidate extends Request
{
    public function rules(): array
    {
        return [
            'name' => 'required',
        ];
    }
}
