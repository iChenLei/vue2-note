var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    debug: true,
    devtool: '#eval-source-map',
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png)$/,
                loader: 'file'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
            css: 'vue-style!css'
        }
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'js')
        ],
        extensions: [
            '',
            '.js',
            '.vue'
        ],
        alias: {
            vue: 'vue/dist/vue.min.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'index.html_vm',
            favicon: 'img/favicon.ico',
            hash: false
        })
    ]
};