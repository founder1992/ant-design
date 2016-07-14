'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _FullCalendar = require('rc-calendar/lib/FullCalendar');

var _FullCalendar2 = _interopRequireDefault(_FullCalendar);

var _Constants = require('./Constants');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {
    return null;
}
function zerofixed(v) {
    if (v < 10) {
        return '0' + v;
    }
    return '' + v;
}

var Calendar = function (_React$Component) {
    _inherits(Calendar, _React$Component);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.getLocale = function () {
            var props = _this.props;
            var locale = _zh_CN2["default"];
            var context = _this.context;
            if (context && context.antLocale && context.antLocale.Calendar) {
                locale = context.antLocale.Calendar;
            }
            // 统一合并为完整的 Locale
            var result = (0, _objectAssign2["default"])({}, locale, props.locale);
            result.lang = (0, _objectAssign2["default"])({}, locale.lang, props.locale.lang);
            return result;
        };
        _this.monthCellRender = function (value, locale) {
            var prefixCls = _this.props.prefixCls;
            var month = value.getMonth();
            return React.createElement(
                'div',
                { className: prefixCls + '-month' },
                React.createElement(
                    'div',
                    { className: prefixCls + '-value' },
                    locale.format.shortMonths[month]
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    _this.props.monthCellRender(value)
                )
            );
        };
        _this.dateCellRender = function (value) {
            var prefixCls = _this.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + '-date' },
                React.createElement(
                    'div',
                    { className: prefixCls + '-value' },
                    zerofixed(value.getDayOfMonth())
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    _this.props.dateCellRender(value)
                )
            );
        };
        _this.setValue = function (value) {
            if (!('value' in _this.props) && _this.state.value !== value) {
                _this.setState({ value: value });
            }
            _this.props.onPanelChange(value, _this.state.mode);
        };
        _this.setType = function (type) {
            var mode = type === 'date' ? 'month' : 'year';
            if (_this.state.mode !== mode) {
                _this.setState({ mode: mode });
                _this.props.onPanelChange(_this.state.value, mode);
            }
        };
        _this.state = {
            value: _this.parseDateFromValue(props.value || new Date()),
            mode: props.mode
        };
        return _this;
    }

    Calendar.prototype.parseDateFromValue = function parseDateFromValue(value) {
        var date = new _gregorianCalendar2["default"](this.getLocale());
        date.setTime(+value);
        return date;
    };

    Calendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: this.parseDateFromValue(nextProps.value)
            });
        }
    };

    Calendar.prototype.render = function render() {
        var props = this.props;
        var _state = this.state;
        var value = _state.value;
        var mode = _state.mode;
        var prefixCls = props.prefixCls;
        var style = props.style;
        var className = props.className;
        var fullscreen = props.fullscreen;

        var type = mode === 'year' ? 'month' : 'date';
        var locale = this.getLocale();
        var cls = className || '';
        if (fullscreen) {
            cls += ' ' + prefixCls + '-fullscreen';
        }
        return React.createElement(
            'div',
            { className: cls, style: style },
            React.createElement(_Header2["default"], { fullscreen: fullscreen, type: type, value: value, locale: locale.lang, prefixCls: prefixCls, onTypeChange: this.setType, onValueChange: this.setValue }),
            React.createElement(_FullCalendar2["default"], _extends({}, props, { Select: noop, locale: locale.lang, type: type, prefixCls: prefixCls, showHeader: false, value: value, monthCellRender: this.monthCellRender, dateCellRender: this.dateCellRender }))
        );
    };

    return Calendar;
}(React.Component);

exports["default"] = Calendar;

Calendar.defaultProps = {
    monthCellRender: noop,
    dateCellRender: noop,
    locale: {},
    fullscreen: true,
    prefixCls: _Constants.PREFIX_CLS,
    onPanelChange: noop,
    mode: 'month'
};
Calendar.propTypes = {
    monthCellRender: _react.PropTypes.func,
    dateCellRender: _react.PropTypes.func,
    fullscreen: _react.PropTypes.bool,
    locale: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    onPanelChange: _react.PropTypes.func,
    value: _react.PropTypes.instanceOf(Date)
};
Calendar.contextTypes = {
    antLocale: _react.PropTypes.object
};
module.exports = exports['default'];