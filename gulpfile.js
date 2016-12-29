'use strict';
var gulp        = require('gulp');

// Project plugins
var rev          = require('gulp-rev');
var sass         = require('gulp-sass');
var clean        = require('gulp-clean');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var replace      = require('gulp-replace-task');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
var uglify       = require('gulp-uglify');
var awspublish   = require('gulp-awspublish');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['compile-styles'],
  function() {
    gulp.watch('./scss/**/*.scss',  ['compile-styles']);
  }
);

// Styles
// ------

gulp.task('compile-styles', function(){

  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('.'))

});