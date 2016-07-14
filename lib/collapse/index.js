'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = exports.CollapsePanel = undefined;

var _rcCollapse = require('rc-collapse');

var _rcCollapse2 = _interopRequireDefault(_rcCollapse);

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CollapsePanel = exports.CollapsePanel = function (_React$Component) {
    _inherits(CollapsePanel, _React$Component);

    function CollapsePanel() {
        _classCallCheck(this, CollapsePanel);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    return CollapsePanel;
}(React.Component);

var Collapse = function (_React$Component2) {
    _inherits(Collapse, _React$Component2);

    function Collapse() {
        _classCallCheck(this, Collapse);

        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
    }

    Collapse.prototype.render = function render() {
        return React.createElement(_rcCollapse2["default"], this.props);
    };

    return Collapse;
}(React.Component);

exports["default"] = Collapse;

Collapse.Panel = _rcCollapse2["default"].Panel;
Collapse.defaultProps = {
    prefixCls: 'ant-collapse'
};