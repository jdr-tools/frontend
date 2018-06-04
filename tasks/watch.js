const gulp = require('gulp')

gulp.task('watch', function() {
  gulp.watch('styles/sass/**/*.scss', ['sass'])
  gulp.watch('src/**/*.js', ['build'])
});