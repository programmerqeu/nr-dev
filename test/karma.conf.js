module.exports = function (config) {
	'use strict';

	config.set({

		basePath: '../',

		files: [
			// libraries
			'www/lib/ionic/js/ionic.bundle.min.js',
			'www/lib/angular-ui-router/release/angular-ui-router.min.js',
			'www/lib/angular-mocks/angular-mocks.js',
			'www/lib/angular-route/angular-route.js',
			'www/lib/angular-translate/angular-translate.js',
			'www/lib/ngCordova/dist/ng-cordova.js',

			// custom matcher
			'lodash.js',
			'test/unit/customMatcher.js',

			// scripts
			'app/js/config.js',
			'app/js/app.js',
			'app/js/i18n/*.js',
			'app/js/service/contactService.js',
			//'app/js/directive/gravatarDirective.js',

			// specs controller
			'app/js/controller/*.js',
			'test/unit/controller/appSpec.js',
			'test/unit/controller/contactSpec.js',
			'test/unit/controller/homeSpec.js',
			'test/unit/controller/imprintSpec.js',

			// specs services
			'test/unit/service/contactSpec.js'

			// specs directives
			//'test/unit/directive/gravatarSpec.js',

		],

		autoWatch: true,

		browsers: ['Chrome'],

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		frameworks: ['jasmine'],

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
