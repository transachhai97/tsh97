const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const isProduction = mix.inProduction();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    plugins: [
        new LiveReloadPlugin({
            port: 1997
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': __dirname + '/resources/assets/js'
        },
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                oneOf: [
                    // this applies to `<template lang="pug">` in Vue components
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader']
                    },
                    // this applies to pug imports inside JavaScript
                    {
                        use: ['raw-loader', 'pug-plain-loader']
                    }
                ]
            }
        ]
    }
});

if (isProduction) {
    mix.version();
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
            extractComments: false,
        },
        cssNano: {
            discardComments: {
                removeAll: true,
            },
        },
    });
} else {
    mix.sourceMaps(true, "cheap-module-source-map");
    mix.disableNotifications();
}

mix.options({
    fileLoaderDirs: {
        images: "assets/images",
        fonts: "assets/fonts",
    },
});

mix.js('resources/assets/js/app.js', 'public/assets/js')
    .sass('resources/assets/sass/app.scss', 'public/assets/css', {
        sassOptions: {
            outputStyle: isProduction ? "compressed" : "expanded",
        },
    });
