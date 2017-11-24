'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var storageFunctions = navigator.product === 'ReactNative' ? require('./reactNativeStorage') : require('./browserStorage');

var storageGet = storageFunctions.storageGet,
    storageSet = storageFunctions.storageSet,
    storageRemove = storageFunctions.storageRemove;
exports.storageGet = storageGet;
exports.storageSet = storageSet;
exports.storageRemove = storageRemove;
exports.default = {
  storageGet: storageGet,
  storageSet: storageSet,
  storageRemove: storageRemove
};