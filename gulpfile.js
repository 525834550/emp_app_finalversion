'use strict';
 
var gulp = require('gulp');

var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

//minifying JS files

gulp.task('scripts',function(){
	gulp.src('./scripts/**/*.js')	
	.pipe(uglify())
	.pipe(gulp.dest('./dist'));
});


 //compile SASS to CSS
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//compile and watch SASS files
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

