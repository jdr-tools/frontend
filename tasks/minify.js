const gulp = require('gulp')
const assign = require('lodash.assign')
const babelify = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')
const uglify = require('gulp-uglify')
const streamify = require('gulp-streamify')
const rename = require('gulp-rename')
const ngAnnotate = require('gulp-ng-annotate')

const browserifyOptions = assign({}, watchify.args, {entries: ['src/app.js'], debug: true})
const babelOptions = {presets: ['es2015']}
const instance = browserify(browserifyOptions)

instance.transform(babelify.configure(babelOptions))

gulp.task('minify', function () {
  return instance.bundle()
    .pipe(source('app.js'))
    .pipe(ngAnnotate())
    .pipe(streamify(uglify()))
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('dist'))
})