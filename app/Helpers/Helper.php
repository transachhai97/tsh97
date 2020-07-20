<?php

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\View;

if (!function_exists('viewCms')) {
    /**
     * @param null $view
     * @param array $data
     * @param array $mergeData
     * @return Application|Factory|View
     */
    function viewCms($view = null, $data = [], $mergeData = [])
    {
        return view('cms.' . $view, $data, $mergeData);
    }
}
