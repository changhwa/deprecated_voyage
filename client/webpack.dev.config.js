var webpack = require('webpack');
var config = require('./webpack.config.js');

var entry = [
  'webpack-dev-server/client?http://localhost:8090',
  'webpack/hot/only-dev-server'
];

var plugins = [
  new webpack.HotModuleReplacementPlugin()
];

config.entry = config.entry.concat(entry);
config.plugins = config.plugins.concat(plugins);

module.exports = config;
