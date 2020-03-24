const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module:{
        rules:[{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] },
            }]
          }, 
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[name].[ext]'
                } 
            }]
        }     
        ]
    },
    entry: {pwa: './src/javascripts/pwa.js'},
    output: {
        path: __dirname + '/dist/',
        filename: 'javascript/bundle.[contenthash].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: '/',
            seed: {
                name: 'hash mapping'
            }
        }),
        new MiniCssExtractPlugin({
            // both options are optional
            filename: 'stylesheets/style.[contenthash].css',
          }),
    ]
}