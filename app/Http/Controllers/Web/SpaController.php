<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;

class SpaController extends Controller
{
    public function __invoke()
    {
        return view('spa');
    }
}
