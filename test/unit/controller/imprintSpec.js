'use strict';

/**
 * jasmine specs for contact controllers
 */
describe('Imprint controller should', function(){

	beforeEach(module('nrdev.controller'));

	it('should ...', inject(function($controller) {
		var imprintController = $controller('ImprintCtrl', {
			$scope: {}
		});
		expect(imprintController).toBeDefined();
	}));

});
