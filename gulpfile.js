"use strict";

var gulp = require("gulp"),
    plumber = require("gulp-plumber"),
    browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
      server: "./",
      open: false
    });
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});
