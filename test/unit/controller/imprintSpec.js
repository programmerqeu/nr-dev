'use strict';

/**
 * jasmine specs for home controller
 */
describe('Imprint controller should', function () {

	var scope, controller;

	beforeEach(function () {
		module('nrdev');
		module('nrdev.controller');
	});

	describe('ImprintCtrl', function () {

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller('ImprintCtrl', {
				'$scope': scope
			});
		}));

		it('should ...', inject(function ($controller) {
			var imprintController = $controller('ImprintCtrl', {
				$scope: {}
			});
			expect(imprintController).toBeDefined();
		}));

		it('sets the title', function () {
			expect(scope.title).toBe('Imprint');
		});

	});

});
