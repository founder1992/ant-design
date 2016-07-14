'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {}, child.props.children.split('').join(' '));
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ');
        }
        return React.createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

        _this.clearButton = function (button) {
            button.className = button.className.replace(' ' + _this.props.prefixCls + '-clicked', '');
        };
        _this.handleClick = function () {
            var _this$props;

            // Add click effect
            var buttonNode = (0, _reactDom.findDOMNode)(_this);
            _this.clearButton(buttonNode);
            _this.clickedTimeout = setTimeout(function () {
                return buttonNode.className += ' ' + _this.props.prefixCls + '-clicked';
            }, 10);
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
                return _this.clearButton(buttonNode);
            }, 500);
            (_this$props = _this.props).onClick.apply(_this$props, arguments);
        };
        // Handle auto focus when click button in Chrome
        _this.handleMouseUp = function (e) {
            (0, _reactDom.findDOMNode)(_this).blur();
            if (_this.props.onMouseUp) {
                _this.props.onMouseUp(e);
            }
        };
        return _this;
    }

    Button.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.clickedTimeout) {
            clearTimeout(this.clickedTimeout);
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    };

    Button.prototype.render = function render() {
        var _classNames;

        var props = this.props;

        var _splitObject = (0, _splitObject4["default"])(props, ['type', 'shape', 'size', 'className', 'htmlType', 'children', 'icon', 'loading', 'prefixCls']);

        var _splitObject2 = _slicedToArray(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var type = _splitObject2$.type;
        var shape = _splitObject2$.shape;
        var size = _splitObject2$.size;
        var className = _splitObject2$.className;
        var htmlType = _splitObject2$.htmlType;
        var children = _splitObject2$.children;
        var icon = _splitObject2$.icon;
        var loading = _splitObject2$.loading;
        var prefixCls = _splitObject2$.prefixCls;
        var others = _splitObject2[1];
        // large => lg
        // small => sm

        var sizeCls = {
            large: 'lg',
            small: 'sm'
        }[size] || '';
        var classes = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + type, type), _defineProperty(_classNames, prefixCls + '-' + shape, shape), _defineProperty(_classNames, prefixCls + '-' + sizeCls, sizeCls), _defineProperty(_classNames, prefixCls + '-icon-only', !children && icon), _defineProperty(_classNames, prefixCls + '-loading', loading), _defineProperty(_classNames, className, className), _classNames));
        var iconType = loading ? 'loading' : icon;
        var kids = React.Children.map(children, insertSpace);
        return React.createElement(
            'button',
            _extends({}, others, { type: htmlType || 'button', className: classes, onMouseUp: this.handleMouseUp, onClick: this.handleClick }),
            iconType ? React.createElement(_icon2["default"], { type: iconType }) : null,
            kids
        );
    };

    return Button;
}(React.Component);

exports["default"] = Button;

Button.defaultProps = {
    prefixCls: 'ant-btn',
    onClick: function onClick() {},

    loading: false
};
Button.propTypes = {
    type: React.PropTypes.string,
    shape: React.PropTypes.oneOf(['circle', 'circle-outline']),
    size: React.PropTypes.oneOf(['large', 'default', 'small']),
    htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: React.PropTypes.func,
    loading: React.PropTypes.bool,
    className: React.PropTypes.string,
    icon: React.PropTypes.string
};
module.exports = exports['default'];