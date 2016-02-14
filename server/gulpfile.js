"use strict";

var gulp = require('gulp');
var debug = require('gulp-debug');


gulp.task('server', function(){

  var nodemon = require('gulp-nodemon');
  var livereload = require('gulp-livereload');
  var notify = require('gulp-notify');

  livereload.listen();

  return nodemon({
    script: './bin/www',
    ext: 'js',
    ignore: ['.idea/**', 'node_modules/**']
  }).on('restart', function(){
    setTimeout(function () {
      livereload.changed('./bin/www');
      gulp.src('./bin/www').pipe(notify('Reloading page, please wait...'));
    }, 1000);
  });
});

gulp.task('test', function(){
  var mocha = require('gulp-mocha');
  require('babel-core/register');
  return gulp.src('./test/**/*.js')
    .pipe(debug())
    .pipe(mocha({
      ui: 'bdd',
      reporter: 'spec'
    }));
});

gulp.task('default',['server']);