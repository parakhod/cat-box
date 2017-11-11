'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var parseValues = function parseValues(values) {
  return Array.isArray(values) ? values : (typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object' ? Object.keys(values) : typeof values === 'string' ? [values] : [];
};

exports.default = parseValues;