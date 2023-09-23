'use strict';

var gulp = require('gulp'),
    fs = require('fs');

gulp.task('scripts', function() {
    gulp.src("source/scripts/*.js")
        .pipe(gulp.dest("./website/scripts/"));
});
