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
        ]
    },
    entry: './src/javascripts/pwa.js',
    output: {
        path: __dirname + '/dist/javascripts/',
        filename: 'bundle.js'
    }
}