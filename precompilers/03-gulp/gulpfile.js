var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('styles', function() {
  return gulp.src(['css/main.scss'])
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
  return gulp.src(['js/add.js', 'js/multiply.js', 'js/reduce.js', 'js/sum.js', 'js/quotient.js', 'js/main.js'])
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['styles', 'scripts']);
