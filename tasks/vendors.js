'use strict';

var concat = require('gulp-concat'),
    gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    fs = require('fs');

gulp.task('vendors', function() {
    gulp.src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "node_modules/aos/dist/aos.js",
        "node_modules/easy-autocomplete/dist/jquery.easy-autocomplete.js",
        "node_modules/js-confetti/dist/js-confetti.browser.js"
    ])
    .pipe(concat("vendors.js"))
    .pipe(gulp.dest("./website/scripts/"));

    gulp.src([
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "node_modules/bootstrap-datetimepicker/dist/css/bootstrap-datetimepicker.min.css",
      "node_modules/easy-autocomplete/dist/easy-autocomplete.css",
      "node_modules/aos/dist/aos.css",
      "node_modules/animate.css/animate.min.css",
      "node_modules/font-awesome/css/font-awesome.min.css"
    ])
    .pipe(concat("vendors.min.css"))
    .pipe(gulp.dest("website/css/"));

    gulp.src("node_modules/font-awesome/fonts/*.*")
        .pipe(gulp.dest("website/fonts"));
});
