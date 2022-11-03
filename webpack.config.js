const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
let mode = process.env.NODE_ENV;

let config = {
    entry : './src/js/main.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    watch : mode === "development",
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
    plugins : [],
    optimization : {},
    mode : mode
}

if(mode === "production") {
  console.log('prod');
  config.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}

module.exports = config