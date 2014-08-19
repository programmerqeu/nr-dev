'use strict';

/**
 * jasmine specs for home controller
 */
describe('Home controller should', function () {

	var scope, controller;

	beforeEach(function () {
		module('nrdev');
		module('nrdev.controller');
	});

	describe('HomeCtrl', function () {

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller('HomeCtrl', {
				'$scope': scope
			});
		}));

		it('should ...', inject(function ($controller) {
			var homeController = $controller('HomeCtrl', {
				$scope: {}
			});
			expect(homeController).toBeDefined();
		}));

		it('sets the title', function () {
			expect(scope.title).toBe('Developers home');
		});

	});

});
