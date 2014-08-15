/**
 * NRdev
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

window.appService = angular.module('nrdev.service', []);
window.appModel = angular.module('nrdev.model', []);
window.appController = angular.module(
	'nrdev.controller',
	['nrdev.model', 'nrdev.service']);

window.app = angular.module('nrdev', [
	'ionic',
	'ui.router',
	'nrdev.controller',
	'pascalprecht.translate'
]);
