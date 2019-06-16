"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializer = exports["default"] = void 0;

var _store = _interopRequireDefault(require("./store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    var text = language.dictionary ? language.dictionary[index] : '';
    var reg;

    if (text) {
      Object.keys(replacement).map(function (key) {
        reg = new RegExp(key, 'g');
        text = text.replace(reg, replacement[key]);
      });
    } else {
      text = 'undefined';
    }

    return text;
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