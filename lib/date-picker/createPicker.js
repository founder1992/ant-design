'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = createPicker;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _MonthCalendar = require('rc-calendar/lib/MonthCalendar');

var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function createPicker(TheCalendar) {
    // use class typescript error
    var CalenderWrapper = React.createClass({
        displayName: 'CalenderWrapper',
        getInitialState: function getInitialState() {
            return {
                value: this.props.parseDateFromValue(this.props.value || this.props.defaultValue)
            };
        },
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.parseDateFromValue(nextProps.value)
                });
            }
        },
        clearSelection: function clearSelection(e) {
            e.preventDefault();
            e.stopPropagation();
            this.setState({ value: null });
            this.handleChange(null);
        },
        handleChange: function handleChange(value) {
            var props = this.props;
            if (!('value' in props)) {
                this.setState({ value: value });
            }
            var timeValue = value ? new Date(value.getTime()) : null;
            props.onChange(timeValue, value ? props.getFormatter().format(value) : '');
        },
        render: function render() {
            var props = this.props;
            var locale = props.locale;
            // 以下两行代码
            // 给没有初始值的日期选择框提供本地化信息
            // 否则会以周日开始排
            var defaultCalendarValue = new _gregorianCalendar2["default"](locale);
            defaultCalendarValue.setTime(Date.now());
            var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;
            var disabledTime = props.showTime ? props.disabledTime : null;
            var calendarClassName = (0, _classnames2["default"])({
                'ant-calendar-time': props.showTime,
                'ant-calendar-month': _MonthCalendar2["default"] === TheCalendar
            });
            var calendar = React.createElement(TheCalendar, { formatter: props.getFormatter(), disabledDate: props.disabledDate, disabledTime: disabledTime, locale: locale.lang, timePicker: props.timePicker, defaultValue: defaultCalendarValue, dateInputPlaceholder: placeholder, prefixCls: 'ant-calendar', className: calendarClassName });
            // default width for showTime
            var pickerStyle = {};
            if (props.showTime) {
                pickerStyle.width = 180;
            }
            var clearIcon = !props.disabled && this.state.value ? React.createElement(_icon2["default"], { type: 'cross-circle', className: 'ant-calendar-picker-clear', onClick: this.clearSelection }) : null;
            return React.createElement(
                'span',
                { className: props.pickerClass, style: (0, _objectAssign2["default"])({}, pickerStyle, props.style) },
                React.createElement(
                    _Picker2["default"],
                    { transitionName: props.transitionName, disabled: props.disabled, calendar: calendar, value: this.state.value, prefixCls: 'ant-calendar-picker-container', style: props.popupStyle, align: props.align, getCalendarContainer: props.getCalendarContainer, open: props.open, onOpen: props.toggleOpen, onClose: props.toggleOpen, onChange: this.handleChange },
                    function (_ref) {
                        var value = _ref.value;

                        return React.createElement(
                            'span',
                            null,
                            React.createElement('input', { disabled: props.disabled, readOnly: true, value: value ? props.getFormatter().format(value) : '', placeholder: placeholder, className: props.pickerInputClass }),
                            clearIcon,
                            React.createElement('span', { className: 'ant-calendar-picker-icon' })
                        );
                    }
                )
            );
        }
    });
    return CalenderWrapper;
}
module.exports = exports['default'];