const gulp = require('gulp')
const assign = require('lodash.assign')
const babelify = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')
const strip = require('gulp-strip-comments')
const streamify = require('gulp-streamify')

const browserifyOptions = assign({}, watchify.args, {entries: ['src/app.js'], debug: true})
const babelOptions = {presets: ['es2015']}
const instance = browserify(browserifyOptions)

instance.transform(babelify.configure(babelOptions))

gulp.task('build', function () {
  return instance.bundle()
    .pipe(source('app.js'))
    .pipe(streamify(strip()))
    .pipe(gulp.dest('dist'))
})