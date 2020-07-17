<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class HostServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @param Request $request
     * @return void
     */
    public function boot(Request $request)
    {
        //
        $this->parseHost($request->getHost());
    }

    /**
     * @param $host
     */
    private function parseHost($host)
    {
        $parsed = false;

        if (false !== strpos($host, 'cms.')) {
            config(['isCms' => true]);
            $parsed = true;
        }

        if (!$parsed) {
            config(['isWeb' => true]);
        }
    }
}
