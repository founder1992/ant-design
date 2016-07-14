'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports["default"] = function (props) {
    var _classNames;

    var _splitObject = (0, _splitObject4["default"])(props, ['prefixCls', 'className', 'children', 'extra', 'bodyStyle', 'title', 'loading', 'bordered']);

    var _splitObject2 = _slicedToArray(_splitObject, 2);

    var _splitObject2$ = _splitObject2[0];
    var _splitObject2$$prefix = _splitObject2$.prefixCls;
    var prefixCls = _splitObject2$$prefix === undefined ? 'ant-card' : _splitObject2$$prefix;
    var className = _splitObject2$.className;
    var extra = _splitObject2$.extra;
    var bodyStyle = _splitObject2$.bodyStyle;
    var title = _splitObject2$.title;
    var loading = _splitObject2$.loading;
    var _splitObject2$$border = _splitObject2$.bordered;
    var bordered = _splitObject2$$border === undefined ? true : _splitObject2$$border;
    var others = _splitObject2[1];

    var children = props.children;
    var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-loading', loading), _defineProperty(_classNames, prefixCls + '-bordered', bordered), _classNames));
    if (loading) {
        children = React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                '████████████████████████'
            ),
            React.createElement(
                'p',
                null,
                '██████　███████████████████'
            ),
            React.createElement(
                'p',
                null,
                '██████████████　██████████'
            ),
            React.createElement(
                'p',
                null,
                '█████　██████　█████████████'
            ),
            React.createElement(
                'p',
                null,
                '███████████　██████████　███'
            )
        );
    }
    var head = title ? React.createElement(
        'div',
        { className: prefixCls + '-head' },
        React.createElement(
            'h3',
            { className: prefixCls + '-head-title' },
            title
        )
    ) : null;
    return React.createElement(
        'div',
        _extends({}, others, { className: classString }),
        head,
        extra ? React.createElement(
            'div',
            { className: prefixCls + '-extra' },
            extra
        ) : null,
        React.createElement(
            'div',
            { className: prefixCls + '-body', style: bodyStyle },
            children
        )
    );
};

module.exports = exports['default'];