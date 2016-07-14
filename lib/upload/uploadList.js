'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _progress = require('../progress');

var _progress2 = _interopRequireDefault(_progress);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var prefixCls = 'ant-upload';

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
var previewFile = function previewFile(file, callback) {
    var reader = new FileReader();
    reader.onloadend = function () {
        return callback(reader.result);
    };
    reader.readAsDataURL(file);
};

var UploadList = function (_React$Component) {
    _inherits(UploadList, _React$Component);

    function UploadList() {
        _classCallCheck(this, UploadList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

        _this.handleClose = function (file) {
            _this.props.onRemove(file);
        };
        _this.handlePreview = function (file, e) {
            if (_this.props.onPreview) {
                e.preventDefault();
                return _this.props.onPreview(file);
            }
        };
        return _this;
    }

    UploadList.prototype.componentDidUpdate = function componentDidUpdate() {
        var _this2 = this;

        if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
            return;
        }
        this.props.items.forEach(function (file) {
            if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
                return;
            }
            /*eslint-disable */
            file.thumbUrl = '';
            /*eslint-enable */
            previewFile(file.originFileObj, function (previewDataUrl) {
                /*eslint-disable */
                file.thumbUrl = previewDataUrl;
                /*eslint-enable */
                _this2.forceUpdate();
            });
        });
    };

    UploadList.prototype.render = function render() {
        var _this3 = this,
            _classNames2;

        var list = this.props.items.map(function (file) {
            var _classNames;

            var progress = void 0;
            var icon = React.createElement(_icon2["default"], { type: 'paper-clip' });
            if (_this3.props.listType === 'picture' || _this3.props.listType === 'picture-card') {
                if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
                    if (_this3.props.listType === 'picture-card') {
                        icon = React.createElement(
                            'div',
                            { className: prefixCls + '-list-item-uploading-text' },
                            '文件上传中'
                        );
                    } else {
                        icon = React.createElement(_icon2["default"], { className: prefixCls + '-list-item-thumbnail', type: 'picture' });
                    }
                } else {
                    icon = React.createElement(
                        'a',
                        { className: prefixCls + '-list-item-thumbnail', onClick: function onClick(e) {
                                return _this3.handlePreview(file, e);
                            }, href: file.url, target: '_blank' },
                        React.createElement('img', { src: file.thumbUrl || file.url, alt: file.name })
                    );
                }
            }
            if (file.status === 'uploading') {
                progress = React.createElement(
                    'div',
                    { className: prefixCls + '-list-item-progress' },
                    React.createElement(_progress2["default"], _extends({ type: 'line' }, _this3.props.progressAttr, { percent: file.percent }))
                );
            }
            var infoUploadingClass = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-list-item', true), _defineProperty(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
            return React.createElement(
                'div',
                { className: infoUploadingClass, key: file.uid },
                React.createElement(
                    'div',
                    { className: prefixCls + '-list-item-info' },
                    icon,
                    file.url ? React.createElement(
                        'a',
                        { href: file.url, target: '_blank', className: prefixCls + '-list-item-name', onClick: function onClick(e) {
                                return _this3.handlePreview(file, e);
                            } },
                        file.name
                    ) : React.createElement(
                        'span',
                        { className: prefixCls + '-list-item-name', onClick: function onClick(e) {
                                return _this3.handlePreview(file, e);
                            } },
                        file.name
                    ),
                    _this3.props.listType === 'picture-card' && file.status !== 'uploading' ? React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'a',
                            { href: file.url, target: '_blank', style: { pointerEvents: file.url ? '' : 'none' }, onClick: function onClick(e) {
                                    return _this3.handlePreview(file, e);
                                } },
                            React.createElement(_icon2["default"], { type: 'eye-o' })
                        ),
                        React.createElement(_icon2["default"], { type: 'delete', onClick: function onClick() {
                                return _this3.handleClose(file);
                            } })
                    ) : React.createElement(_icon2["default"], { type: 'cross', onClick: function onClick() {
                            return _this3.handleClose(file);
                        } })
                ),
                progress
            );
        });
        var listClassNames = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-list', true), _defineProperty(_classNames2, prefixCls + '-list-' + this.props.listType, true), _classNames2));
        return React.createElement(
            'div',
            { className: listClassNames },
            React.createElement(
                _rcAnimate2["default"],
                { transitionName: prefixCls + '-margin-top' },
                list
            )
        );
    };

    return UploadList;
}(React.Component);

exports["default"] = UploadList;

UploadList.defaultProps = {
    listType: 'text',
    items: [],
    progressAttr: {
        strokeWidth: 3,
        showInfo: false
    }
};
module.exports = exports['default'];