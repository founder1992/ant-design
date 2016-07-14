'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _rcProgress = require('rc-progress');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var statusColorMap = {
    normal: '#2db7f5',
    exception: '#ff5500',
    success: '#87d068'
};

var Line = function (_React$Component) {
    _inherits(Line, _React$Component);

    function Line() {
        _classCallCheck(this, Line);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Line.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'status', 'format', 'percent', 'trailColor', 'type', 'strokeWidth', 'width', 'className', 'showInfo']);

        var _splitObject2 = _slicedToArray(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var prefixCls = _splitObject2$.prefixCls;
        var status = _splitObject2$.status;
        var format = _splitObject2$.format;
        var percent = _splitObject2$.percent;
        var trailColor = _splitObject2$.trailColor;
        var type = _splitObject2$.type;
        var strokeWidth = _splitObject2$.strokeWidth;
        var width = _splitObject2$.width;
        var className = _splitObject2$.className;
        var showInfo = _splitObject2$.showInfo;
        var restProps = _splitObject2[1];

        var progressStatus = parseInt(percent, 10) >= 100 && !('status' in this.props) ? 'success' : status || 'normal';
        var progressInfo = void 0;
        var progress = void 0;
        var textFormatter = format || function (percentNumber) {
            return percentNumber + '%';
        };
        if (showInfo) {
            var text = void 0;
            var iconType = type === 'circle' ? '' : '-circle';
            if (progressStatus === 'exception') {
                text = format ? textFormatter(percent) : React.createElement(_icon2["default"], { type: 'cross' + iconType });
            } else if (progressStatus === 'success') {
                text = format ? textFormatter(percent) : React.createElement(_icon2["default"], { type: 'check' + iconType });
            } else {
                text = textFormatter(percent);
            }
            progressInfo = React.createElement(
                'span',
                { className: prefixCls + '-text' },
                text
            );
        }
        if (type === 'line') {
            var percentStyle = {
                width: percent + '%',
                height: strokeWidth || 10
            };
            progress = React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: prefixCls + '-outer' },
                    React.createElement(
                        'div',
                        { className: prefixCls + '-inner' },
                        React.createElement('div', { className: prefixCls + '-bg', style: percentStyle })
                    )
                ),
                progressInfo
            );
        } else if (type === 'circle') {
            var circleSize = width || 132;
            var circleStyle = {
                width: circleSize,
                height: circleSize,
                fontSize: circleSize * 0.16 + 6
            };
            progress = React.createElement(
                'div',
                { className: prefixCls + '-inner', style: circleStyle },
                React.createElement(_rcProgress.Circle, { percent: percent, strokeWidth: strokeWidth || 6, strokeColor: statusColorMap[progressStatus], trailColor: trailColor }),
                progressInfo
            );
        }
        var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, '' + prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + type, true), _defineProperty(_classNames, prefixCls + '-status-' + progressStatus, true), _defineProperty(_classNames, prefixCls + '-show-info', showInfo), _defineProperty(_classNames, className, !!className), _classNames));
        return React.createElement(
            'div',
            _extends({}, restProps, { className: classString }),
            progress
        );
    };

    return Line;
}(React.Component);

exports["default"] = Line;

Line.defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'ant-progress'
};
Line.propTypes = {
    status: _react.PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    type: _react.PropTypes.oneOf(['line', 'circle']),
    showInfo: _react.PropTypes.bool,
    percent: _react.PropTypes.number,
    width: _react.PropTypes.number,
    strokeWidth: _react.PropTypes.number,
    trailColor: _react.PropTypes.string,
    format: _react.PropTypes.func
};
module.exports = exports['default'];