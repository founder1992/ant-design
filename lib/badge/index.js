'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _ScrollNumber = require('./ScrollNumber');

var _ScrollNumber2 = _interopRequireDefault(_ScrollNumber);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Badge = function (_React$Component) {
    _inherits(Badge, _React$Component);

    function Badge() {
        _classCallCheck(this, Badge);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Badge.prototype.render = function render() {
        var _classNames;

        var _props = this.props;
        var count = _props.count;
        var prefixCls = _props.prefixCls;
        var overflowCount = _props.overflowCount;
        var className = _props.className;
        var style = _props.style;
        var children = _props.children;
        var dot = _props.dot;

        count = count > overflowCount ? overflowCount + '+' : count;
        // dot mode don't need count
        if (dot) {
            count = '';
        }
        // null undefined "" "0" 0
        var hidden = (!count || count === '0') && !dot;
        var scrollNumberCls = prefixCls + (dot ? '-dot' : '-count');
        var badgeCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-not-a-wrapper', !children), _classNames));
        return React.createElement(
            'span',
            { className: badgeCls, title: count, style: null },
            children,
            React.createElement(
                _rcAnimate2["default"],
                { component: '', showProp: 'data-show', transitionName: prefixCls + '-zoom', transitionAppear: true },
                hidden ? null : React.createElement(_ScrollNumber2["default"], { 'data-show': !hidden, className: scrollNumberCls, count: count, style: style })
            )
        );
    };

    return Badge;
}(React.Component);

exports["default"] = Badge;

Badge.defaultProps = {
    prefixCls: 'ant-badge',
    count: null,
    dot: false,
    overflowCount: 99
};
Badge.propTypes = {
    count: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    dot: React.PropTypes.bool,
    overflowCount: React.PropTypes.number
};
module.exports = exports['default'];