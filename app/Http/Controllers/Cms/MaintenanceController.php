<?php

namespace App\Http\Controllers\Cms;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class MaintenanceController extends CmsController
{
    //
    public function __invoke(Request $request)
    {
        Artisan::call($request->mode);
        return redirect('/');
    }
}
