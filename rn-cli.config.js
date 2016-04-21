'use strict';

const blacklist = require('react-native/packager/blacklist');

const myBlacklist = [
  /dist\/.*/,
];

module.exports = {
  getBlacklistRE() {
    return blacklist('', myBlacklist);
  },
};
