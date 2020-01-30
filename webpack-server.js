const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


console.log(path.resolve(__dirname, './public'))
console.log(path.join(__dirname, './public'))

module.exports = {

    mode: 'development',

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
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
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
    plugins: [
        new VueLoaderPlugin()
    ],

    devServer: {
        contentBase: path.join(__dirname, './public'),
        hot: true,
        compress: true,
        port: 9000
    },
};
