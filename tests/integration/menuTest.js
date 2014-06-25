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
var url = 'http://nr-dev.local',
	title = 'NR{dev}';

module.exports = {

  name: 'Home page - Developers home',

  'Can get page title (OK, TDD style, message)': function (test) {
	test
		.open(url)
		.assert.notVisible('.menu-left')
		.click('.nav-bar .left-buttons button')
		.wait(500)
		//.assert.visible('.menu-left')
		.screenshot('report/screenshots/page_home_menu.png')
		.done();
  }


};

