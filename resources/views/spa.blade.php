<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link href="{{asset(mix('css/app.css'))}}" rel="stylesheet" type="text/css">
</head>
<body>
<div id="app">
    <example-component></example-component>
</div>
<script src="{{asset(mix('js/app.js'))}}"></script>
@if(config('app.env') == 'local')
    <script src="http://localhost:35729/livereload.js"></script>
@endif
</body>
</html>
