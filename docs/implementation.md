NR{dev} - Cross platform application
====================================

# Implementation NR{dev}

## Requirements

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
    <td></td>
    <td></td>
    <td>960×720</td>
    <td></td>
    <td></td>
  </tr>

  <tr>
    <th align="left">Android large (hdpi):</th>
    <td></td>
    <td></td>
    <td>640×480</td>
    <td></td>
    <td></td>
  </tr>

  <tr>
    <th align="left">Android medium (mdpi)</th>
    <td></td>
    <td></td>
    <td>470×320</td>
    <td></td>
    <td></td>
  </tr>

  <tr>
    <th align="left">Android small (ldpi)</th>
    <td></td>
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
        analytics.startTrackerWithId('UA-XXXXXXXX-X');
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
``` and select Google Analytics
##### UA Code

- [Google Analytics](https://www.google.com/analytics/)
- UA-35739360-3

### version 0.0.3

#### BDD Test
- [AngularJs and Jasmin](http://angularjs.de/artikel/angularjs-test)


## User story

### version 0.0.1
- app icons
- splash screen with nr logo
- homescreen with nr logo


## Implemation

### Icons

#### Android

**Path:**	platforms/android/res/drawable


