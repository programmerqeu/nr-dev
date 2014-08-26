'use strict';
/**
 * jasmine specs for services go here
 *
 * @link http://nathanleclaire.com/blog/2014/04/12/unit-testing-services-in-angularjs-for-fun-and-for-profit/
 * @link http://stackoverflow.com/questions/15487510/angularjs-jasmine-comparing-objects
 */

describe('Contact service', function () {

	var contactService;

	beforeEach(function () {
		module('nrdev.service');
	});

	describe('ContactService', function () {

		beforeEach(inject(function (_ContactService_) {
			contactService = _ContactService_;

			this.addMatchers({
				toBeSimilarTo: function (expected) {
					function buildObject(object) {
						var built = {};
						for (var name in object) {
							if (object.hasOwnProperty(name)) {
								built[name] = object[name];
							}
						}
						return built;
					}

					var actualObject = buildObject(this.actual);
					var expectedObject = buildObject(expected);
					var notText = this.isNot ? ' not' : '';

					this.message = function () {
						return 'Expected ' + actualObject + notText + ' to be similar to ' + expectedObject;
					};

					return jasmine.getEnv().equals_(actualObject, expectedObject);
				}
			});

		}));

		it('gets the right data', function() {
			expect(contactService.contactList[0].firstName).toBeDefined();
			expect(contactService.contactList[0].lastName).toBeDefined();
			expect(contactService.contactList[0].gravatar).toBeDefined();
			expect(contactService.contactList[0].link).toBeDefined();
			expect(contactService.contactList[0].link.blog).toBeDefined();
			expect(contactService.contactList[0].link.github).toBeDefined();
			expect(contactService.contactList[0].link.gplus).toBeDefined();
			expect(contactService.contactList[0].link.twitter).toBeDefined();
		});

	});
});
