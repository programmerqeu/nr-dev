/**
 * NRdev
 *
 * @category    Tests
 * @subcategory Integration
 * @package     NRdev
 * @author      André Lademann <andre.lademann@netresearch.de>
 * @license     https://netresearch.de/license
 * @version     0.2.0
 */

'use strict';
var url = 'http://0.0.0.0:9001',
	title = 'NR[dev]';

module.exports = {

  name: 'Home page - Developers home',

  'Can get page title': function (test) {
	test
		.open(url)
		.assert.title().is(title, 'Page title is correct')
		.wait(200)
		.screenshot('report/screenshots/page_home.png')
		.done();
  },

  'The title is not "Home"': function (test) {
	test
		.open(url)
		.assert.title().is.not('Home', 'Title is not "Home"')
		.done();
  },

  'Header is visible': function (test) {
	test
		.open(url)
		.assert.visible('.bar-header')
		.assert.visible('.page-home figure')
		.assert.text('.bar-header .title').is('Developers home')
		.assert.attr('.bar-header .title', 'ng-bind-html', 'title', 'Title in header is not bind.')
		.done();
  },

  'Logo is visible': function (test) {
	test
		.open(url)
		.assert.visible('.page-home figure')
		.resize({width: 640, height: 320})
		.assert.visible('.page-home figure')
		.done();
  }
};
