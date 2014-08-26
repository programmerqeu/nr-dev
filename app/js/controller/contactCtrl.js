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
	.controller('ContactCtrl', [
		'$log',
		'$scope',
		'ContactService',
		function ($log, $scope, ContactService) {
			var page;
			page = {title: 'Contact'};
			$scope.title = page.title;
			$scope.contacts = ContactService.getAllItems();

			// start google analytics tracking
			if (typeof analytics !== 'undefined') {
				analytics.trackView(page.title);
			}
		}
	]);
