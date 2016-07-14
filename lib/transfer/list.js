'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;
exports.isRenderResultPlainObject = isRenderResultPlainObject;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}
function isRenderResultPlainObject(result) {
    return result && !React.isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}

var TransferList = function (_React$Component) {
    _inherits(TransferList, _React$Component);

    function TransferList(props) {
        _classCallCheck(this, TransferList);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleSelectAll = function () {
            _this.props.handleSelectAll();
        };
        _this.handleSelect = function (selectedItem) {
            var checkedKeys = _this.props.checkedKeys;

            var result = checkedKeys.some(function (key) {
                return key === selectedItem.key;
            });
            _this.props.handleSelect(selectedItem, !result);
        };
        _this.handleFilter = function (e) {
            _this.props.handleFilter(e);
        };
        _this.handleClear = function () {
            _this.props.handleClear();
        };
        _this.state = {
            mounted: false
        };
        return _this;
    }

    TransferList.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.timer = setTimeout(function () {
            _this2.setState({
                mounted: true
            });
        }, 0);
    };

    TransferList.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.timer);
    };

    TransferList.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    TransferList.prototype.renderCheckbox = function renderCheckbox(props) {
        var _classNames;

        var prefixCls = props.prefixCls;

        var checkboxCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-checkbox', true), _defineProperty(_classNames, prefixCls + '-checkbox-indeterminate', props.checkPart), _defineProperty(_classNames, prefixCls + '-checkbox-checked', !props.checkPart && props.checked), _defineProperty(_classNames, prefixCls + '-checkbox-disabled', !!props.disabled), _classNames));
        var customEle = null;
        if (typeof props.checkable !== 'boolean') {
            customEle = props.checkable;
        }
        return React.createElement(
            'span',
            { ref: 'checkbox', className: checkboxCls, onClick: !props.disabled && this.handleSelectAll },
            customEle
        );
    };

    TransferList.prototype.matchFilter = function matchFilter(text, filterText) {
        return text.indexOf(filterText) >= 0;
    };

    TransferList.prototype.render = function render() {
        var _classNames2,
            _this3 = this;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var dataSource = _props.dataSource;
        var titleText = _props.titleText;
        var filter = _props.filter;
        var checkedKeys = _props.checkedKeys;
        var checkStatus = _props.checkStatus;
        var body = _props.body;
        var footer = _props.footer;
        var showSearch = _props.showSearch;
        var render = _props.render;
        var style = _props.style;
        var _props2 = this.props;
        var searchPlaceholder = _props2.searchPlaceholder;
        var notFoundContent = _props2.notFoundContent;
        // Custom Layout

        var footerDom = footer((0, _objectAssign2["default"])({}, this.props));
        var bodyDom = body((0, _objectAssign2["default"])({}, this.props));
        var listCls = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls, true), _defineProperty(_classNames2, prefixCls + '-with-footer', !!footerDom), _classNames2));
        var showItems = dataSource.map(function (item) {
            var renderResult = render(item);
            var renderedText = void 0;
            var renderedEl = void 0;
            if (isRenderResultPlainObject(renderResult)) {
                renderedText = renderResult.value;
                renderedEl = renderResult.label;
            } else {
                renderedText = renderResult;
                renderedEl = renderResult;
            }
            if (filter && filter.trim() && !_this3.matchFilter(renderedText, filter)) {
                return null;
            }
            return React.createElement(
                'li',
                { onClick: function onClick() {
                        _this3.handleSelect(item);
                    }, key: item.key, title: renderedText },
                React.createElement(_checkbox2["default"], { checked: checkedKeys.some(function (key) {
                        return key === item.key;
                    }) }),
                React.createElement(
                    'span',
                    null,
                    renderedEl
                )
            );
        }).filter(function (item) {
            return !!item;
        });
        var unit = '条';
        if (this.context.antLocale && this.context.antLocale.Transfer) {
            unit = dataSource.length > 1 ? this.context.antLocale.Transfer.itemsUnit : this.context.antLocale.Transfer.itemUnit;
            searchPlaceholder = searchPlaceholder || this.context.antLocale.Transfer.searchPlaceholder;
            notFoundContent = notFoundContent || this.context.antLocale.Transfer.notFoundContent;
        }
        return React.createElement(
            'div',
            { className: listCls, style: style },
            React.createElement(
                'div',
                { className: prefixCls + '-header' },
                this.renderCheckbox({
                    prefixCls: 'ant-transfer',
                    checked: checkStatus === 'all',
                    checkPart: checkStatus === 'part',
                    checkable: React.createElement('span', { className: 'ant-transfer-checkbox-inner' })
                }),
                React.createElement(
                    'span',
                    { className: prefixCls + '-header-selected' },
                    React.createElement(
                        'span',
                        null,
                        (checkedKeys.length > 0 ? checkedKeys.length + '/' : '') + dataSource.length,
                        ' ',
                        unit
                    ),
                    React.createElement(
                        'span',
                        { className: prefixCls + '-header-title' },
                        titleText
                    )
                )
            ),
            bodyDom || React.createElement(
                'div',
                { className: showSearch ? prefixCls + '-body ' + prefixCls + '-body-with-search' : prefixCls + '-body' },
                showSearch ? React.createElement(
                    'div',
                    { className: prefixCls + '-body-search-wrapper' },
                    React.createElement(_search2["default"], { prefixCls: prefixCls + '-search', onChange: this.handleFilter, handleClear: this.handleClear, placeholder: searchPlaceholder || '请输入搜索内容', value: filter })
                ) : null,
                React.createElement(
                    _rcAnimate2["default"],
                    { component: 'ul', transitionName: this.state.mounted ? prefixCls + '-highlight' : '', transitionLeave: false },
                    showItems.length > 0 ? showItems : React.createElement(
                        'div',
                        { className: prefixCls + '-body-not-found' },
                        notFoundContent || '列表为空'
                    )
                )
            ),
            footerDom ? React.createElement(
                'div',
                { className: prefixCls + '-footer' },
                footerDom
            ) : null
        );
    };

    return TransferList;
}(React.Component);

exports["default"] = TransferList;

TransferList.defaultProps = {
    dataSource: [],
    titleText: '',
    showSearch: false,
    handleClear: noop,
    handleFilter: noop,
    handleSelect: noop,
    handleSelectAll: noop,
    render: noop,
    // advanced
    body: noop,
    footer: noop
};
TransferList.contextTypes = {
    antLocale: React.PropTypes.object
};