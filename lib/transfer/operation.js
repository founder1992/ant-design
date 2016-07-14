'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var TransferOperation = function (_React$Component) {
    _inherits(TransferOperation, _React$Component);

    function TransferOperation() {
        _classCallCheck(this, TransferOperation);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    TransferOperation.prototype.render = function render() {
        var _props = this.props;
        var moveToLeft = _props.moveToLeft;
        var moveToRight = _props.moveToRight;
        var leftArrowText = _props.leftArrowText;
        var rightArrowText = _props.rightArrowText;
        var leftActive = _props.leftActive;
        var rightActive = _props.rightActive;
        var className = _props.className;

        var moveToLeftButton = React.createElement(
            _button2["default"],
            { type: 'primary', size: 'small', disabled: !leftActive, onClick: moveToLeft },
            React.createElement(
                'span',
                null,
                React.createElement(_icon2["default"], { type: 'left' }),
                leftArrowText
            )
        );
        var moveToRightButton = React.createElement(
            _button2["default"],
            { type: 'primary', size: 'small', disabled: !rightActive, onClick: moveToRight },
            React.createElement(
                'span',
                null,
                rightArrowText,
                React.createElement(_icon2["default"], { type: 'right' })
            )
        );
        return React.createElement(
            'div',
            { className: className },
            moveToLeftButton,
            moveToRightButton
        );
    };

    return TransferOperation;
}(React.Component);

exports["default"] = TransferOperation;

TransferOperation.defaultProps = {
    leftArrowText: '',
    rightArrowText: '',
    moveToLeft: noop,
    moveToRight: noop
};
module.exports = exports['default'];