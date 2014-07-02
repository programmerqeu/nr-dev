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
var
	url = 'http://0.0.0.0:9001/#/app/imprint',
	title = 'NR[dev]';

module.exports = {

	name: 'Impress page - Developers home',

	'Can get page title from impress page': function (test) {
		test
			.open(url)
			.assert.title().is(title, 'Page title is correct')
			.wait(200)
			.screenshot('report/screenshots/page_impress.png')
			.done();
	},

	'Header is visible': function (test) {
		test
			.open(url)
			.assert.visible('.bar-header')
			.assert.text('.bar-header .title').is('Impressum')
			.assert.attr('.bar-header .title', 'ng-bind-html', 'title', 'Title in header is not bind.')
			.done();
	},

	'Header navigation': function (test) {
		test
			.open(url)
			.assert.notVisible('ion-nav-back-button')
			.assert.visible('ion-nav-bar > div > span > button', 'Menu toggle buttons is visible.')
			.assert.attr('ion-nav-bar > div > span > button', 'menu-toggle', 'left', 'Menu toggle buttons is available.')
			.done();
	},

	'Side navigation': function (test) {
		test
			.open(url)
			.assert.attr('ion-side-menu', 'is-enabled', 'true', 'Menu is enabled.')
			.screenshot('report/screenshots/page_imprint.png')
			.click('ion-nav-bar > div > span > button')
			.screenshot('report/screenshots/page_imprint_menu_closed.png')
			.wait(500)
			.screenshot('report/screenshots/page_imprint_menu_open.png')
			.assert.visible('ion-side-menu > header.bar-header')
			.assert.notVisible('ion-nav-back-button')
			.done();
	},

	'Gravatar is visible': function (test) {
		test
			.open(url)
			.assert.visible('.item-avatar')
			.done();
	},

	'Content is scrollable': function (test) {
		test
			.open(url)
			.assert.chain()
				.exists('ion-content', 'The content area exists.')
				.attr('ion-content', 'overflow-scroll', 'scroll', 'Content ist scrollable.')
			.end()
			.done();
	},

	'Footer exists': function (test) {
		test
			.open(url)
			.assert.exists('footer', 'The footer exists.')
			.done();
	}

};
