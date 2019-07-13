"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializer = exports["default"] = void 0;

var _store = _interopRequireDefault(require("./store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BTBLanguage = function BTBLanguage() {
  var language = {};

  if (_store["default"].menu()[0]) {
    language = _store["default"].get(_store["default"].menu()[0].index || '');
  }

  var menu = function menu() {
    return _store["default"].menu();
  };

  var get = function get() {
    return language;
  };

  var set = function set(index) {
    language = _store["default"].get(index);
    return language;
  };

  var translate = function translate(index, replacement) {
    // replacement = {
    //  'key': 'string'
    // }
    var text = searchText(index, language.dictionary || {});
    var reg;

    if (replacement) {
      Object.keys(replacement).map(function (key) {
        reg = new RegExp(key, 'g');
        text = text.replace(reg, replacement[key]);
      });
    }

    return text;
  };

  var searchText = function searchText(index, dictionary) {
    var result = searchTextRecursive(index, dictionary);
    return typeof result === 'undefined' ? index : result;
  };

  var searchTextRecursive = function searchTextRecursive(index, dictionary) {
    var _index$split = index.split('.'),
        _index$split2 = _toArray(_index$split),
        key = _index$split2[0],
        keyRest = _index$split2.slice(1);

    return _typeof(dictionary[key]) === 'object' ? searchTextRecursive(keyRest.join('.'), dictionary[key]) : dictionary[key];
  };

  return {
    menu: menu,
    get: get,
    set: set,
    translate: translate
  };
};

exports["default"] = BTBLanguage;

var storeInitializer = function storeInitializer(config) {
  return _store["default"].init(config);
};

exports.initializer = storeInitializer;