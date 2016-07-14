'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _ValueMixin = require('./ValueMixin');

var _ValueMixin2 = _interopRequireDefault(_ValueMixin);

var _createDOMForm = require('rc-form/lib/createDOMForm');

var _createDOMForm2 = _interopRequireDefault(_createDOMForm);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Form2["default"].create = function () {
    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var options = (0, _objectAssign2["default"])({}, o, {
        fieldNameProp: 'id',
        fieldMetaProp: _constants.FIELD_META_PROP
    });
    return (0, _createDOMForm2["default"])(options);
};
_Form2["default"].Item = _FormItem2["default"];
// @Deprecated
_Form2["default"].ValueMixin = _ValueMixin2["default"];
exports["default"] = _Form2["default"];
module.exports = exports['default'];