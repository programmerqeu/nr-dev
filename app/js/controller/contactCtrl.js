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
		'$scope',
		function ($scope) {
			var
				page,
				letterHasMatch;

			page = {title: 'Contact'};
			$scope.title = page.title;

			$scope.getContacts = function () {
				var contacts;

				letterHasMatch = {};
				//Filter contacts by $scope.search.
				//Additionally, filter letters so that they only show if there
				//is one or more matching contact
				return contacts.filter(function (item) {
					var itemDoesMatch = !$scope.search || item.isLetter ||
						item.first_name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1 ||
						item.last_name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;

					//Mark this person's last name letter as 'has a match'
					if (!item.isLetter && itemDoesMatch) {
						var letter = item.last_name.charAt(0).toUpperCase();
						letterHasMatch[letter] = true;
					}

					return itemDoesMatch;
				}).filter(function (item) {
					//Finally, re-filter all of the letters and take out ones that don't
					//have a match
					return !(item.isLetter && !letterHasMatch[item.letter]);
				});
			};

			// start google analytics tracking
			if (typeof analytics !== 'undefined') {
				analytics.trackView(page.title);
			}
		}
	]);
