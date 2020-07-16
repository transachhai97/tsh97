<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class MaintenanceController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        Artisan::call($request->mode);
        return redirect('/');
    }
}
