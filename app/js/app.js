/**
 * NRdev
 *
 * @category   Configuration
 * @package    NRdev
 * @author     André Lademann <andre.lademann@netresearch.de>
 * @license    https://netresearch.de/license
 * @version    0.1.0
 */

window.app
	.config(function ($stateProvider,
							$urlRouterProvider,
							$translateProvider) {

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
				.state('app.contact', {
					url: '/contact',
					views: {
						'menuContent': {
							templateUrl: 'templates/contact.html',
							controller: 'ContactCtrl'
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
					'en': 'en_UK',
					'en_US': 'en_UK',
					'en-US': 'en_UK',
					'en-UK': 'en_UK',
					'en_UK': 'en_UK',
					'de': 'de_DE',
					'de-DE': 'de_DE',
					'de_DE': 'de_DE',
					'de_CH': 'de_DE',
					'de-CH': 'de_DE',
					'de_AT': 'de_DE',
					'de-AT': 'de_DE'
				})
				.determinePreferredLanguage();
		}
	)
	.run(function ($ionicPlatform,
								 $window,
								 $rootScope,
							 $log) {
		'use strict';

		$log.log('Platform is ready!');
		$rootScope.appVersion = appConfig.version;
		$ionicPlatform.ready(function () {
			// start google analytics tracking
			if (typeof analytics !== 'undefined') {
				analytics.startTrackerWithId(window.appConfig.uacode);
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

			if (window.cordova) {
				$rootScope.status = navigator.onLine;
				$window.addEventListener('offline', function () {
					$rootScope.$apply(function () {
						$rootScope.status = 'offline';

					});
				}, false);
				$window.addEventListener('online', function () {
					$rootScope.$apply(function () {
						$rootScope.status = 'online';
					});
				}, false);
			}

		});
	});
