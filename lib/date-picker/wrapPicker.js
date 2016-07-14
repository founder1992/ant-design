'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = wrapPicker;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcTimePicker = require('rc-time-picker');

var _rcTimePicker2 = _interopRequireDefault(_rcTimePicker);

var _gregorianCalendarFormat = require('gregorian-calendar-format');

var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function wrapPicker(Picker, defaultFormat) {
    var PickerWrapper = React.createClass({
        displayName: 'PickerWrapper',
        getDefaultProps: function getDefaultProps() {
            return {
                format: defaultFormat || 'yyyy-MM-dd',
                transitionName: 'slide-up',
                popupStyle: {},
                onChange: function onChange() {},
                onOk: function onOk() {},
                toggleOpen: function toggleOpen() {},

                locale: {},
                align: {
                    offset: [0, -9]
                }
            };
        },

        contextTypes: {
            antLocale: _react.PropTypes.object
        },
        getLocale: function getLocale() {
            var props = this.props;
            var locale = _zh_CN2["default"];
            var context = this.context;
            if (context.antLocale && context.antLocale.DatePicker) {
                locale = context.antLocale.DatePicker;
            }
            // 统一合并为完整的 Locale
            var result = (0, _objectAssign2["default"])({}, locale, props.locale);
            result.lang = (0, _objectAssign2["default"])({}, locale.lang, props.locale.lang);
            return result;
        },
        getFormatter: function getFormatter() {
            var format = this.props.format;
            var formatter = new _gregorianCalendarFormat2["default"](format, this.getLocale().lang.format);
            return formatter;
        },
        parseDateFromValue: function parseDateFromValue(value) {
            if (value) {
                if (typeof value === 'string') {
                    return this.getFormatter().parse(value, { locale: this.getLocale() });
                } else if (value instanceof Date) {
                    var date = new _gregorianCalendar2["default"](this.getLocale());
                    date.setTime(+value);
                    return date;
                }
            }
            return value;
        },
        toggleOpen: function toggleOpen(_ref) {
            var open = _ref.open;

            this.props.toggleOpen({ open: open });
        },
        render: function render() {
            var props = this.props;
            var pickerClass = (0, _classnames2["default"])({
                'ant-calendar-picker': true
            });
            var pickerInputClass = (0, _classnames2["default"])({
                'ant-calendar-range-picker': true,
                'ant-input': true,
                'ant-input-lg': props.size === 'large',
                'ant-input-sm': props.size === 'small'
            });
            var locale = this.getLocale();
            var timeFormat = props.showTime && props.showTime.format;
            var rcTimePickerProps = {
                formatter: new _gregorianCalendarFormat2["default"](timeFormat || 'HH:mm:ss', locale.timePickerLocale.format),
                showSecond: timeFormat && timeFormat.indexOf('ss') >= 0,
                showHour: timeFormat && timeFormat.indexOf('HH') >= 0
            };
            var timePicker = props.showTime ? React.createElement(_rcTimePicker2["default"], _extends({}, rcTimePickerProps, props.showTime, { prefixCls: 'ant-time-picker', placeholder: locale.timePickerLocale.placeholder, locale: locale.timePickerLocale, transitionName: 'slide-up' })) : null;
            return React.createElement(Picker, _extends({}, props, { pickerClass: pickerClass, pickerInputClass: pickerInputClass, locale: locale, timePicker: timePicker, toggleOpen: this.toggleOpen, getFormatter: this.getFormatter, parseDateFromValue: this.parseDateFromValue }));
        }
    });
    return PickerWrapper;
}
module.exports = exports['default'];