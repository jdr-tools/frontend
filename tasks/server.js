const gulp = require('gulp')
const webserver = require('gulp-webserver')

gulp.task('server', function() {
  gulp.src('.')
    .pipe(webserver())
})