/**
 * jasmine specs for services go here
 *
 * @link http://nathanleclaire.com/blog/2014/04/12/unit-testing-services-in-angularjs-for-fun-and-for-profit/
 * @link http://stackoverflow.com/questions/15487510/angularjs-jasmine-comparing-objects
 */

describe('Contact service', function () {
	'use strict';

	var contactService, mock;

	beforeEach(function () {
		module('nrdev.service');
	});


	describe('ContactService', function () {

		beforeEach(inject(function (_ContactService_) {
			contactService = _ContactService_;
			mock = 		{
				firstName: 'Torsten',
				lastName: 'Turbine',
				languages: 'PHP, JavaScript, Ruby, Turbo Pascal',
				gravatar: '7702981a0474e6dfefc8158907f3f5f8',
				link: {
					blog: 'http://blog.netresearch.de',
					github: 'tturbine',
					gplus: '1044444444444444444444',
					twitter: 'tturbo'
				}
			};

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
			expect(contactService.contactList[0].languages).toBeDefined();
			expect(contactService.contactList[0].gravatar).toBeDefined();
			expect(contactService.contactList[0].link).toBeDefined();
			expect(contactService.contactList[0].link.blog).toBeDefined();
			expect(contactService.contactList[0].link.github).toBeDefined();
			expect(contactService.contactList[0].link.gplus).toBeDefined();
			expect(contactService.contactList[0].link.twitter).toBeDefined();
		});

		it('define crud methods', function() {
			expect(contactService.addItem).toBeDefined();
			expect(contactService.getItem).toBeDefined();
			expect(contactService.getAllItems).toBeDefined();
			expect(contactService.removeItem).toBeDefined();
		});

		it('define service information methods', function() {
			expect(contactService.size).toBeDefined();
		});


		it('should able to add and red an item', function() {
			var lastItem;
			contactService.addItem(mock);
			lastItem = contactService.size()-1;
			console.log(lastItem);
			console.log(contactService.contactList.length);
			console.log(contactService.contactList[20]);

			expect(contactService.getItem(lastItem)).toBeSimilarTo(mock);
		});

	});
});
