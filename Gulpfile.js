'use strict'

var gulp = require('gulp');

require('fs').readdirSync('./tasks').forEach(function(task) {
    require('./tasks/' + task);
});
