'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('scss', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
});