# Mobile, desktop and website Apps with the same code
[![Coverage Status](https://coveralls.io/repos/github/mikebarkmin/react-to-everything/badge.svg?branch=master)](https://coveralls.io/github/mikebarkmin/react-to-everything?branch=master)
[![Build Status](https://travis-ci.org/mikebarkmin/react-to-everything.svg?branch=master)](https://travis-ci.org/mikebarkmin/react-to-everything)

## Libraries

* [react](https://facebook.github.io/react/) for Web and Desktop App
* [react-native](https://facebook.github.io/react-native/) for iOs and Android App
* [i18n-js](https://github.com/fnando/i18n-js) for i18n Translation in all Apps
* [electron](http://electron.atom.io/) to build an electron App
* [electron-packager](https://github.com/electron-userland/electron-packager) to package an electron App for Linux, Mac and Windows
* [babel](https://babeljs.io/) to be able to use all the fancy ES6 Stuff
* [eslint](http://eslint.org/) to really use all the fancy ES6 Stuff
* [grunt](http://gruntjs.com/) to create build task
* [webpack](https://webpack.github.io/) to help with developing the Web and Desktop App
* [jest](http://facebook.github.io/jest/) to tests your files

## Basic philosophy

I kept the basic philosophy of [Benoitvallon](https://github.com/benoitvallon). So take a look at his [repo](https://github.com/benoitvallon/react-native-nw-react-calculator/blob/master/README.md#basic-philosophy) to understand how you should structure your codebase, when using this boilerplate.

![Imgur](http://i.imgur.com/XdYh2J1.png?1)

## Tests

Because the base class as described by
[Benoitvallon](https://github.com/benoitvallon/react-native-nw-react-calculator/blob/master/README.md#components)
of each component should contain all the logic, this file should be tested
really well. I would recommend creating the test file right when you create the
component and write tests for each method in the Base Class as soon as possible.

## NPM Scripts

I have created npm scripts for every task I have encountered, when something is
missing let me know. :smile:

npm run ...
* **build** - runs webpack to translate es6 code and merge all of your code in a single file
* **package:desktop** - creates a package for Linux, Mac and Windows in the dist Folder
* **package:android** - creates an apk for android
* **electron** - runs your app with electron
* **web** - runs your app in the browser
* **react-native** - starts react-native
* **android** - runs your app on a connected android device or a simulator
* **ios** - runs your app on an iOS device or a simulator
* **coverage** - runs code coverage
* **lint** - runs eslint to check your code style
* **travis** - runs build, test, coverage and lint
* **plop** - auto generate components

npm ...
* **start** - runs your app in the browser
* **test** - runs mocha to test your app

## Plop
With [Plop](https://github.com/amwmedia/plop) you can auto generate new
components. Simply type
```
npm run plop
```
and then choose the desired option. Give a name and you a ready to go and start
coding, without the hassle of creating the same structure over and over again.
Plop is configured by plopfile.js. The templates can be found in plop-templates.

## Codestyle

I find it really important to use a consistent codestyle throughout your
project. Therefore, I added ESLint as a devDependency and created an
eslint-config file. Most of the codestyle rules came from the [Airbnb Style
Guide](https://github.com/airbnb/javascript). They have done an awesome job with
this style-guide. I think, when you use a good codestyle you make fewer errors
and when you combine that with ESLint, which will consistently throw your bad
styles at you (when you have an editor, which picks show ESLint errors/warning
or after running "npm run lint"), you will make much fewer mistakes.

### ES6

This boilerplate is all about ES6. Everything is written with new ES6 features.
Tests ... ES6, Source Files ... ES6, Gruntfile ... ES6, Webpack Config ... ES6.
So keep moving with Javascript and use ES6. I love it :heart:. Here you can read
about how you have done something with Javascript and how you do it with ES6.
[Use ECMAScript 6
Today](http://code.tutsplus.com/articles/use-ecmascript-6-today--net-31582)

# How to get started?

1. Clone the repository `git clone https://github.com/mikebarkmin/react-to-everything.git`
2. Install all Dependencies `npm install`
3. Setup React Native

Install watchman:
```
git clone https://github.com/facebook/watchman.git
cd watchman
git checkout v4.5.0  # the latest stable release
./autogen.sh
./configure
make
sudo make install
```
Install flow:
```
sudo npm install -g flow-bin
```

Android requires a little more work from you, but when you are following
this guide ([Android
Setup](https://facebook.github.io/react-native/docs/android-setup.html)) it
should be easy.

Now everything is set up and you are ready to develop your awesome app. I
would really love to know about your projects. So send me an email and I will
take a look.
