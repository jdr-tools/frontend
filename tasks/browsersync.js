const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('browsersync', function() {
  browserSync({
    open: false,
    port: 3000,
    notify: true,
    watchTask: true,
    ghostMode: false,
    logFileChanges: true,
    online: false,
    logLevel: 'debug',
    ws: true
  })
})