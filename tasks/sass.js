const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function () {
  gulp.src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
})