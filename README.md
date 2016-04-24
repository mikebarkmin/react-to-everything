# Mobile, desktop and website Apps with the same code
[![Coverage Status](https://coveralls.io/repos/github/mikebarkmin/ReactToEverything/badge.svg?branch=master)](https://coveralls.io/github/mikebarkmin/ReactToEverything?branch=master)
[![Build Status](https://travis-ci.org/mikebarkmin/ReactToEverything.svg?branch=master)](https://travis-ci.org/mikebarkmin/ReactToEverything)
[![Dependency Status](https://david-dm.org/mikebarkmin/ReactToEverything.svg)](https://david-dm.org/mikebarkmin/ReactToEverything)
[![devDependency Status](https://david-dm.org/mikebarkmin/ReactToEverything/dev-status.svg)](https://david-dm.org/mikebarkmin/ReactToEverything#info=devDependencies)

This concept was introduced to me by searching the web for an all-in-one Solution. After a while i have realizied, that something like this is not the best approch to make a high quality app. Then i had found out about react and react-native. After a while i realizied, that this might be the best approch after all. So i went on GitHub to find a repo, which used the react enviroment to make something universial possibel. I wasn't disappointed. [Benoitvallon](https://github.com/benoitvallon) has created something wonderfull, which got me hook at the first glance. His repo [react-native-nw-react-calculator](https://github.com/benoitvallon/react-native-nw-react-calculator) was the perfect starting point. It almost featured everything i wanted. So i tooked this repo and made the neccessary changes, which are fitting my kind of thinking better. So ReactToEverything was created.

## Libraries

* [react](https://facebook.github.io/react/) for Web and Desktop App
* [react-native](https://facebook.github.io/react-native/) for iOs and Android App
* [i18n-js](https://github.com/fnando/i18n-js) for i18n Translation in all Apps
* [electron-prebuilt](http://electron.atom.io/) to build an electron App
* [electron-packager](https://github.com/electron-userland/electron-packager) to package an electron App for Linux, Mac and Windows
* [babel](https://babeljs.io/) to be able to use all the fancy ES6 Stuff
* [eslint](http://eslint.org/) to really use all the fancy ES6 Stuff
* [grunt](http://gruntjs.com/) to create build task
* [webpack](https://webpack.github.io/) to help with developing the Web and Desktop App
* [istanbul](https://github.com/gotwarlost/istanbul) to check the coverage of your tests
* [mocha](https://mochajs.org/) to tests your files
* [enzyme](http://airbnb.io/enzyme/index.html) to test React and React Native

## Basic philosophy

I kept the Basic philosophy like [Benoitvallon](https://github.com/benoitvallon) has defined it. So take a look at his [repo](https://github.com/benoitvallon/react-native-nw-react-calculator/blob/master/README.md#basic-philosophy) to understand how you should structure your Codebase, when using this Boilerplate.

## Tests

I find it more cleary, when a test is nearby the file, which is the test tests. Therefore I have configured mocha, so that you should write a test in a schema like this.
```
[file].tests.js // [file] = file to test
```
For example take a look at src/App/AppRender.tests.js and src/App/AppRender.js. This should illustrate where your tests should be located and how they should be named.

Because the Base Class as described by [Benoitvallon](https://github.com/benoitvallon/react-native-nw-react-calculator/blob/master/README.md#components) of each Component should contain all of the logic, this file should be tested really well. I would recommend to create the test file right when you create the component and write tests for each method in the Base Class as soon as possible.

## NPM Scripts

I have created npm scripts for every task I have encountered, when something is missing let me know. :smile:

npm run ...
* **build** - runs webpack to translate es6 code and merge all of your code in a single file
* **package:desktop** - creates a package for Linux, Mac and Windows in the dist Folder
* **package:android** - creates a apk for android
* **electron** - runs your app with electron
* **web** - runs your app in the browser
* **react-native** - starts react-native
* **android** - runs your app on an connected android device or a simulator
* **ios** - runs your app on an ios device or a simulator
* **coverage** - runs code coverage
* **lint** - runs eslint to check your code style
* **travis** - runs build, test, coverage and lint

npm ...
* **start** - runs your app in the browser
* **test** - runs mocha to test your app

## Codestyle

I find it really important to use a consistent codestyle throughout your project. Therefore I added ESLint as a devDependency and created an eslint-config file. Most of the Codestyle rules came from the [Airbnb Style Guide](https://github.com/airbnb/javascript). They have done an awesome job with this Style Guide. I think, when you use a good Codestyle you make less errors and when you combine that with ESLint, which will consistently throw your bad styles at you (when you have an editor, which picks show eslint errors/warning or after running "npm run lint"), you will make much less mistakes.

### ES6

This boilerplate is all about ES6. Everything is written with new ES6 features. Tests ... ES6, Source Files ... ES6, Gruntfile ... ES6, Webpack Config ... ES6. So keep moving with Javascript and use ES6. I love it :heart:. Here you can read about how you have done something with Javascript and how you do it with ES6. [Use ECMAScript 6 Today](http://code.tutsplus.com/articles/use-ecmascript-6-today--net-31582)

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

Android requires a little bit more work from you. But when you are following this guide ([Android Setup](https://facebook.github.io/react-native/docs/android-setup.html)), it should be easy.

Now everything is setup up and you are ready to develop your awesome app. I would really love to know about your projects. So send me an email and I will take a look.

# TODOS

- [ ] find out how to test react-native with this setup
