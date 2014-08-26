/**
 //* NRdev
 *
 * @category   Configuration
 * @package    NRdev
 * @author     André Lademann <andre.lademann@netresearch.de>
 * @license    https://netresearch.de/license
 * @version    0.1.0
 */

'use strict';

window.appConfig = {
	servicesUrl: '',
	version: '0.3.0',
	uacode: 'UA-35739360-3'
};

window.appDirective = angular.module('nrdev.directive', [
	'ngCordova'
]);
window.appService = angular.module('nrdev.service', [
	'ngCordova'
]);
window.appModel = angular.module('nrdev.model', [
	'ngCordova'
]);
window.appController = angular.module('nrdev.controller', [
		'nrdev.model',
		'nrdev.service',
		'nrdev.directive'
	]);

window.app = angular.module('nrdev', [
	'ionic',
	'ngCordova',
	'pascalprecht.translate',
	'ui.router',
	'nrdev.controller',
	'nrdev.directive',
	'nrdev.model',
	'nrdev.service'
]);
