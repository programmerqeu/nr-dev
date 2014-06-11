/**
 * NRdev
 *
 * @category   Application
 * @package    NRdev
 * @author     André Lademann <andre.lademann@netresearch.de>
 * @license    https://netresearch.de/license
 * @version    0.0.3
 */

'use strict';
angular.module('nrdev', ['ionic', 'nrdev.controllers', 'pascalprecht.translate'])

	.run(function ($ionicPlatform, $rootScope) {
	  console.log("Platform is ready!");

	  $rootScope.appVersion = appConfig.version;

	  $ionicPlatform.ready(function () {

		// start google analytics tracking
		if (typeof analytics !== 'undefined') {
		  analytics.startTrackerWithId('UA-35739360-3');
		  analytics.trackView('Screen Title');
		} else {
		  console.log("Google Analytics plugin could not be loaded.")
		}

		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
		  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
		  // org.apache.cordova.statusbar required
		  StatusBar.styleDefault();
		}
	  });
	})

	.config(function ($stateProvider, $urlRouterProvider) {
	  $stateProvider

		  .state('app', {
			url: "/app",
			abstract: true,
			templateUrl: "templates/menu.html",
			controller: 'AppCtrl'
		  })

		  .state('app.home', {
			url: "/home",
			views: {
			  'menuContent': {
				templateUrl: "templates/home.html",
				controller: "HomeCtrl"
			  }
			}
		  })

		  .state('app.impress', {
			url: "/impress",
			views: {
			  'menuContent': {
				templateUrl: "templates/impress.html",
				controller: "ImpressCtrl"
			  }
			}
		  })

		  .state('app.browse', {
			url: "/browse",
			views: {
			  'menuContent': {
				templateUrl: "templates/browse.html"
			  }
			}
		  })
		  .state('app.playlists', {
			url: "/playlists",
			views: {
			  'menuContent': {
				templateUrl: "templates/playlists.html",
				controller: 'PlaylistsCtrl'
			  }
			}
		  })

		  .state('app.single', {
			url: "/playlists/:playlistId",
			views: {
			  'menuContent': {
				templateUrl: "templates/playlist.html",
				controller: 'PlaylistCtrl'
			  }
			}
		  });
	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/home');
	});

// translation
$translateProvider.translations('en_GB', en_GB);
$translateProvider.translations('de_DE', de_DE);
$translateProvider.preferredLanguage('de_DE');
})
;
