<?php

namespace App\Http\Controllers\Cms;

use Illuminate\Http\Request;

class DashboardController extends CmsController
{
    //
    public function index()
    {
        return viewCms('index');
    }
}
