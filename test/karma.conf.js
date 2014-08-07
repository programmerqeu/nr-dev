module.exports = function (config) {
	config.set({

		basePath: '../',

		files: [
			'www/lib/angular/angular.js',
//			'app/js/**/*.js',
			'test/unit/**/*.js',
			'www/lib/angular-route/angular-route.js',
			'www/lib/angular-mocks/angular-mocks.js'
		],

		autoWatch: true,

		frameworks: ['jasmine'],

		browsers: ['Chrome'],

		plugins: [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine',
			'karma-junit-reporter'
		],

		junitReporter: {
			outputFile: 'test/result/unit.xml',
			suite: 'unit'
		}

	});
};
