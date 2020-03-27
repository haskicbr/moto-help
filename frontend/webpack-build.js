const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack  = require("webpack");

console.log(path.resolve(__dirname, './public'))
console.log(path.join(__dirname, './public'))

module.exports = {

    mode: 'production',

    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,  './public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        /*                        options: {
                                                    name: '[name].[ext]',
                                                    outputPath: 'fonts/'
                                                }*/
                    }
                ]
            }
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    devtool: false,

    plugins: [
        new VueLoaderPlugin(),
    ],
};
