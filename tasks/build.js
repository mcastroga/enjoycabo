'use strict';

var gulp = require('gulp');

gulp.task('build', ['pug', 'stylus', 'scripts', 'assets', 'php', 'vendors']);
