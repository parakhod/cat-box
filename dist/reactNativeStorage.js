'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storageRemove = exports.storageSet = exports.storageGet = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _parseValues = require('./parseValues');

var _parseValues2 = _interopRequireDefault(_parseValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AsyncStorage = null;

try {
  if (__webpack_modules__[require.resolveWeak('react-native')]) {
    AsyncStorage = require('react-native').AsyncStorage;
  }
} catch (err) {
  console.log('Module react native does not exist, ignoring');
}

var storageSet = function storageSet(values) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var parsedValues = (0, _parseValues2.default)(values);
  return AsyncStorage.multiSet(parsedValues.map(function (v) {
    return [v, typeof values[v] !== 'undefined' ? typeof values[v] === 'string' ? values[v] : JSON.stringify(values[v]) : defaultValue];
  })).then(function () {
    return parsedValues.reduce(function (p, v) {
      return _extends({}, p, _defineProperty({}, v, values[v] || defaultValue));
    }, {});
  });
};

var storageRemove = function storageRemove(values) {
  var parsedValues = (0, _parseValues2.default)(values);
  return AsyncStorage.multiRemove(parsedValues).then(function () {
    return parsedValues.reduce(function (p, v) {
      return _extends({}, p, _defineProperty({}, v, null));
    }, {});
  });
};

var storageGet = function storageGet(values) {
  return AsyncStorage.multiGet((0, _parseValues2.default)(values)).then(function (v) {
    return v.reduce(function (p, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          rawValue = _ref2[1];

      var value = rawValue;
      try {
        value = JSON.parse(rawValue);
      } catch (e) {}

      return _extends({}, p, _defineProperty({}, key, value));
    }, {});
  });
};

exports.storageGet = storageGet;
exports.storageSet = storageSet;
exports.storageRemove = storageRemove;