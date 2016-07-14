'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search() {
        _classCallCheck(this, Search);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

        _this.handleChange = function (e) {
            _this.props.onChange(e);
        };
        _this.handleClear = function (e) {
            e.preventDefault();
            _this.props.handleClear(e);
        };
        return _this;
    }

    Search.prototype.render = function render() {
        var _props = this.props;
        var placeholder = _props.placeholder;
        var value = _props.value;
        var prefixCls = _props.prefixCls;

        return React.createElement(
            'div',
            null,
            React.createElement('input', { placeholder: placeholder, className: prefixCls + ' ant-input', value: value, ref: 'input', onChange: this.handleChange }),
            value && value.length > 0 ? React.createElement(
                'a',
                { href: '#', className: prefixCls + '-action', onClick: this.handleClear },
                React.createElement(_icon2["default"], { type: 'cross-circle' })
            ) : React.createElement(
                'span',
                { className: prefixCls + '-action' },
                React.createElement(_icon2["default"], { type: 'search' })
            )
        );
    };

    return Search;
}(React.Component);

exports["default"] = Search;

Search.defaultProps = {
    placeholder: '',
    onChange: noop,
    handleClear: noop
};
module.exports = exports['default'];