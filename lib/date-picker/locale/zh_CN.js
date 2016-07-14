'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _zh_CN = require('gregorian-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _zh_CN3 = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN4 = _interopRequireDefault(_zh_CN3);

var _zh_CN5 = require('../../time-picker/locale/zh_CN');

var _zh_CN6 = _interopRequireDefault(_zh_CN5);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 统一合并为完整的 Locale
var locale = (0, _objectAssign2["default"])({}, _zh_CN2["default"]);
locale.lang = (0, _objectAssign2["default"])({
    placeholder: '请选择日期',
    rangePlaceholder: ['开始日期', '结束日期']
}, _zh_CN4["default"]);
locale.timePickerLocale = (0, _objectAssign2["default"])({}, _zh_CN6["default"]);
// should add whitespace between char in Button
locale.lang.ok = '确 定';
exports["default"] = locale;
module.exports = exports['default'];