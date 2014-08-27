/**
 * NRdev
 *
 * jasmine specs for home controller
 *
 * @category   Unit tests
 * @package    NRdev
 * @author     André Lademann <andre.lademann@netresearch.de>
 * @license    https://netresearch.de/license
 * @version    0.1.0
 */
describe('Contact controller should', function () {
	'use strict';

	var scope, controller;

	beforeEach(function () {
		module('nrdev');
		module('nrdev.controller');
		module('nrdev.directive');
		module('nrdev.service');
	});

	describe('ContactCtrl', function () {

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller('ContactCtrl', {
				'$scope': scope
			});
		}));

		it('should be defined ...', inject(function ($controller) {
			var contactController = $controller('ContactCtrl', {
				$scope: {}
			});
			expect(contactController).toBeDefined('be defined.');
		}));

		it('sets the title ...', function () {
			expect(scope.title).toBe('Contact');
		});

		it('should have getContacts ...', function () {
			expect(scope.contacts).toBeDefined();
		});

	});

});
