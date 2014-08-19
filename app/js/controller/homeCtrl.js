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

window.appController
	.controller('HomeCtrl',
	['$log', '$scope',
		function ($log, $scope) {

			$log.log('Home controller loaded');
			var page = {title: 'Developers home'};


			$scope.title = page.title;

			// start google analytics tracking
			if (typeof analytics !== 'undefined') {
				analytics.trackView(page.title);
			}
		}
	]);
