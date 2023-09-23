'use strict';

var gulp = require('gulp'),
    fs = require('fs');

gulp.task('php', function() {
    gulp.src("source/assets/**/*.php")
        .pipe(gulp.dest("./website/"));
});
