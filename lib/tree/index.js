'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = exports.TreeNode = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcTree = require('rc-tree');

var _rcTree2 = _interopRequireDefault(_rcTree);

var _openAnimation = require('../_util/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var TreeNode = exports.TreeNode = function (_React$Component) {
    _inherits(TreeNode, _React$Component);

    function TreeNode() {
        _classCallCheck(this, TreeNode);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    return TreeNode;
}(React.Component);

var Tree = function (_React$Component2) {
    _inherits(Tree, _React$Component2);

    function Tree() {
        _classCallCheck(this, Tree);

        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
    }

    Tree.prototype.render = function render() {
        var props = this.props;
        var checkable = props.checkable;
        return React.createElement(
            _rcTree2["default"],
            _extends({}, props, { checkable: checkable ? React.createElement('span', { className: props.prefixCls + '-checkbox-inner' }) : checkable }),
            this.props.children
        );
    };

    return Tree;
}(React.Component);

exports["default"] = Tree;

Tree.TreeNode = _rcTree2["default"].TreeNode;
Tree.defaultProps = {
    prefixCls: 'ant-tree',
    checkable: false,
    showIcon: false,
    openAnimation: _openAnimation2["default"]
};