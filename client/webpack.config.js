var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + "/src",
  entry: [
    './App.js'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.[hash].js',
    hash: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loaders: ["react-hot", "babel"]
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, { test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)(\?.+)$/,
      loader: 'url-loader?limit=100000'
    }]

  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '../tmpl/index.html'
    }),
    new ExtractTextPlugin('bundle.[contenthash].css', {
      allChunks: false
    })
  ]
};