'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcCascader = require('rc-cascader');

var _rcCascader2 = _interopRequireDefault(_rcCascader);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _arrayTreeFilter = require('array-tree-filter');

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _object = require('object.omit');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Cascader = function (_React$Component) {
    _inherits(Cascader, _React$Component);

    function Cascader(props) {
        _classCallCheck(this, Cascader);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleChange = function (value, selectedOptions) {
            _this.setValue(value, selectedOptions);
        };
        _this.handlePopupVisibleChange = function (popupVisible) {
            _this.setState({ popupVisible: popupVisible });
            _this.props.onPopupVisibleChange(popupVisible);
        };
        _this.setValue = function (value) {
            var selectedOptions = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            _this.props.onChange(value, selectedOptions);
        };
        _this.clearSelection = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.setValue([]);
            _this.setState({ popupVisible: false });
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        _this.state = {
            value: value || [],
            popupVisible: false
        };
        return _this;
    }

    Cascader.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({ value: nextProps.value || [] });
        }
    };

    Cascader.prototype.getLabel = function getLabel() {
        var _this2 = this;

        var _props = this.props;
        var options = _props.options;
        var displayRender = _props.displayRender;

        var selectedOptions = (0, _arrayTreeFilter2["default"])(options, function (o, level) {
            return o.value === _this2.state.value[level];
        });
        var label = selectedOptions.map(function (o) {
            return o.label;
        });
        return displayRender(label, selectedOptions);
    };

    Cascader.prototype.render = function render() {
        var _classNames, _classNames2;

        var props = this.props;

        var _splitObject = (0, _splitObject4["default"])(props, ['prefixCls', 'children', 'placeholder', 'size', 'disabled', 'className', 'style', 'allowClear']);

        var _splitObject2 = _slicedToArray(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var prefixCls = _splitObject2$.prefixCls;
        var children = _splitObject2$.children;
        var placeholder = _splitObject2$.placeholder;
        var size = _splitObject2$.size;
        var disabled = _splitObject2$.disabled;
        var className = _splitObject2$.className;
        var style = _splitObject2$.style;
        var allowClear = _splitObject2$.allowClear;
        var otherProps = _splitObject2[1];

        var sizeCls = (0, _classnames2["default"])({
            'ant-input-lg': size === 'large',
            'ant-input-sm': size === 'small'
        });
        var clearIcon = allowClear && !disabled && this.state.value.length > 0 ? React.createElement(_icon2["default"], { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
        var arrowCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-picker-arrow', true), _defineProperty(_classNames, prefixCls + '-picker-arrow-expand', this.state.popupVisible), _classNames));
        var pickerCls = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, className, !!className), _defineProperty(_classNames2, prefixCls + '-picker', true), _defineProperty(_classNames2, prefixCls + '-picker-disabled', disabled), _classNames2));
        // Fix bug of https://github.com/facebook/react/pull/5004
        // and https://fb.me/react-unknown-prop
        var inputProps = (0, _object2["default"])(otherProps, ['onChange', 'options', 'popupPlacement', 'transitionName', 'displayRender', 'onPopupVisibleChange', 'changeOnSelect', 'expandTrigger']);
        return React.createElement(
            _rcCascader2["default"],
            _extends({}, props, { value: this.state.value, popupVisible: this.state.popupVisible, onPopupVisibleChange: this.handlePopupVisibleChange, onChange: this.handleChange }),
            children || React.createElement(
                'span',
                { style: style, className: pickerCls },
                React.createElement(_input2["default"], _extends({}, inputProps, { placeholder: this.state.value && this.state.value.length > 0 ? null : placeholder, className: prefixCls + '-input ant-input ' + sizeCls, value: '', disabled: disabled, readOnly: true })),
                React.createElement(
                    'span',
                    { className: prefixCls + '-picker-label' },
                    this.getLabel()
                ),
                clearIcon,
                React.createElement(_icon2["default"], { type: 'down', className: arrowCls })
            )
        );
    };

    return Cascader;
}(React.Component);

exports["default"] = Cascader;

Cascader.defaultProps = {
    prefixCls: 'ant-cascader',
    placeholder: 'Please select',
    transitionName: 'slide-up',
    popupPlacement: 'bottomLeft',
    onChange: function onChange() {},

    options: [],
    displayRender: function displayRender(label) {
        return label.join(' / ');
    },
    disabled: false,
    allowClear: true,
    onPopupVisibleChange: function onPopupVisibleChange() {}
};
module.exports = exports['default'];