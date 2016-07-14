'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isCssAnimationSupported = require('../_util/isCssAnimationSupported');

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

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

var Spin = function (_React$Component) {
    _inherits(Spin, _React$Component);

    function Spin(props) {
        _classCallCheck(this, Spin);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        var spinning = _this.getSpinning(props);
        _this.state = {
            spinning: spinning
        };
        return _this;
    }

    Spin.prototype.isNestedPattern = function isNestedPattern() {
        return !!(this.props && this.props.children);
    };

    Spin.prototype.componentDidMount = function componentDidMount() {
        (0, _warning2["default"])(!('spining' in this.props), '`spining` property of Popover is a spell mistake, use `spinning` instead.');
        if (!(0, _isCssAnimationSupported2["default"])()) {
            // Show text in IE8/9
            (0, _reactDom.findDOMNode)(this).className += ' ' + this.props.prefixCls + '-show-text';
        }
    };

    Spin.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
    };

    Spin.prototype.getSpinning = function getSpinning(props) {
        // Backwards support
        if ('spining' in props) {
            (0, _warning2["default"])(false, '`spining` property of Spin is a spell mistake, use `spinning` instead.');
            return props.spining;
        }
        return props.spinning;
    };

    Spin.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var spinning = this.getSpinning(nextProps);
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        if (spinning) {
            this.debounceTimeout = setTimeout(function () {
                return _this2.setState({ spinning: spinning });
            }, 250);
        } else {
            this.setState({ spinning: spinning });
        }
    };

    Spin.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['className', 'size', 'prefixCls', 'tip']);

        var _splitObject2 = _slicedToArray(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var className = _splitObject2$.className;
        var size = _splitObject2$.size;
        var prefixCls = _splitObject2$.prefixCls;
        var tip = _splitObject2$.tip;
        var restProps = _splitObject2[1];
        var spinning = this.state.spinning;

        var spinClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-spinning', spinning), _defineProperty(_classNames, prefixCls + '-show-text', !!this.props.tip), _defineProperty(_classNames, className, !!className), _classNames));
        // fix https://fb.me/react-unknown-prop
        var divProps = (0, _object2["default"])(restProps, ['spinning']);
        var spinElement = React.createElement(
            'div',
            _extends({}, divProps, { className: spinClassName }),
            React.createElement('span', { className: prefixCls + '-dot' }),
            React.createElement(
                'div',
                { className: prefixCls + '-text' },
                tip || '加载中...'
            )
        );
        if (this.isNestedPattern()) {
            return React.createElement(
                'div',
                _extends({}, divProps, { className: spinning ? prefixCls + '-nested-loading' : '' }),
                spinElement,
                React.createElement(
                    'div',
                    { className: prefixCls + '-container' },
                    this.props.children
                )
            );
        }
        return spinElement;
    };

    return Spin;
}(React.Component);

exports["default"] = Spin;

Spin.defaultProps = {
    prefixCls: 'ant-spin',
    spinning: true
};
Spin.propTypes = {
    className: React.PropTypes.string,
    size: React.PropTypes.oneOf(['small', 'default', 'large'])
};
module.exports = exports['default'];