var gulp = require('gulp');  
var sass = require('gulp-sass');  
var plumber = require('gulp-plumber');

gulp.task('sass', function () {  
    gulp.src('style.scss')
      .pipe(plumber())
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest(''));
});


gulp.task('default', ['sass'], function () {  
    gulp.watch("*.scss", ['sass']);
});