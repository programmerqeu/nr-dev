'use strict';

/**
 * jasmine specs for contact controllers
 */
describe('Home controller should', function(){

	beforeEach(module('nrdev.controller'));

	it('should ...', inject(function($controller) {
		var homeController = $controller('HomeCtrl', {
			$scope: {}
		});
		expect(homeController).toBeDefined();
	}));

});
