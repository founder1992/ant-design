'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

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

var ButtonGroup = _button2["default"].Group;

var DropdownButton = function (_React$Component) {
    _inherits(DropdownButton, _React$Component);

    function DropdownButton() {
        _classCallCheck(this, DropdownButton);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    DropdownButton.prototype.render = function render() {
        var _splitObject = (0, _splitObject4["default"])(this.props, ['type', 'overlay', 'trigger', 'align', 'children', 'className', 'onClick']);

        var _splitObject2 = _slicedToArray(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var type = _splitObject2$.type;
        var overlay = _splitObject2$.overlay;
        var trigger = _splitObject2$.trigger;
        var align = _splitObject2$.align;
        var children = _splitObject2$.children;
        var className = _splitObject2$.className;
        var onClick = _splitObject2$.onClick;
        var restProps = _splitObject2[1];

        var cls = (0, _classnames2["default"])(_defineProperty({
            'ant-dropdown-button': true
        }, className, !!className));
        return React.createElement(
            ButtonGroup,
            _extends({}, restProps, { className: cls }),
            React.createElement(
                _button2["default"],
                { type: type, onClick: onClick },
                children
            ),
            React.createElement(
                _dropdown2["default"],
                { align: align, overlay: overlay, trigger: trigger },
                React.createElement(
                    _button2["default"],
                    { type: type },
                    React.createElement(_icon2["default"], { type: 'down' })
                )
            )
        );
    };

    return DropdownButton;
}(React.Component);

exports["default"] = DropdownButton;

DropdownButton.defaultProps = {
    align: {
        points: ['tr', 'br'],
        overlay: {
            adjustX: 1,
            adjustY: 1
        },
        offset: [0, 4],
        targetOffset: [0, 0]
    },
    type: 'default'
};
module.exports = exports['default'];