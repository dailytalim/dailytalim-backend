<?php

namespace Modules\Message\Http\Controllers;

use Modules\Message\Http\Requests\MessageValidate;
use Modules\Message\Models\Message;
use Modules\Support\Http\Controllers\BackendController;

class SiteMessageController extends BackendController
{
    public function store(MessageValidate $request)
    {
        return Message::create($request->validated());
    }
}
