/**
 * NRdev
 *
 * @category   Controller
 * @package    NRdev
 * @author     André Lademann <andre.lademann@netresearch.de>
 * @license    https://netresearch.de/license
 * @version    0.1.0
 */

'use strict';

appController.controller('AppCtrl', function () {
	var page = {title: 'Developers home'};

	// start google analytics tracking
	if (typeof analytics !== 'undefined') {
		analytics.trackView(page.title);
	}
});
