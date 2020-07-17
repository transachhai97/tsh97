<?php

use Illuminate\Support\Facades\Route;

Route::get('maintenance/{mode}', 'MaintenanceController')
    ->where('mode', 'up|down');

Route::get('/', 'CmsController@index')->name('cms');
