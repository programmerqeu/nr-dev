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
angular.module('nrdev.controllers', [])

	.controller('AppCtrl', function () {
	})

	.controller('HomeCtrl', function () {
	  var page = {title: 'Developers home'};

	  // start google analytics tracking
	  if (typeof analytics !== 'undefined') {
		analytics.trackView(page.title);
	  }
	})

	.controller('ImprintCtrl', function () {
	  var page = {title: 'Imprint'};

	  // start google analytics tracking
	  if (typeof analytics !== 'undefined') {
		analytics.trackView(page.title);
	  }
	});
