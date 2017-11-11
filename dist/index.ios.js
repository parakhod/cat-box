'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storageRemove = exports.storageSet = exports.storageGet = undefined;

var _reactNativeStorage = require('./reactNativeStorage');

exports.storageGet = _reactNativeStorage.storageGet;
exports.storageSet = _reactNativeStorage.storageSet;
exports.storageRemove = _reactNativeStorage.storageRemove;
exports.default = {
  storageGet: _reactNativeStorage.storageGet,
  storageSet: _reactNativeStorage.storageSet,
  storageRemove: _reactNativeStorage.storageRemove
};