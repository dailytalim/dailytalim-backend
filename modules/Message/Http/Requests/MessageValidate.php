<?php

namespace Modules\Message\Http\Requests;

use Modules\Support\Http\Requests\Request;

class MessageValidate extends Request
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'nullable|string|email|max:255',
            'type' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ];
    }
}
