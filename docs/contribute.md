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
git push
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
