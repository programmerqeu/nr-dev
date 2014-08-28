/* jasmine specs for directives go here */


describe('Gravatar directive', function () {
	'use strict';

	beforeEach(function () {
		module('nrdev.directive');
	});

	describe('should', function () {

		/**
		 * @todo inject variables and use it
		 */
		it('should print an image tag when user is online', function () {

			module(function ($provide) {
				$provide.value('alt', 'Alternative title');
				$provide.value('hash', '7702981a0474e6dfefc8158907f3f5f8');
				$provide.value('size', '50');
				$provide.value('defaultImage', 'http://media.andrelademann.de/img/avatar-default.png');
			});

			inject(function ($compile, $rootScope) {
				var element, mock;
				mock = {
					alt: 'Alternative title',
					hash: '7702981a0474e6dfefc8158907f3f5f8',
					size: 50,
					defaultImage: 'http://media.andrelademann.de/img/avatar-default.png'
				};

				element = $compile('<gravatar hash="7702981a0474e6dfefc8158907f3f5f8" size="60" alt="Alternative title" />')($rootScope);
				expect(element.attr('src')).toEqual('https://secure.gravatar.com/avatar/7702981a0474e6dfefc8158907f3f5f8.jpg&s=50&d=http://media.andrelademann.de/img/avatar-default.png');
				expect(element.attr('alt')).toEqual(mock.alt);
				expect(element.attr('height')).toEqual(mock.size);
				expect(element.attr('width')).toEqual(mock.size);
				expect(element.attr('title')).toEqual(mock.alt);
			});
		});

		/**
		 * @todo try to emulate offline modus
		 */
		//it('should print an image tag with fallback image when user is offline', function () {
		//	window.cordova = true;
		//	scope.isOnline = false;
		//
		//	module(function ($provide) {
		//		$provide.value('alt', 'Alternative title');
		//		$provide.value('hash', '7702981a0474e6dfefc8158907f3f5f8');
		//		$provide.value('size', '50');
		//		$provide.value('defaultImage', 'http://media.andrelademann.de/img/avatar-default.png');
		//	});
		//
		//	inject(function ($compile, $rootScope) {
		//		var element = $compile('<img src="img/avatar_default.png.jpg?s={{ size }}&d={{ defaultImage }}" title="{{ alt }}" />')
		//		($rootScope);
		//		expect(element.attr('src')).toEqual('https://secure.gravatar.com/avatar/7702981a0474e6dfefc8158907f3f5f8.jpg&s=50&d=http://media.andrelademann.de/img/avatar-default.png');
		//	});
		//});

	});
});
