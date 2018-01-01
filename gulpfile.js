// including plugins
var gulp = require('gulp'),
uglify = require("gulp-uglify"),
minifyHtml = require("gulp-minify-html"),
minifyCss = require("gulp-minify-css");

// task
gulp.task('minify-js', function () {
    gulp.src('map.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('dest'));
});

gulp.task('assets', function(){
	gulp.src('searchicon.png') // path to your files
    .pipe(gulp.dest('dest'));
})

//CSS Task
// task
gulp.task('minify-css', function () {
    gulp.src('style.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('dest'));
});

// HTML task
gulp.task('minify-html', function () {
    gulp.src('map.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('dest'));
});

gulp.task('default', [ 'minify-html', 'minify-js', 'minify-css', 'assets' ]);