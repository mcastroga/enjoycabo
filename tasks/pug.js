'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    fs = require('fs');

gulp.task('pug', function() {
    gulp.src("source/templates/*.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("./website/"));
});
