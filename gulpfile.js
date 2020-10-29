const gulp = require('gulp')
const { parallel } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const babel = require('gulp-babel')

function pluginJS() {
  return gulp.src('src/js/contador.js')
    .pipe(babel({
      comments: false,
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(concat('contador.min.js'))
    .pipe(gulp.dest('build/js'))
}

function pluginCSS() {
  return gulp.src('src/css/contador.css')
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('contador.min.css'))
    .pipe(gulp.dest('build/css'))
}

function assetsJS() {
  return gulp.src('src/js/main.js')
    .pipe(babel({
      comments: false,
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('build/js'))
}

function assetsCSS() {
  return gulp.src('src/css/style.css')
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
  return gulp.src('src/index.html')
      .pipe(gulp.dest('build'))
}

exports.default = parallel(
  pluginCSS,
  pluginJS,
  assetsCSS,
  assetsJS,
  copiarHTML
  )