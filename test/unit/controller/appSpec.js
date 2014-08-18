'use strict';

/**
 * jasmine specs for contact controllers
 */
describe('App controller should', function () {

	var scope, controller;


	beforeEach(function () {
		module('nrdev');
		module('nrdev.controller');
	});

	describe('AppCtrl', function () {

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller('AppCtrl', {
				'$scope': scope
			});
		}));

		it('should ...', inject(function ($controller) {
			var appController = $controller('AppCtrl', {
				$scope: {}
			});
			expect(appController).toBeDefined();
		}));

		it('sets the title', function () {
			expect(scope.title).toBe('Developers home');
		});

	});

});
