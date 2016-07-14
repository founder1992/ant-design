'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _placements = require('../popover/placements');

var _placements2 = _interopRequireDefault(_placements);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var placements = (0, _placements2["default"])();
var prefixCls = 'ant-popover';
var noop = function noop() {};

var Popconfirm = function (_React$Component) {
    _inherits(Popconfirm, _React$Component);

    function Popconfirm(props) {
        _classCallCheck(this, Popconfirm);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.confirm = function () {
            _this.setVisible(false);
            _this.props.onConfirm.call(_this);
        };
        _this.cancel = function () {
            _this.setVisible(false);
            _this.props.onCancel.call(_this);
        };
        _this.onVisibleChange = function (visible) {
            _this.setVisible(visible);
        };
        _this.state = {
            visible: false
        };
        return _this;
    }

    Popconfirm.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({ visible: nextProps.visible });
        }
    };

    Popconfirm.prototype.setVisible = function setVisible(visible) {
        if (!('visible' in this.props)) {
            this.setState({ visible: visible });
        }
        this.props.onVisibleChange(visible);
    };

    Popconfirm.prototype.render = function render() {
        var _splitObject = (0, _splitObject4["default"])(this.props, ['title', 'placement', 'overlayStyle', 'trigger']);

        var _splitObject2 = _slicedToArray(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var title = _splitObject2$.title;
        var placement = _splitObject2$.placement;
        var overlayStyle = _splitObject2$.overlayStyle;
        var trigger = _splitObject2$.trigger;
        var restProps = _splitObject2[1];
        var _props = this.props;
        var okText = _props.okText;
        var cancelText = _props.cancelText;

        if (this.context.antLocale && this.context.antLocale.Popconfirm) {
            okText = okText || this.context.antLocale.Popconfirm.okText;
            cancelText = cancelText || this.context.antLocale.Popconfirm.cancelText;
        }
        var overlay = React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: prefixCls + '-inner-content' },
                React.createElement(
                    'div',
                    { className: prefixCls + '-message' },
                    React.createElement(_icon2["default"], { type: 'exclamation-circle' }),
                    React.createElement(
                        'div',
                        { className: prefixCls + '-message-title' },
                        title
                    )
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-buttons' },
                    React.createElement(
                        _button2["default"],
                        { onClick: this.cancel, type: 'ghost', size: 'small' },
                        cancelText || '取消'
                    ),
                    React.createElement(
                        _button2["default"],
                        { onClick: this.confirm, type: 'primary', size: 'small' },
                        okText || '确定'
                    )
                )
            )
        );
        return React.createElement(
            _tooltip2["default"],
            _extends({}, restProps, { placement: placement, builtinPlacements: placements, overlayStyle: overlayStyle, prefixCls: prefixCls, onVisibleChange: this.onVisibleChange, transitionName: this.props.transitionName, visible: this.state.visible, trigger: trigger, overlay: overlay }),
            this.props.children
        );
    };

    return Popconfirm;
}(React.Component);

exports["default"] = Popconfirm;

Popconfirm.defaultProps = {
    transitionName: 'zoom-big',
    placement: 'top',
    trigger: 'click',
    overlayStyle: {},
    onConfirm: noop,
    onCancel: noop,
    onVisibleChange: noop
};
Popconfirm.contextTypes = {
    antLocale: React.PropTypes.object
};
module.exports = exports['default'];