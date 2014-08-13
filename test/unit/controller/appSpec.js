'use strict';

/**
 * jasmine specs for contact controllers
 */
describe('App controller should', function(){

	beforeEach(module('nrdev.controller'));

	it('should ...', inject(function($controller) {
		var appController = $controller('AppCtrl', {
			$scope: {}
		});
		expect(appController).toBeDefined();
	}));

});
