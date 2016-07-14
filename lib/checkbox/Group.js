'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CheckboxGroup = function (_React$Component) {
    _inherits(CheckboxGroup, _React$Component);

    function CheckboxGroup(props) {
        _classCallCheck(this, CheckboxGroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.toggleOption = function (option) {
            var optionIndex = _this.state.value.indexOf(option.value);
            var value = [].concat(_toConsumableArray(_this.state.value));
            if (optionIndex === -1) {
                value.push(option.value);
            } else {
                value.splice(optionIndex, 1);
            }
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            _this.props.onChange(value);
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value || [];
        } else if ('defaultValue' in props) {
            value = props.defaultValue || [];
        }
        _this.state = { value: value };
        return _this;
    }

    CheckboxGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value || []
            });
        }
    };

    CheckboxGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    CheckboxGroup.prototype.getOptions = function getOptions() {
        var options = this.props.options;

        return options.map(function (option) {
            if (typeof option === 'string') {
                return {
                    label: option,
                    value: option
                };
            }
            return option;
        });
    };

    CheckboxGroup.prototype.render = function render() {
        var _this2 = this;

        var options = this.getOptions();
        return React.createElement(
            'div',
            { className: 'ant-checkbox-group' },
            options.map(function (option) {
                return React.createElement(
                    _index2["default"],
                    { disabled: 'disabled' in option ? option.disabled : _this2.props.disabled, checked: _this2.state.value.indexOf(option.value) !== -1, onChange: function onChange() {
                            return _this2.toggleOption(option);
                        }, className: 'ant-checkbox-group-item', key: option.value },
                    option.label
                );
            })
        );
    };

    return CheckboxGroup;
}(React.Component);

exports["default"] = CheckboxGroup;

CheckboxGroup.defaultProps = {
    options: [],
    defaultValue: [],
    onChange: function onChange() {}
};
CheckboxGroup.propTypes = {
    defaultValue: React.PropTypes.array,
    value: React.PropTypes.array,
    options: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func
};
module.exports = exports['default'];