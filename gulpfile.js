/**
 * NRdev
 *
 * @category   Deployment
 * @sucategory Taskmanger
 * @package    NRdev
 * @author     André Lademann <andre.lademann@netresearch.de>
 * @license    https://netresearch.de/license
 * @version    0.2.0
 */

var bower = require('bower');
var compass = require('gulp-compass');
var gulp = require('gulp');
var concat = require('gulp-concat');
var dalek = require('gulp-dalek');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var sh = require('shelljs');

var paths = {
	sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
  gulp.src('./scss/ionic.app.scss')
	  .pipe(sass())
	  .pipe(gulp.dest('./www/css/'))
	  .pipe(minifyCss({
		keepSpecialComments: 0
	  }))
	  .pipe(rename({extname: '.min.css'}))
	  .pipe(gulp.dest('./www/css/'))
	  .on('end', done);
});

gulp.task('compass', function() {
  gulp.src('./src/*.scss')
	  .pipe(compass({
//		config_file: './config.rb',
		css: 'css',
		sass: 'scss'
	  }))
	  .pipe(gulp.dest('./www/css/'));
	gulp.src('./scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('./www/css/'))
		.pipe(minifyCss({
			keepSpecialComments: 0
		}))
		.pipe(rename({extname: '.min.css'}))
		.pipe(gulp.dest('./www/css/'))
		.on('end', done);
});

gulp.task('test', function () {
	'use strict';
	return gulp.src(['tests/integration/*.js'])
		.pipe(dalek({
			browser: ['phantomjs'],
			reporter: ['html', 'console']
		}));
});

gulp.task('guard', function (done) {
});

gulp.task('watch', function () {
	gulp.watch(paths.sass, ['sass', 'guard']);
});

gulp.task('install', ['git-check'], function () {
	return bower.commands.install()
		.on('log', function (data) {
			gutil.log('bower', gutil.colors.cyan(data.id), data.message);
		});
});

gulp.task('git-check', function (done) {
	if (!sh.which('git')) {
		console.log(
			'  ' + gutil.colors.red('Git is not installed.'),
			'\n  Git, the version control system, is required to download Ionic.',
			'\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
			'\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
		);
		process.exit(1);
	}
	done();
});
