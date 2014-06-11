/**
 * NRdev
 *
 * @category   Application
 * @package    NRdev
 * @author     André Lademann <andre.lademann@netresearch.de>
 * @license    https://netresearch.de/license
 * @version    0.0.3
 */

angular.module('nrdev', ['ionic', 'nrdev.controllers', 'pascalprecht.translate'])

	.run(function ($ionicPlatform, $rootScope, $log) {
	  'use strict';

	  $log.log('Platform is ready!');
	  $rootScope.appVersion = appConfig.version;

	  $ionicPlatform.ready(function () {

		// start google analytics tracking
		if (typeof analytics !== 'undefined') {
		  analytics.startTrackerWithId(appConfig.uacode);
		} else {
		  $log.log('Google Analytics plugin could not be loaded.');
		}

		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
		  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
		  // org.apache.cordova.statusbar required
		  window.StatusBar.styleDefault();
		}
	  });
	})

	.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
	  'use strict';

	  $stateProvider
		  .state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/menu.html',
			controller: 'AppCtrl'
		  })

		  .state('app.home', {
			url: '/home',
			views: {
			  'menuContent': {
				templateUrl: 'templates/home.html',
				controller: 'HomeCtrl'
			  }
			}
		  })

		  .state('app.imprint', {
			url: '/imprint',
			views: {
			  'menuContent': {
				templateUrl: 'templates/imprint.html',
				controller: 'ImprintCtrl'
			  }
			}
		  });
	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/home');


	  // translations
	  $translateProvider
		  .translations('en_UK', en_UK)
		  .translations('de_DE', de_DE)
		  .fallbackLanguage('en_UK', 'de_DE')
		  .registerAvailableLanguageKeys(['en_UK', 'de_DE'], {
			'en': 	 'en_UK',
			'en_US': 'en_UK',
			'en-US': 'en_UK',
			'en-UK': 'en_UK',
			'en_UK': 'en_UK',
			'de':	 'de_DE',
			'de-DE': 'de_DE',
			'de_DE': 'de_DE',
			'de_CH': 'de_DE',
			'de-CH': 'de_DE',
			'de_AT': 'de_DE',
			'de-AT': 'de_DE'
		  })
		  .determinePreferredLanguage();
	});
