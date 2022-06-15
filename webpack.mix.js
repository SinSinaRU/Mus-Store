const mix = require('laravel-mix');
const path = require('path')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.webpackConfig({
    resolve: {
        alias: {
            '@resources': path.resolve(__dirname, 'resources/'),
            '@': path.resolve(__dirname, 'resources/js/src/')
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: "sass-loader",
                options: {
                    additionalData: `@import "resources/sass/_variables.scss";`
                },
            },
            {
                test: /\.mp3$/,
                loader: require.resolve('file-loader'),
                options: {
                    esModule: false
                }
            },

        ]
    }
});

mix.js('resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/app.scss', 'public/css');


