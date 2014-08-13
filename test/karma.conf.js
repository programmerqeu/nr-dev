module.exports = function (config) {
	'use strict';

	config.set({

		basePath: '../',

		files: [
			'www/lib/angular/angular.js',
			'www/lib/angular-mocks/angular-mocks.js',
			'www/lib/angular-route/angular-route.js',
			'www/lib/angular-translate/angular-translate.js',
			'app/js/config.js',
			'app/js/app.js',
			'app/js/controller/appCtrl.js',
			'test/unit/controller/appSpec.js'
		],

		autoWatch: true,

		frameworks: ['jasmine'],

		browsers: ['Chrome'],

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		plugins: [
			'karma-junit-reporter',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-phantomjs-launcher',
			'karma-jasmine'
		],

		junitReporter: {
			outputFile: 'test/result/unit.xml',
			suite: 'unit'
		}

	});
};
