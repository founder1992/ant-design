'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var defaultTop = 24;
var notificationInstance = void 0;
var defaultDuration = 4.5;
function getNotificationInstance() {
    if (notificationInstance) {
        return notificationInstance;
    }
    notificationInstance = _rcNotification2["default"].newInstance({
        prefixCls: 'ant-notification',
        style: {
            top: defaultTop,
            right: 0
        }
    });
    return notificationInstance;
}
function notice(args) {
    var prefixCls = args.prefixCls || 'ant-notification-notice';
    var duration = void 0;
    if (args.duration === undefined) {
        duration = defaultDuration;
    } else {
        duration = args.duration;
    }
    var iconType = '';
    switch (args.icon) {
        case 'success':
            iconType = 'check-circle-o';
            break;
        case 'info':
            iconType = 'info-circle-o';
            break;
        case 'error':
            iconType = 'cross-circle-o';
            break;
        case 'warning':
            iconType = 'exclamation-circle-o';
            break;
        default:
            iconType = 'info-circle';
    }
    getNotificationInstance().notice({
        content: React.createElement(
            'div',
            { className: prefixCls + '-content ' + (args.icon ? prefixCls + '-with-icon' : '') },
            args.icon ? React.createElement(_icon2["default"], { className: prefixCls + '-icon ' + prefixCls + '-icon-' + args.icon, type: iconType }) : null,
            React.createElement(
                'div',
                { className: prefixCls + '-message' },
                args.message
            ),
            React.createElement(
                'div',
                { className: prefixCls + '-description' },
                args.description
            ),
            args.btn ? React.createElement(
                'span',
                { className: prefixCls + '-btn' },
                args.btn
            ) : null
        ),
        duration: duration,
        closable: true,
        onClose: args.onClose,
        key: args.key,
        style: {}
    });
}
var api = {
    open: function open(args) {
        notice(args);
    },
    close: function close(key) {
        if (notificationInstance) {
            notificationInstance.removeNotice(key);
        }
    },
    config: function config(options) {
        if ('top' in options) {
            defaultTop = options.top;
        }
        if ('duration' in options) {
            defaultDuration = options.duration;
        }
    },
    destroy: function destroy() {
        if (notificationInstance) {
            notificationInstance.destroy();
            notificationInstance = null;
        }
    }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
    api[type] = function (args) {
        return api.open((0, _objectAssign2["default"])({}, args, { icon: type }));
    };
});
api.warn = api.warning;
exports["default"] = api;
module.exports = exports['default'];