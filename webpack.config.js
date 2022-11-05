const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require('dotenv-webpack');

let mode = process.env.NODE_ENV;

let config = {
    mode : mode,
    entry : './src/js/main.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : (mode === "development") ? 'bundle.js' : 'bundle.[contenthash:8].js',
        clean : (mode === "production"),
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
            use : [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins : [
      new HtmlWebpackPlugin({
        template : 'src/template/index.html',
        filename : '../index.html',
        publicPath : 'dist/',
        inject : 'body'
      }),
      new MiniCssExtractPlugin({filename : (mode === "development") ? 'app.css' : 'app.[contenthash:8].css'}),
      new Dotenv({
        path: './.env',
        safe: true
      })
    ],
    optimization : {}
}

if(mode === "production") {
  console.log('prod');
  config.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin(), 
      new CssMinimizerPlugin({parallel: true})
    ]
  }
}

module.exports = config