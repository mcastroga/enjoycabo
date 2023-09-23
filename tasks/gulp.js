var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    fs = require('fs');

gulp.task('gulp:reload', function() {
    gulp.watch([ "Gulpfile.js", "tasks/*.js", "source/scripts/*.js", "source/assets/php/*.php" ], function () {
        if( process ) {
            process.kill();
        }

        process = spawn('gulp', { stdio: 'inherit' });
    });
});
