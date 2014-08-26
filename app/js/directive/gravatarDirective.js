'use strict';

/* Directives */

window.appDirective
	.directive('gravatar', [
		'$log',
		'$cordovaNetwork',
		function ($log, $cordovaNetwork) {

		var directiveObject = {
			restrict: 'AE',
			replace: true,
			scope: {
				hash: '@',
				alt: '@',
				size: '@'
			},
			link: function (scope) {
				scope.defaultImage = 'http://thefeed.com.au/wp-content/uploads/2013/03/person_default_page.jpg';
			},
			template: '<img src="https://secure.gravatar.com/avatar/{{ hash }}.jpg?s={{ size }}&d={{ defaultImage }}" title="{{ alt }}" />'
		};

		if (window.cordova) {
			if($cordovaNetwork.isOffline()) {
				directiveObject.template = '<img src="img/avatar_default.jpg" title="{{ alt }}" />';
				$log.info('You are offline. Default image as avartar loaded.');
			}
		}

		return directiveObject;
	}
	]);
