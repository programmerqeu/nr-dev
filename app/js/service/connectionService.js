'use strict';

/**
 * bili.services.cordova Module
 * https://github.com/ballmw/ng-cordova
 * http://ngcordova.com/
 * 
 * http://forum.ionicframework.com/t/how-to-use-cordova-plugins-with-ionic-framework-the-angular-way/1804/2
 * General Bili Cordova services module
 */


// https://github.com/ballmw/ng-cordova
angular.module('bili.services.cordova')

	.service('CordovaNetwork', [function() {
		// Get Cordova's global Connection object or emulate a smilar one
		var Connection = window.Connection || {
				'ETHERNET': 'ETHERNET',
				'WIFI': 'WIFI',
				'CELL_2G': 'CELL_2G',
				'CELL_3G': 'CELL_3G',
				'CELL_4G': 'CELL_4G',
				'CELL': 'CELL',
				'EDGE': 'EDGE',
				'UNKNOWN': 'unknown'
			};

		// Get Cordova's global navigator.connection object or emulate one
		var networkConnection = navigator.connection || {
				type: 'UNKNOWN'
			};

		return {
			isOnline: function () {
				var blnReturn = false;

				switch (this.getStatus()) {
					case Connection.ETHERNET:
					case Connection.WIFI:
					case Connection.CELL_2G:
					case Connection.CELL_3G:
					case Connection.CELL_4G:
					case Connection.CELL:
						blnReturn = true;
						break;
				}

				return blnReturn;
			},

			getStatus: function () {
				return networkConnection.type;
			}
		};
	}]);
