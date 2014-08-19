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

		it('should be defined...', inject(function ($controller) {
			var contactController = $controller('ContactCtrl', {
				$scope: {}
			});
			expect(contactController).toBeDefined('be defined.');
		}));

		it('sets the title ...', function () {
			expect(scope.title).toBe('Contact');
		});

		it('should have getContacts ...', function () {
			expect(scope.getContacts).toBeDefined();
		});

		it('contact should have ...', function () {
			expect(scope.contacts[0].firstName).toBeDefined();
			expect(scope.contacts[0].lastName).toBeDefined();
			expect(scope.contacts[0].gravatar).toBeDefined();
			expect(scope.contacts[0].link).toBeDefined();
			expect(scope.contacts[0].link.blog).toBeDefined();
			expect(scope.contacts[0].link.github).toBeDefined();
			expect(scope.contacts[0].link.gplus).toBeDefined();
			expect(scope.contacts[0].link.twitter).toBeDefined();
		});

	});

});
