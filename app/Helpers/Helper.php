<?php

if (!function_exists('viewCms')) {
    function viewCms($view = null, $data = [], $mergeData = [])
    {
        return view('cms.' . $view, $data, $mergeData);
    }
}