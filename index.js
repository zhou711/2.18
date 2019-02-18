var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var fs = require('fs');
var path = require('path');
var url = require('url');


gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe.gulp.dest('./src/css')
})

gulp.task('mincss', function() {
    return gulp.src('./src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./src/sss'))
})

gulp.task('mincss', function() {
    return gulp.src('./src/sss/*.sss')
        .pipe.concat('all.css')
        .pipe.dest('build.css')
})

gulp.task('mincss', function() {
    return gulp.src('./src/js/*.js')
        .pipe.concat('all.js')
        .pipe(uglify())
        .pipe.dest('build-js')
})

gulp.task('webserver', function() {
    return gulp.src('./src')
        .pipe(webserver({
            port: 3000,
            open: turn,
            livereload: true,

        }))
})