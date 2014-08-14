'use strict';

/**
 * jasmine specs for contact controllers
 */
describe('Contact controller should', function(){

	beforeEach(module('nrdev.controller'));

	it('should ...', inject(function($controller) {
		var contactController = $controller('ContactCtrl', {
			$scope: {}
		});
		expect(contactController).toBeDefined();
	}));

});
