const path = require('path')

module.exports = {
    entry : './src/js/main.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    watch : true,
    devtool : "source-map",
    module : {
        rules : [{
            test : /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
        }],
        rules : [{
            test : /\.css$/,
            use : ['style-loader' ,'css-loader']
        }]
    },
    mode : 'development'
}