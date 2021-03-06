// eslint-disable-next-line import/no-extraneous-dependencies
const mix = require('laravel-mix');
// eslint-disable-next-line import/no-extraneous-dependencies
const LiveReloadPlugin = require('webpack-livereload-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const StyleLintPlugin = require('stylelint-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// eslint-disable-next-line import/no-extraneous-dependencies
require('laravel-mix-versionhash');

const isProduction = mix.inProduction();

const assets = 'assets';
const publicPath = `public/${assets}`;
const resourcesPath = 'resources/assets';

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
            port: 1997,
        }),
        new StyleLintPlugin({
            files: [`${resourcesPath}/**/*.{vue,htm,html,css,sss,less,scss,sass}`],
        }),
        !isProduction && new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ].filter((plugin) => plugin),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': `${__dirname}/${resourcesPath}/js`,
        },
    },
    output: {
        publicPath: `/${assets}/`,
        chunkFilename: isProduction ? 'js/chunks/[name].[chunkhash].js' : 'js/chunks/[name].js?v=[chunkhash:8]',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {},
            },
            {
                test: /\.pug$/,
                oneOf: [
                    // this applies to `<template lang="pug">` in Vue components
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader'],
                    },
                    // this applies to pug imports inside JavaScript
                    {
                        use: ['raw-loader', 'pug-plain-loader'],
                    },
                ],
            },
        ],
    },
});

if (isProduction) {
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
    mix.sourceMaps(true, 'cheap-module-source-map');
    mix.disableNotifications();
}

mix.setPublicPath(publicPath);
mix.setResourceRoot(`/${assets}`);

mix.versionHash();

mix.js(`${resourcesPath}/js/app.js`, `${publicPath}/js`)
    .sass(`${resourcesPath}/sass/app.scss`, `${publicPath}/css`, {
        sassOptions: {
            outputStyle: isProduction ? 'compressed' : 'expanded',
        },
    });
