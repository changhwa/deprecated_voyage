var gulp = require('gulp');
var gutil = require('gulp-util');
var env = require('gulp-env');
var argv = require('yargs').argv;
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackCommonOpts = {colors: true, progress: true};

gulp.task('clean', function(){

  var clean = require('gulp-clean');

  return gulp.src('./dist', {read: false})
    .pipe(clean());

});

gulp.task('set-env', function(){
  if(argv.prod)
    env.set({NODE_ENV: 'prod'});
  else
    env.set({NODE_ENV: 'dev'});
});

gulp.task('webpack:build', ['clean'], function (callback) {

  var webpackConfig = require('./webpack.config');

  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString(webpackCommonOpts));
    callback();
  });
});

gulp.task('build', ['set-env', 'webpack:build']);

gulp.task("webpack-dev-server", ['set-env', 'lint'], function (callback) {

  var webpackConfig ;

  if(argv.prod)
    webpackConfig = require('./webpack.config');
  else
    webpackConfig = require('./webpack.dev.config');

  var compiler = webpack(webpackConfig);
  var apiServer = "http://localhost:3000";

  new WebpackDevServer(compiler, {

    hot: true,
    stats: webpackCommonOpts,
    historyApiFallback: true,
    proxy: {
      //API Server URL
      "/api/*": apiServer
    }

  }).listen(8090, "localhost", function (err) {

    if (err) throw new gutil.PluginError("webpack-dev-server", err);

    gutil.log("[webpack-dev-server]", "http://localhost:8090");

    callback();
  });
});

gulp.task('test', ['lint'], function(){

  var mocha = require('gulp-mocha');
  require('babel-core/register');

  return gulp.src("./test/**/*.js")
    .pipe(mocha({
      ui: 'bdd',
      reporter: 'list',
      require: [
        './test/test.helper.js'
      ]
    }));
});

gulp.task('lint', function(){

  var eslint = require('gulp-eslint');
//  var lintrc = require('./.eslintrc');

  return gulp.src(['./src/**/*.js','!node_modules/**'])
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['webpack-dev-server']);