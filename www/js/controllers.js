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

	.controller('AppCtrl', function ($scope) {
	})

        .controller('HomeCtrl', function($scope) {
            var page = {title: 'Developers home'};

	  // start google analytics tracking
	  if (typeof analytics !== 'undefined') {
		analytics.trackView(page.title);
	  }
	})

        .controller('ImprintCtrl', function($scope) {
            var page = {title: 'Imprint'};

	  // start google analytics tracking
	  if (typeof analytics !== 'undefined') {
		analytics.trackView(page.title);
	  }
	})

	.controller('PlaylistsCtrl', function ($scope) {
	  $scope.playlists = [
		{title: 'Reggae', id: 1},
		{title: 'Chill', id: 2},
		{title: 'Dubstep', id: 3},
		{title: 'Indie', id: 4},
		{title: 'Rap', id: 5},
		{title: 'Cowbell', id: 6}
	  ];
	})

	.controller('PlaylistCtrl', function ($scope, $stateParams) {
	})
