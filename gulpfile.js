const gulp = require('gulp')
const browserSync = require('browser-sync')

require('require-dir')('./tasks')

gulp.task('default', ['build', 'watch', 'browsersync', 'server', 'sass'], function() {
   browserSync.reload()
});