const gulp = require('gulp')
const assign = require('lodash.assign')
const babelify = require('babelify')
const browserSync = require('browser-sync')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')
const sourcemaps = require('gulp-sourcemaps')

const browserifyOptions = assign({}, watchify.args, {entries: ['src/app.js'], debug: true})
const babelOptions = {presets: ['es2015']}

const instance = browserify(browserifyOptions)
instance.transform(babelify.configure(babelOptions))

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
   });
});

gulp.task('build', function () {
  return instance.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('watch', function() {
  gulp.watch('src/styles/sass/**/*.scss', ['sass']);
  gulp.watch('src/**/*.html', ['html']);
});

gulp.task('dev', ['build', 'watch', 'browsersync'], function() {
   browserSync.reload();
});