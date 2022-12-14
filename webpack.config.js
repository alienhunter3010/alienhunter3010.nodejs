const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader-plugin');

const config = {
    mode: 'production',
//    mode: 'development',
    entry: {
        'home': './client/home.js',
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.js'
        },
        extensions: [
            '.js',
            '.vue'
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
    ],
}

module.exports = config;
