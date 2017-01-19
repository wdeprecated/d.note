var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js',
        './src/scss/style.scss'
    ],

    output: {
        path: __dirname + '/public/',
        publicPath: './src/scss',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            { 
                test: /\.(png|jpg)$/, 
                loader: 'file-loader' 
            }
        ]
    },

    resolve: {
        root: path.resolve('./src')
    },

    plugins:[
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress:{
            warnings: true
          }
        })
    ]

};
