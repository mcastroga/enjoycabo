'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        reloadDebounce: 500,
        reloadDelay: 500,
        port: 8080,
        server: {
            baseDir: './website'
        }
    });
});

gulp.task('serve', ['default', 'gulp:reload', 'browser-sync'], function() {
    gulp.watch('source/**/*.{gif,jpg,png,svg}', ['assets'], browserSync.reload);
    gulp.watch('source/**/*.pug', ['pug']).on('change', browserSync.reload);
    gulp.watch('source/**/*.styl', ['stylus']).on('change', browserSync.reload);
    gulp.watch('source/**/*.js', ['scripts']).on('change', browserSync.reload);
    gulp.watch('source/**/*.php', ['scripts']).on('change', browserSync.reload);
});
