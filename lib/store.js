"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var store = function () {
  var vault = []; // let vault = [
  //   { index: 'en_US', label: 'English', dictionary: {...} },
  //   ...
  // ];

  var init = function init(newLanguage) {
    vault = newLanguage || [];
    return vault;
  };

  var menu = function menu() {
    var list = vault.map(function (entry) {
      return {
        index: entry.index,
        label: entry.label
      };
    });
    return list;
  };

  var get = function get(langaugeIndex) {
    var result = vault.find(function (entry) {
      return entry.index === langaugeIndex;
    }) || {};
    return result;
  };

  return {
    init: init,
    menu: menu,
    get: get
  };
}();

var _default = store;
exports["default"] = _default;