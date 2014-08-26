/**
 * NRdev
 *
 * @category   Controller
 * @package    NRdev
 * @author     André Lademann <andre.lademann@netresearch.de>
 * @license    https://netresearch.de/license
 * @version    0.1.0
 */


window.appService.service('ContactService', function () {

	'use strict';

	this.contactList = [
		{
			firstName: 'André',
			lastName: 'Lademann',
			languages: 'PHP, JavaScript, Ruby',
			gravatar: '7702981a0474e6dfefc8158907f3f5f8',
			link: {
				blog: 'http://blog.netresearch.de',
				github: 'vergissberlin',
				gplus: '102068444349380253348',
				twitter: 'vergissberlin'
			}
		},
		{
			firstName: 'André',
			lastName: 'Hähnel',
			languages: 'PHP',
			gravatar: '22a875b3cccacc0fdf53625eab93f184'
		},
		{
			firstName: 'Axel',
			lastName: 'Kummer',
			languages: 'PHP',
			gravatar: '8ea0f4c395821898ace24827589a2529'
		},
		{
			firstName: 'Chrisitan',
			lastName: 'Weiske',
			languages: 'PHP, JavaScript',
			gravatar: '23ef06327be0858250d2b19b32a76798'
		},
		{
			firstName: 'Christian',
			lastName: 'Opitz',
			languages: 'PHP, JavaScript, Design',
			gravatar: 'ea163a58df061f5ac28b50e3369794bc'
		},
		{
			firstName: 'Christoph',
			lastName: 'Aßmann',
			languages: 'PHP, Magento',
			gravatar: '5d703f019b3aef93d64f9cb3a9b9a7f6'
		},
		{
			firstName: 'Dandy',
			lastName: 'Umlauft',
			languages: 'CSS, JavaScript',
			gravatar: '2f472ad8b11ea1d289b6116c39e07182',
			link: {
				gplus: '102859986551333034718'
			}
		},
		{
			firstName: 'Denis',
			lastName: '',
			languages: 'PHP',
			gravatar: ''
		},
		{
			firstName: 'Michael',
			lastName: 'Kunze',
			languages: 'PHP',
			gravatar: '78ddf108b5fb7638b2bec1f79d55442c'
		},
		{
			firstName: 'Marian',
			lastName: 'Pollzien',
			languages: 'PHP, JavaScript',
			gravatar: '2ca31169787fff2d46e1634da1fb98d0'
		},
		{
			firstName: 'Martin',
			lastName: 'Wunderlich',
			languages: 'CSS, JavaScript',
			gravatar: 'b022e713e4958145dc6caee76d3c374f',
			link: {
				gplug: '100332124854944398839'
			}
		},
		{
			firstName: 'Mathias',
			lastName: 'Uhlmann',
			languages: 'CSS, JavaScript',
			gravatar: '23766178b5eb52433b3327fa663162be',
			link: {
				gplus: '104015341059882368046'
			}
		},
		{
			firstName: 'Norman',
			lastName: 'Golatka',
			gravatar: '069cf33b00515079002959e72dd0a246'
		},
		{
			firstName: 'Paul',
			lastName: 'Siedler',
			languages: '',
			gravatar: 'c46476d14f5de1f13e1fee0b0d5781e8'
		},
		{
			firstName: 'Rico',
			lastName: 'Sonntag',
			languages: 'PHP, JavaScript',
			gravatar: '007c8135aebb8e56e4c01935c8b8e212'
		},
		{
			firstName: 'Sebastian',
			lastName: 'Ertner',
			languages: 'PHP, JavaScript',
			gravatar: 'fc3e6cad4909721f49e365b614176926'
		},
		{
			firstName: 'Sebastian',
			lastName: 'Mendel',
			languages: 'PHP',
			gravatar: 'db70db41367f9674a034a87848d0398e',
			link: {
				gplus: '111946881166250873518'
			}
		},
		{
			firstName: 'Steffen',
			lastName: 'Paasch',
			languages: 'PHP, JavaScript',
			gravatar: '5c3cbbed9ca289d4f7fff4581f5d07b6',
			link: {
				gplus: '117280012006099293747'
			}
		},
		{
			firstName: 'Thomas',
			lastName: 'Schöne',
			gravatar: '5096bb5734dc79fb3a58e4fb6d7b3f04'
		},
		{
			firstName: 'Tobias',
			lastName: 'Hein',
			languages: 'PHP',
			gravatar: 'c6f0950fb8896493b4610b122d9a2d92'
		}
	];

	/**
	 *
	 * @param index
	 * @returns {*}
	 */
	this.getItem = function (index) {
		return this.contactList[index];
	};

	/**
	 *
	 * @returns {*}
	 */
	this.getAllItems = function () {
		return this.contactList;
	};

	/**
	 *
	 * @param item
	 */
	this.addItem = function (item) {
		this.contactList.push(item);
	};

	/**
	 *
	 * @param item
	 */
	this.removeItem = function (item) {
		this.contactList.splice(this.contactList.indexOf(item), 1);
	};

	/**
	 *
	 * @returns {Number}
	 */
	this.size = function () {
		return this.contactList.length;
	};

});
