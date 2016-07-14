'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = confirm;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _locale = require('./locale');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function confirm(config) {
    var _classNames;

    var props = (0, _objectAssign2["default"])({}, config);
    var div = document.createElement('div');
    document.body.appendChild(div);
    var d = void 0;
    props.iconType = props.iconType || 'question-circle';
    var width = props.width || 416;
    var style = props.style || {};
    // 默认为 true，保持向下兼容
    if (!('okCancel' in props)) {
        props.okCancel = true;
    }
    var runtimeLocale = (0, _locale.getConfirmLocale)();
    props.okText = props.okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
    props.cancelText = props.cancelText || runtimeLocale.cancelText;
    function close() {
        d.setState({
            visible: false
        });
        _reactDom2["default"].unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
    }
    function onCancel() {
        var cancelFn = props.onCancel;
        if (cancelFn) {
            var ret = void 0;
            if (cancelFn.length) {
                ret = cancelFn(close);
            } else {
                ret = cancelFn();
                if (!ret) {
                    close();
                }
            }
            if (ret && ret.then) {
                ret.then(close);
            }
        } else {
            close();
        }
    }
    function onOk() {
        var okFn = props.onOk;
        if (okFn) {
            var ret = void 0;
            if (okFn.length) {
                ret = okFn(close);
            } else {
                ret = okFn();
                if (!ret) {
                    close();
                }
            }
            if (ret && ret.then) {
                ret.then(close);
            }
        } else {
            close();
        }
    }
    var body = React.createElement(
        'div',
        { className: 'ant-confirm-body' },
        React.createElement(_icon2["default"], { type: props.iconType }),
        React.createElement(
            'span',
            { className: 'ant-confirm-title' },
            props.title
        ),
        React.createElement(
            'div',
            { className: 'ant-confirm-content' },
            props.content
        )
    );
    var footer = null;
    if (props.okCancel) {
        footer = React.createElement(
            'div',
            { className: 'ant-confirm-btns' },
            React.createElement(
                _button2["default"],
                { type: 'ghost', size: 'large', onClick: onCancel },
                props.cancelText
            ),
            React.createElement(
                _button2["default"],
                { type: 'primary', size: 'large', onClick: onOk },
                props.okText
            )
        );
    } else {
        footer = React.createElement(
            'div',
            { className: 'ant-confirm-btns' },
            React.createElement(
                _button2["default"],
                { type: 'primary', size: 'large', onClick: onOk },
                props.okText
            )
        );
    }
    var classString = (0, _classnames2["default"])((_classNames = {
        'ant-confirm': true
    }, _defineProperty(_classNames, 'ant-confirm-' + props.type, true), _defineProperty(_classNames, props.className, !!props.className), _classNames));
    _reactDom2["default"].render(React.createElement(
        _Modal2["default"],
        { className: classString, visible: true, closable: false, title: '', transitionName: 'zoom', footer: '', maskTransitionName: 'fade', style: style, width: width },
        React.createElement(
            'div',
            { style: { zoom: 1, overflow: 'hidden' } },
            body,
            ' ',
            footer
        )
    ), div, function () {
        d = this;
    });
    return {
        destroy: close
    };
}
module.exports = exports['default'];