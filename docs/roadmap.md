NR{dev} - Cross platform application
====================================


## Roadmap

_Start simple as possible_

### Version 0.0.0

**Features:** 
- Frame layout
- Icons, splash screen
- home page, imprint
- Google Analytics
- Documentation
- BDD
- Contacts
- Multi language

#### 0.0.1
1. **frame layout**
	- icons
	- splash screen
	- colours with SASS
	- download web font
- **Home page**
- **Imprint page**
	- _tel_ links to call phone numbers
	- _mailto_ links
- **Documentation**

####  0.0.2
- **Google Analtics 1.0**
	- Include GA Cordova Plugin
	- Including UA-Code

#### 0.1.0
- **Multi language support 1.0**
	- languages
		- German
		- English
	- automatic preferred language detection
	- multi language support with [angular-translate](https://github.com/angular-translate/angular-translate)

#### 0.2.0
- **Testing**
	- with [Jasmin](http://angularjs.de/artikel/angularjs-test)
	- **CI** for Jasmin [CoffeeScript Testing on Travis CI](http://relistan.com/coffeescript-testing-on-travis-ci/)

#### 0.3.0
- **contacts 1.0**
	- data
		- a simple Array
	- list view
		- Gravatar
		- last name
		- first name
	- view details
		- Gravatar
		- last name
		- first name
		- phone
	
#### 0.4.0
- **Donate a feature/beer 1.0**
	- PayPal Donate Button
	- Amazon wish list



### Version 1.0.0
**New feature:** lamp control

#### 1.0.0
_lampen.nr control lamps an theirs colours in the office of netresearch_

- **lamp control 1.0**
	- show internal status

#### 1.1.0
- ** Testing 2.0**
	- **Functionality tests with [DalekJs](http://dalekjs.com/)**
		- run on headless browser
		- *Tests*
			1. Header and Headline exists
			- Menü exists
			- Page imprint exists and is available
			- Language selection works automatically
			- Page contact exists and is available
				- ALA Entry exists in list view
					- Gravatar image is visible in online mode
					- Fallback image is visible in offline mode
					- First and last name is shown
				- ALA Detail view is available
					- image, first name, last name, address, email, phone
					- mailto: link exists
					- tel: link exists


#### 1.2.0
- **contact 2.0**
	- filter search
	- groups


#### 1.3.0
- **Multi language support 2.0**
	- asnycron static language file loading
	- german as normal included default language



### Version 2.0.0
**New feature:** Meet and great

#### 2.0.0
- **Meet and great 1.0**
	- developers calendar
	- simple list from array (no CMS)
		- date
		- title
		- location

#### 2.1.0
- **Testing 3.0**
	- **CI**
		- integrate in travis-ci for DalekJs
		- Report on https://saucelabs.com/ for DalekJs
	- Watch changes with [gulp-jasmine](https://www.npmjs.org/package/gulp-jasmine)

#### 2.2.0
- **contacts 3.0**
	- data parse XML
	- use local storage
	- local file storage for photos


#### 2.3.0
- **Donate a feature/beer 2.0**
	- progress bar as beer level

### Version 3.0.0
**New feature:** Give me a beer/feature

#### 3.0.0
1. **Donate a beer/feature 3.0**
	- flattr
	- pay pal spenden knopf
	- beer image

#### 3.1.0
- **Testing 4.0**
	- Collect code coverage with [gulp-coverage](https://github.com/dylanb/gulp-coverage)

#### 3.2.0
- **Lamp control**
	- colour switcher
	- Google Analytics Event Tracking

#### 3.3.0
- **Meet and great 2.0**
	- list view from Google Calender ical or xml
	- location link to Google Maps
		- latitude
		- longitude

#### 3.4.0
- **contacts 4.0**
	- Sync into local address book (vcf)
	- show contacts



### Version 4.0.0
**New feature:** _not planned yet_

#### 4.1.0
- **Testing 5.0**
	- Make screenshots on fail

#### 4.X.0
- **Donate a beer/feature 4.0**
	- beer with sensor controlled liquid with sensor controlled liquid rotate background image with CSS and JavaScript

#### 4.X.0
- **Meet and great 3.0**
	- Show event in native calendar (ical)
	- Sync calendar to local calendar
	- Sync event to local calendar (ical?)



### Version 5.0.0
**New feature:** _not planned yet_

#### 5.x.0
- **Donate a beer/feature 5.0**
	- beer with sensor controlled liquid in canvas

#### 5.X.0
- **Meet and great 4.0**
	- show/link attendies to _contacts_
	- create new event
