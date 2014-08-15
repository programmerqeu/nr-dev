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
	.controller('AppCtrl',
	['$log', '$scope',
		function ($log, $scope) {
			var page = {title: 'Developers home'};
			$scope.title = 'NR[dev]';

			// start google analytics tracking
			if (typeof analytics !== 'undefined') {
				analytics.trackView(page.title);
			}
		}]);
