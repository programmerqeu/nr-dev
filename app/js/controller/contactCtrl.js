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

			// http://www.gravatar.com/avatar/cb9c39001ba2a0637fe02edfab1c45e0.jpg?s=120&r=pg&d=identicon
			$scope.contacts = [
				{
					firstName: 'André',
					lastName: 'Lademann',
					gravatar: '7702981a0474e6dfefc8158907f3f5f8',
					link: {
						blog: 'http://blog.netresearch.de',
						github: 'vergissberlin',
						gplus: '102068444349380253348',
						twitter: 'vergissberlin'
					}
				},
				{
					firstName: 'Michael',
					lastName: 'Ablass',
					gravatar: 'cb9c39001ba2a0637fe02edfab1c45e0',
					link: {
						blog: 'http://blog.netresearch.de'
					}
				}
			];


			// start google analytics tracking
			if (typeof analytics !== 'undefined') {
				analytics.trackView(page.title);
			}
		}
	]);
