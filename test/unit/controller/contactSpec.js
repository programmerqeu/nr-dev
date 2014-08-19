'use strict';

/**
 * jasmine specs for home controller
 */
describe('Contact controller should', function () {

	var scope, controller;

	beforeEach(function () {
		module('nrdev');
		module('nrdev.controller');
	});

	describe('ContactCtrl', function () {

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller('ContactCtrl', {
				'$scope': scope
			});
		}));

		it('should ...', inject(function ($controller) {
			var contactController = $controller('ContactCtrl', {
				$scope: {}
			});
			expect(contactController).toBeDefined();
		}));

		it('sets the title', function () {
			expect(scope.title).toBe('Contact');
		});

		it('should have getContacts', function () {
			expect(scope.getContacts).toBeDefined();
		});

	});

});
