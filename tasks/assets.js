'use strict';

var gulp = require('gulp'),
    fs = require('fs');

gulp.task('assets', function() {
    gulp.src("source/assets/**/*.*")
        .pipe(gulp.dest("./website"));

    gulp.src([
      "source/images/**/*.gif",
      "source/images/**/*.jpg",
      "source/images/**/*.png",
      "source/images/**/*.svg"
    ])
        .pipe(gulp.dest("./website/images"));

    gulp.src("source/fonts")
        .pipe(gulp.dest("./website/fonts"));
});
