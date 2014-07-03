# NR[dev] - Cross platform application 
[![Build Status](https://secure.travis-ci.org/vergissberlin/nr-dev.png?branch=develop)](http://travis-ci.org/vergissberlin/nr-dev)

> The is a cross application for mobile devices. Created by and for developers of Netresearch GmbH & Co.KG. The app includes experiments with various API´s. Manage colors of lamps in the office, games from noise, let you list parts of the internal address book. It is based on Ionic (http://ionicframework.com) base project. A special thanks goes to the developers of this project.

## Jump to Section

* [Roadmap](#roadmap)
* [Ideas](#ideas)
* [Implementation and Requirements](#implementation-and-requirements)
* [Contribute](#contribute)

## Roadmap
[[Back To Top]](#jump-to-section)

<!--
[![Build Status](https://www.codeship.io/projects/91045130-d4fe-0131-bcf5-76b58fc60a40/status)](https://www.codeship.io/projects/23662)
[![Build Status](https://travis-ci.org/vergissberlin/nr-dev.svg?branch=develop)](https://travis-ci.org/vergissberlin/nr-dev)
[![Dependency Status](https://gemnasium.com/vergissberlin/nr-dev.svg)](https://gemnasium.com/vergissberlin/nr-dev)
[![Code Climate](https://codeclimate.com/github/vergissberlin/nr-dev.png)](https://codeclimate.com/github/vergissberlin/nr-dev)
-->
### Current version and open tasks

- The current version of _NR[dev]_ is [![GitHub version](https://badge.fury.io/gh/vergissberlin%2Fnr-dev.svg)](http://badge.fury.io/gh/vergissberlin%2Fnr-dev)
- Open feature tasks you can find on [issues](https://github.com/vergissberlin/nr-dev/issues?labels=enhancement&state=open) and on waffle.io [![Stories in Ready](https://badge.waffle.io/vergissberlin/nr-dev.png?label=ready&title=Ready)](https://waffle.io/vergissberlin/nr-dev).


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
- **home page 1.0**
- **imprint page 1.0**
	- _tel_ links to call phone numbers
	- _mailto_ links
- **documentation**

####  0.0.2
- **Google Analtics 1.0**
	- Include GA Cordova Plugin
	- Including UA-Code

#### 0.1.0
- **multi language support 1.0**
	- languages
		- German
		- English
	- automatic preferred language detection
	- multi language support with [angular-translate](https://github.com/angular-translate/angular-translate)

#### 0.2.0
- **testing 1.0**
	- **integration tests with [DalekJs](http://dalekjs.com/)**
		- run on headless browser locally
		- *tests*
			1. Header and Headline exists
			- Menü exists
			- Page imprint exists and is available

#### 0.3.0
- **contacts 1.0**
	- data
		- a simple Array
		- encrypt email address in source code
	- list view
		- Gravatar
		- last name
		- first name
	- view details
		- Gravatar
		- last name
		- first name
		- phone
- **testing 1.1**
	- Page contact exists and is available
		- ALA Entry exists in list view
			- Gravatar image is visible in online mode
			- Fallback image is visible in offline mode
			- First and last name is shown
		- ALA Detail view is available
			- image, first name, last name, address, email, phone
			- mailto: link exists
			- tel: link exists

	
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
- **testing 2.0**
	- **BDD** with [Jasmine](http://angularjs.de/artikel/angularjs-test)
    	- **CI** for Jasmin [CoffeeScript Testing on Travis CI](http://relistan.com/coffeescript-testing-on-travis-ci/)
	- **DalekJs**
		- run on [TraviCI](https://travis-ci.org/vergissberlin/nr-dev/builds)
		- create grunt watch task to run tests on changes 	
		- Language selection works automatically

#### 1.2.0
- **contact 2.0**
	- filter search
	- groups

#### 1.3.0
- **Multi language support 2.0**
	- asnycron static language file loading
	- german as normal included default language

#### 1.4.0
- **Home page 2.0**
	- animated logo on touch



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

#### 2.4.0
- **Home page 4.0**
	- animated logo on shake gesture

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


## Ideas
[[Back To Top]](#jump-to-section)

_Collection of ideas_

- **Testing**
	- Integration tests with [DalekJs](http://dalekjs.com/)
		- run test locally
		- run locally with grunt watch task
		- integrate in [travis-ci](https://travis-ci.org/vergissberlin/nr-dev/builds)
	- Unit tests with [Jasmine](http://jasmine.github.io/), [Mocha](http://visionmedia.github.io/mocha/) or/and [chai](http://chaijs.com/)
		- run test locally
		- run test locally with [jsTestDriver](http://www.jetbrains.com/webstorm/webhelp/run-debug-configuration-jstestdriver.html) on WebStorm/PhpStorm
		- integrate in [travis-ci](https://travis-ci.org/vergissberlin/nr-dev/builds)
- **Contacts**
	- attributes
		- phone number
		- email
		- photo Gravatar
		- photo G+
		- adress
	- functions
		- safe to local storage
		- call phone number
		- email open mail app
		- send as vCard
		- sync to local adresss book
		- Google Map with dot from address
- **Multi language**
	- Translatable into a variable number of languages
	- l10n and [i18n](https://docs.angularjs.org/guide/i18n)
	- Default language with asynchron language file loading for other languages
	- [Automatic](http://angular-translate.github.io/docs/#/guide/09_language-negotiation) language selection with fallback
- **Google Analtics**
	- Including UA-Code
	- Event tracking
- **Remote controlled lights** (lampen.nr)
	- status
	- selectable presets
	- preset disco
	- Import your own sound
- **Give me a beer**
	- integraed payment system
	- Animated beer graphic
- **Calendar**
	- array
	- Google Calendar
	- Google Calender participants
	- Meet and Greet: trade fairs, round tables, table football events, workshops
	- Show event in native calendar
	- Sync calendar/event to native valendar
	- Days until the next cake OR Happy birthday reminder
- **Feedback**
	- Push Notification Cell
	- e-mail
	- Push Notification Chrome
	- What you always wanted to tell a developer wanted:
		- To this end, a nice illustration
- **Countr**
	- hint
	- coffee machine
	- pizza
	- Copy Paste Counter
	- football table gool counter with raspberypi and sensors
- **Football table**
	- Rasberypi with cam in a football table
	- acrylic glass
- **Classicals**
	- photo collection gallery
	- snap with integrated phone cam
	- Upload from file system
	- comments
	- linking Author
		- internal
		- External only hidden
		- implementation


## Implementation and Requirements
[[Back To Top]](#jump-to-section)

### version 0.0.1
#### Icons
For all images and icons, the PNG format is recommended. You should avoid using interlaced PNGs.
The standard bit depth for icons and images is 24 bits—that is, 8 bits each for red, green, and blue—plus an 8-bit alpha channel.
You don’t need to constrain your palette to web-safe colors.

##### Helper
- **Icons**
	- Icon templates for iOS and Android [Download](http://appicontemplate.com/)
		- http://ios.robs.im/files/iOS-7-Vector-Icon.sketch.zip
		- http://ios.robs.im/files/iOS-7-Icon-Set.psd
		- iOS7 http://appicontemplate.com/downloads/appicontemplate_v3.3.zip
		- iOS6 http://appicontemplate.com/downloads/appicontemplate_v2.1.zip
		- Android http://appicontemplate.com/downloads/androidlaunchertemplate_v1.1.zip
	- Icon generator app for iOS [Appstore](https://itunes.apple.com/de/app/prepo/id476533227?mt=12&ign-mpt=uo%3D4)
	- [Cordova documentation](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html#Icons%20and%20Splash%20Screens)
- **Splash screen**
	- [Cordova documentation](http://cordova.apache.org/docs/en/3.3.0/cordova_splashscreen_splashscreen.md.html#Splashscreen)


<table width="100%">
  <tr>
    <th align="left" >Target</th>
    <th align="left" >App Icon</th>
    <th align="left" >App Store</th>
    <th align="left" >Lunch Image</th>
    <th align="left" >Spotlight</th>
    <th align="left" >Settings</th>
  </tr>

  <tr>
    <th align="left">iPhone5</th>
    <td>120×120</td>
    <td>1024×1024</td>
    <td>640×1136</td>
    <td>80×80</td>
    <td>58×58</td>
  </tr>

  <tr>
    <th align="left">iPod</th>
    <td>120×120</td>
    <td>1024×1024</td>
    <td>640×960</td>
    <td>80×80</td>
    <td>58×58</td>
  </tr>

  <tr>
    <th align="left">iPad</th>
    <td>120×120</td>
    <td>1024×1024</td>
    <td>
	1536×2048 (portrait)<br>
	2048×1536 (landscape)
    </td>
    <td>80×80</td>
    <td>58×58</td>
  </tr>

  <tr>
    <th align="left">iPad2</th>
    <td>76×76</td>
    <td>1024×1024</td>
    <td>
	768×1024 (portrait)<br>
	1024×768 (landscape)
    </td>
    <td>40×40</td>
    <td>29×29</td>
  </tr>

  <tr>
    <th align="left">Android xlarge (xhdpi)</th>
    <td>36×36</td>
    <td></td>
    <td>960×720</td>
    <td></td>
    <td></td>
  </tr>

  <tr>
    <th align="left">Android large (hdpi):</th>
    <td>48×48</td>
    <td></td>
    <td>640×480</td>
    <td></td>
    <td></td>
  </tr>

  <tr>
    <th align="left">Android medium (mdpi)</th>
    <td>72×72</td>
    <td></td>
    <td>470×320</td>
    <td></td>
    <td></td>
  </tr>

  <tr>
    <th align="left">Android small (ldpi)</th>
    <td>96×96</td>
    <td></td>
    <td>426×320</td>
    <td></td>
    <td></td>
  </tr>

</table>


### File names

#### Android

<pre>
android/screen-hdpi-landscape.png
android/screen-hdpi-portrait.png
android/screen-ldpi-landscape.png
android/screen-ldpi-portrait.png
android/screen-mdpi-landscape.png
android/screen-mdpi-portrait.png
android/screen-xhdpi-landscape.png
android/screen-xhdpi-portrait.png
</pre>

#### iOS

<pre>
ios/screen-ipad-landscape-2x.png
ios/screen-ipad-landscape.png
ios/screen-ipad-portrait-2x.png
ios/screen-ipad-portrait.png
ios/screen-iphone-landscape-2x.png
ios/screen-iphone-landscape.png
ios/screen-iphone-portrait-2x.png
ios/screen-iphone-portrait.png
ios/screen-iphone-portrait-568h-2x.png
</pre>


- cp: no such file or directory: /var/www/vergissberlin/nr-dev/res/android/ldpi.png
- cp: no such file or directory: /var/www/vergissberlin/nr-dev/res/ios/icon.png
- cp: no such file or directory: /var/www/vergissberlin/nr-dev/res/android/hdpi.png
- cp: no such file or directory: /var/www/vergissberlin/nr-dev/res/android/xhdpi.png

### version 0.0.2

#### Google Analytics

##### Links
- [Ionic Forum](http://forum.ionicframework.com/t/google-analytics/4489)
- [GA Cordova Plugin 1](https://github.com/phonegap-build/GAPlugin)
- [GA Cordova Plugin 2](cordova plugin add https://github.com/danwilson/google-analytics-plugin.git)
- [Google Analytics and PhoneGap](http://www.raymondcamden.com/index.cfm/2013/3/28/Google-Analytics-and-PhoneGap)
- [Angularlytics](http://luisfarzati.github.io/angulartics/)

##### Steps
1. Install Cordova GA Plugin
```
cordova plugin add https://github.com/danwilson/google-analytics-plugin.git
```
- Include code
```
.run(function(previewData, localStorage, $ionicPlatform) {
  $ionicPlatform.ready(function() {
      if (typeof analytics !== 'undefined'){
        analytics.startTrackerWithId('UA-35739360-3');
      }
      else
      {
        console.log("Google Analytics plugin could not be loaded.")
      }
```
3. Download Google Analytics SDK 3.0 for [iOS](https://dl.google.com/dl/googleanalyticsservices/GoogleAnalyticsServicesiOS.zip) and/or [Android](https://dl.google.com/dl/googleanalyticsservices/GoogleAnalyticsServicesAndroid.zip) OR
```bash
cd /path/sdk/tools
android sdk
``` 
and select Google Analytics

##### UA Code

- [Google Analytics](https://www.google.com/analytics/)
- UA-35739360-3

### version 0.1.0
#### Multi language support

1. Install [angular-translate](https://github.com/angular-translate/angular-translate)


### version 0.2.0
#### Integration tests
- **Functionality tests with [DalekJs](http://dalekjs.com/)**
	- install DalekJS and browser driver for Chrome, FirefoxOS, IE and mobile Safarie
	- run on headless browser
	- integrate in travis-ci

##### Tests
1. Header and Headline exists
- Menü exists
- Page home exists and is available with logo
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


## User story

### version 0.0.1
- app icons
- splash screen with nr logo
- homescreen with nr logo


## Implemation

### Icons

#### Android

**Path:**	platforms/android/res/drawable


## Contribute
[[Back To Top]](#jump-to-section)

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

### Git workflow

- This project used [git-flow](https://github.com/nvie/gitflow). If you never used it before, have a look on [this blog post](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/) and this [this cheat sheet](http://danielkummer.github.io/git-flow-cheatsheet/)

#### Feature

##### Start new feature _NAME_

```bash
git checkout develop
git pull
git flow feature start NAME
git push --tags
```
##### Finish feature _NAME_

```bash
git checkout feature/NAME
git pull
git flow feature start NAME
git push --all
```

#### Release

##### Start new release _1.0.0_

```bash
git checkout develop
git pull
git flow release start 1.0.0
git push --all
```

##### Finish release _1.0.0_

```bash
git checkout release/1.0.0
git pull
git flow release finish 1.0.0
git push --all
git push --tags
git push origin :release/1.0.0
```

### Using this project

We recommend using the `ionic` utility to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ sudo npm install -g ionic
```

Then run:

```bash
$ sudo npm install -g ionic
$ ionic start myProject tabs
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page.

### Installation

While we recommend using the `ionic` utility to create new Ionic projects, you can use this repo as a barebones starting point to your next Ionic app.

To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cd ionic-app-base
$ sudo npm install -g cordova ionic gulp
$ npm install
$ gulp install
```

#### Using Sass (optional)

This project makes it easy to use Sass (the SCSS syntax) in your projects. This enables you to override styles from Ionic, and benefit from
Sass's great features.

Just update the `./scss/main.scss` file, and run `gulp` or `gulp watch` to rebuild the CSS files for Ionic.

Note: if you choose to use the Sass method, make sure to remove the included `ionic.css` file in `index.html`, and then uncomment
the include to your `main.css` file which now contains all your Sass code and Ionic itself:

```html
<!-- IF using Sass (run gulp sass first), then remove the CSS include above
<link href="css/main.css" rel="stylesheet">
-->
```

#### Updating Ionic

To update to a new version of Ionic, open bower.json and change the version listed there.

For example, to update from version `1.0.0-beta.4` to `1.0.0-beta.5`, open bower.json and change this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.4"
```

To this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.5"
```

After saving the update to bower.json file, run `gulp install`.

Alternatively, install bower globally with `npm install -g bower` and run `bower install`.


### Developer

#### Prepare Environment
1. Donwload SDK http://developer.android.com/sdk/index.html
- Follow Instructions: http://cordova.apache.org/docs/en/2.5.0/guide_getting-started_android_index.md.html
- Export the paths to your  ~/.basrc file like so:
```
export PATH=${PATH}:$HOME/Programme/phonegap/adt-bundle-linux-x86_64-20140321/sdk/platform-tools/:
export PATH=${PATH}:$HOME/Programme/phonegap/adt-bundle-linux-x86_64-20140321/sdk/tools/
```
- install ant ```sudo aptitude install ant```
- create hardware config ```android create avd --name my_and --target 1```
- build http://ionicframework.com/getting-started/


```
sudo aptitude install -y python-software-properties python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo aptitude update
sudo aptitude install nodejs
sudo aptitude install npm
sudo npm install -g cordova
sudo npm install -g phonegap
phonegap create my-app
cd my-app
export PATH=${PATH}:/home/oshirowanen/Downloads/adt-bundle-linux-x86_64-20131030/sdk/platform-tools:/home/oshirowanen/Downloads/adt-bundle-linux-x86_64-20131030/sdk/tools
sudo aptitude install ant
cordova platform add android
android create avd --name my_and --target 1
phonegap run android
```

### Issues

Please report issues to [ticket system](https://github.com/vergissberlin/nr-dev/issues).
Pull requests are welcome here!




--------
<small>_This readme has been automatically generated by [readme generator](https://github.com/aponxi/grunt-readme-generator) on Wed Jul 02 2014 21:44:56 GMT+0200 (CEST)._</small>