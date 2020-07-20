<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;

class LangController extends BaseController
{
    //
    public function __invoke($locale)
    {
        app()->setLocale($locale);
        session()->put('locale', $locale);
        return $locale;
    }
}
