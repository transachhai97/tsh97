<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
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
