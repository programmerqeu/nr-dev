angular.module('nrdev.controllers', [])

	.controller('AppCtrl', function ($scope) {
	})

	.controller('HomeCtrl', function ($scope) {
	  var page = {title: 'Developers home'};
	  $scope.page = page;

	  // start google analytics tracking
	  if (typeof analytics !== 'undefined') {
		analytics.trackView(page.title);
	  }
	})

	.controller('ImpressCtrl', function ($scope) {
	  var page = {title: 'Impress'};
	  $scope.page = page;

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
