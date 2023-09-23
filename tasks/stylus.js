'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus')


gulp.task('stylus', function() {
    gulp.src("source/styles/*.styl")
        .pipe(stylus({
            compress: false
        }))
        .pipe(concat("main.css"))
        .pipe(gulp.dest('./website/css'));
})
