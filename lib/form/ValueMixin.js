'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ValueMixin = {
    setValue: function setValue(field, e) {
        var v = e;
        var target = e && e.target;
        if (target) {
            if (('' + target.nodeName).toLowerCase() === 'input' && target.type === 'checkbox') {
                v = target.checked;
            } else {
                v = e.target.value;
            }
        }
        var newFormData = {};
        newFormData[field] = v;
        this.setState({
            formData: (0, _objectAssign2["default"])({}, this.state.formData, newFormData)
        });
    }
};
exports["default"] = ValueMixin;
module.exports = exports['default'];