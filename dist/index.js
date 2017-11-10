'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var storageSet = function storageSet(values) {
  Object.keys(values).map(function (v) {
    return [v, typeof values[v] === 'string' ? values[v] : JSON.stringify(values[v])];
  }).forEach(function (v) {
    var _localStorage;

    return (_localStorage = localStorage).setItem.apply(_localStorage, _toConsumableArray(v));
  });
  return values;
};

var storageRemove = function storageRemove(values) {
  Object.keys(values).forEach(function (v) {
    return localStorage.removeItem(v);
  });
  return values;
};

var storageGet = function storageGet(values) {
  return Object.keys(values).reduce(function (p, key) {
    var value = localStorage.getItem(key);
    try {
      value = JSON.parse(rawValue);
    } catch (e) {}
    return _extends({}, p, _defineProperty({}, key, value));
  }, {});
};

exports.storageGet = storageGet;
exports.storageSet = storageSet;
exports.storageRemove = storageRemove;