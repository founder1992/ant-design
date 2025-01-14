'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var placements = (0, _placements2["default"])();

var Popover = function (_React$Component) {
    _inherits(Popover, _React$Component);

    function Popover() {
        _classCallCheck(this, Popover);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Popover.prototype.render = function render() {
        return React.createElement(
            _tooltip2["default"],
            _extends({ transitionName: this.props.transitionName, builtinPlacements: placements, ref: 'tooltip' }, this.props, { overlay: this.getOverlay() }),
            this.props.children
        );
    };

    Popover.prototype.getPopupDomNode = function getPopupDomNode() {
        return this.refs.tooltip.getPopupDomNode();
    };

    Popover.prototype.componentDidMount = function componentDidMount() {
        if ('overlay' in this.props) {
            (0, _warning2["default"])(false, '`overlay` prop of Popover is deprecated, use `content` instead.');
        }
    };

    Popover.prototype.getOverlay = function getOverlay() {
        // use content replace overlay
        // keep overlay for compatibility
        var _props = this.props;
        var title = _props.title;
        var prefixCls = _props.prefixCls;
        var overlay = _props.overlay;
        var content = _props.content;

        return React.createElement(
            'div',
            null,
            title && React.createElement(
                'div',
                { className: prefixCls + '-title' },
                title
            ),
            React.createElement(
                'div',
                { className: prefixCls + '-inner-content' },
                content || overlay
            )
        );
    };

    return Popover;
}(React.Component);

exports["default"] = Popover;

Popover.defaultProps = {
    prefixCls: 'ant-popover',
    placement: 'top',
    transitionName: 'zoom-big',
    trigger: 'hover',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    overlayStyle: {}
};
module.exports = exports['default'];