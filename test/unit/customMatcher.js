/**
 * NRdev
 *
 * @category   Controller
 * @package    NRdev
 * @author     André Lademann <andre.lademann@netresearch.de>
 * @license    https://netresearch.de/license
 * @version    0.1.0
 * @link http://stackoverflow.com/questions/24341746/jasmine-check-that-an-array-contains-an-element-with-given-properties
 */
'use strict';
var customArrayMatcher = {
	toContain: function (util, customEqualityTesters) {
		return {
			compare: function (actual, expected) {
				if (expected === undefined) {
					expected = '';
				}
				var result = {};
				_.map(actual, function (item) {
					_.map(item, function (subItem, key) {
						result.pass = util.equals(subItem,
							expected[key], customEqualityTesters);
					});
				});
				if (result.pass) {
					result.message = 'Expected ' + actual + 'to contain ' + expected;
				}
				else {
					result.message = 'Expected ' + actual + 'to contain ' + expected + ' but it was not found';
				}
				return result;
			}
		};
	}
};
