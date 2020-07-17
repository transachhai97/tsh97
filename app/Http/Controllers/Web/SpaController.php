<?php

namespace App\Http\Controllers\Web;

class SpaController extends BaseController
{
    public function __invoke()
    {
        return view('spa');
    }
}
