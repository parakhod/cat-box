'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storageRemove = exports.storageSet = exports.storageGet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _parseValues = require('./parseValues');

var _parseValues2 = _interopRequireDefault(_parseValues);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var storageSetSync = function storageSetSync(values) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var parsedValues = (0, _parseValues2.default)(values);
  (0, _parseValues2.default)(values).map(function (v) {
    return [v, typeof values[v] !== 'undefined' ? typeof values[v] === 'string' ? values[v] : JSON.stringify(values[v]) : defaultValue];
  }).forEach(function (v) {
    var _localStorage;

    return (_localStorage = localStorage).setItem.apply(_localStorage, _toConsumableArray(v));
  });

  return parsedValues.reduce(function (p, v) {
    return _extends({}, p, _defineProperty({}, v, values[v] || defaultValue));
  }, {});
};

var storageGetSync = function storageGetSync(values) {
  return (0, _parseValues2.default)(values).reduce(function (p, key) {
    var value = localStorage.getItem(key);
    try {
      value = JSON.parse(rawValue);
    } catch (e) {}

    return _extends({}, p, _defineProperty({}, key, value));
  }, {});
};

var storageRemoveSync = function storageRemoveSync(values) {
  var parsedValues = (0, _parseValues2.default)(values);
  parsedValues.forEach(function (v) {
    return localStorage.removeItem(v);
  });

  return parsedValues.reduce(function (p, v) {
    return _extends({}, p, _defineProperty({}, v, null));
  }, {});
};

var execAsync = function execAsync(f) {
  for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return new _bluebird2.default(function (resolve, reject) {
    try {
      resolve(f.apply(undefined, params));
    } catch (e) {
      reject(e);
    }
  });
};

var storageSet = function storageSet(values, defaultValue) {
  return execAsync(storageSetSync, values, defaultValue);
};

var storageGet = function storageGet(values) {
  return execAsync(storageGetSync, values);
};

var storageRemove = function storageRemove(values) {
  return execAsync(storageRemoveSync, values);
};

exports.storageGet = storageGet;
exports.storageSet = storageSet;
exports.storageRemove = storageRemove;
exports.default = {
  storageGet: storageGet,
  storageSet: storageSet,
  storageRemove: storageRemove
};