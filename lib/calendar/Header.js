'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Constants = require('./Constants');

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _radio = require('../radio');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Option = _select2["default"].Option;
function noop() {}

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

        _this.onYearChange = function (year) {
            var newValue = _this.props.value.clone();
            newValue.setYear(parseInt(year, 10));
            _this.props.onValueChange(newValue);
        };
        _this.onMonthChange = function (month) {
            var newValue = _this.props.value.clone();
            newValue.setMonth(parseInt(month, 10));
            _this.props.onValueChange(newValue);
        };
        _this.onTypeChange = function (e) {
            _this.props.onTypeChange(e.target.value);
        };
        return _this;
    }

    Header.prototype.getYearSelectElement = function getYearSelectElement(year) {
        var _props = this.props;
        var yearSelectOffset = _props.yearSelectOffset;
        var yearSelectTotal = _props.yearSelectTotal;
        var locale = _props.locale;
        var prefixCls = _props.prefixCls;
        var fullscreen = _props.fullscreen;

        var start = year - yearSelectOffset;
        var end = start + yearSelectTotal;
        var suffix = locale.year === '年' ? '年' : '';
        var options = [];
        for (var index = start; index < end; index++) {
            options.push(React.createElement(
                Option,
                { key: '' + index },
                index + suffix
            ));
        }
        return React.createElement(
            _select2["default"],
            { style: { width: 75 }, size: fullscreen ? null : 'small', dropdownMatchSelectWidth: false, dropdownMenuStyle: { minWidth: 103 }, className: prefixCls + '-year-select', onChange: this.onYearChange, value: String(year) },
            options
        );
    };

    Header.prototype.getMonthSelectElement = function getMonthSelectElement(month) {
        var props = this.props;
        var months = props.locale.format.months;
        var prefixCls = props.prefixCls;
        var fullscreen = props.fullscreen;

        var options = [];
        for (var index = 0; index < 12; index++) {
            options.push(React.createElement(
                Option,
                { key: '' + index },
                months[index]
            ));
        }
        return React.createElement(
            _select2["default"],
            { style: { minWidth: 70 }, dropdownMenuStyle: { minWidth: 125 }, size: fullscreen ? null : 'small', dropdownMatchSelectWidth: false, className: prefixCls + '-month-select', value: String(month), onChange: this.onMonthChange },
            options
        );
    };

    Header.prototype.render = function render() {
        var _props2 = this.props;
        var type = _props2.type;
        var value = _props2.value;
        var prefixCls = _props2.prefixCls;
        var locale = _props2.locale;

        var yearSelect = this.getYearSelectElement(value.getYear());
        var monthSelect = type === 'date' ? this.getMonthSelectElement(value.getMonth()) : null;
        var typeSwitch = React.createElement(
            _radio.Group,
            { onChange: this.onTypeChange, value: type },
            React.createElement(
                _radio.Button,
                { value: 'date' },
                locale.month
            ),
            React.createElement(
                _radio.Button,
                { value: 'month' },
                locale.year
            )
        );
        return React.createElement(
            'div',
            { className: prefixCls + '-header' },
            yearSelect,
            monthSelect,
            typeSwitch
        );
    };

    return Header;
}(React.Component);

exports["default"] = Header;

Header.defaultProps = {
    prefixCls: _Constants.PREFIX_CLS + '-header',
    yearSelectOffset: 10,
    yearSelectTotal: 20,
    onValueChange: noop,
    onTypeChange: noop
};
Header.propTypes = {
    value: _react.PropTypes.object,
    locale: _react.PropTypes.object,
    yearSelectOffset: _react.PropTypes.number,
    yearSelectTotal: _react.PropTypes.number,
    onValueChange: _react.PropTypes.func,
    onTypeChange: _react.PropTypes.func,
    prefixCls: _react.PropTypes.string,
    selectPrefixCls: _react.PropTypes.string,
    type: _react.PropTypes.string
};
module.exports = exports['default'];