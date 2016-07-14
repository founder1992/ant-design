'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports["default"] = Col;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stringOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);
var objectOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.number]);
function Col(props) {
    var _assign2;

    var _splitObject = (0, _splitObject4["default"])(props, ['span', 'order', 'offset', 'push', 'pull', 'className', 'children']);

    var _splitObject2 = _slicedToArray(_splitObject, 2);

    var _splitObject2$ = _splitObject2[0];
    var span = _splitObject2$.span;
    var order = _splitObject2$.order;
    var offset = _splitObject2$.offset;
    var push = _splitObject2$.push;
    var pull = _splitObject2$.pull;
    var className = _splitObject2$.className;
    var children = _splitObject2$.children;
    var others = _splitObject2[1];

    var sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg'].forEach(function (size) {
        var _assign;

        var sizeProps = {};
        if (typeof props[size] === 'number') {
            sizeProps.span = props[size];
        } else if (_typeof(props[size]) === 'object') {
            sizeProps = props[size] || {};
        }
        delete others[size];
        sizeClassObj = (0, _objectAssign2["default"])({}, sizeClassObj, (_assign = {}, _defineProperty(_assign, 'ant-col-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), _defineProperty(_assign, 'ant-col-' + size + '-order-' + sizeProps.order, sizeProps.order), _defineProperty(_assign, 'ant-col-' + size + '-offset-' + sizeProps.offset, sizeProps.offset), _defineProperty(_assign, 'ant-col-' + size + '-push-' + sizeProps.push, sizeProps.push), _defineProperty(_assign, 'ant-col-' + size + '-pull-' + sizeProps.pull, sizeProps.pull), _assign));
    });
    var classes = (0, _classnames2["default"])((0, _objectAssign2["default"])({}, (_assign2 = {}, _defineProperty(_assign2, 'ant-col-' + span, span !== undefined), _defineProperty(_assign2, 'ant-col-order-' + order, order), _defineProperty(_assign2, 'ant-col-offset-' + offset, offset), _defineProperty(_assign2, 'ant-col-push-' + push, push), _defineProperty(_assign2, 'ant-col-pull-' + pull, pull), _defineProperty(_assign2, className, !!className), _assign2), sizeClassObj));
    return React.createElement(
        'div',
        _extends({}, others, { className: classes }),
        children
    );
}
Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: _react.PropTypes.string,
    children: _react.PropTypes.node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber
};
module.exports = exports['default'];