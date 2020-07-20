<?php

namespace App\Http\Controllers\Web;

class SpaController extends BaseController
{
    public function __invoke()
    {
        $configApp = [
            'lang' => app()->getLocale()
        ];
        return view('spa', compact('configApp'));
    }
}
