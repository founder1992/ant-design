'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var Transfer = function (_React$Component) {
    _inherits(Transfer, _React$Component);

    function Transfer(props) {
        _classCallCheck(this, Transfer);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.moveTo = function (direction) {
            var targetKeys = _this.props.targetKeys;
            var _this$state = _this.state;
            var leftCheckedKeys = _this$state.leftCheckedKeys;
            var rightCheckedKeys = _this$state.rightCheckedKeys;

            var moveKeys = direction === 'right' ? leftCheckedKeys : rightCheckedKeys;
            // move items to target box
            var newTargetKeys = direction === 'right' ? moveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
                return !moveKeys.some(function (checkedKey) {
                    return targetKey === checkedKey;
                });
            });
            // empty checked keys
            _this.setState(_defineProperty({}, direction === 'right' ? 'leftCheckedKeys' : 'rightCheckedKeys', []));
            _this.props.onChange(newTargetKeys, direction, moveKeys);
        };
        _this.moveToLeft = function () {
            return _this.moveTo('left');
        };
        _this.moveToRight = function () {
            return _this.moveTo('right');
        };
        _this.handleSelectAll = function (direction) {
            var _this$splitDataSource = _this.splitDataSource(_this.props);

            var leftDataSource = _this$splitDataSource.leftDataSource;
            var rightDataSource = _this$splitDataSource.rightDataSource;

            var dataSource = direction === 'left' ? leftDataSource : rightDataSource;
            var checkStatus = _this.getGlobalCheckStatus(direction);
            var holder = checkStatus === 'all' ? [] : dataSource.map(function (item) {
                return item.key;
            });
            _this.setState(_defineProperty({}, direction + 'CheckedKeys', holder));
        };
        _this.handleLeftSelectAll = function () {
            return _this.handleSelectAll('left');
        };
        _this.handleRightSelectAll = function () {
            return _this.handleSelectAll('right');
        };
        _this.handleFilter = function (direction, e) {
            _this.setState(_defineProperty({}, direction + 'Filter', e.target.value));
        };
        _this.handleLeftFilter = function (e) {
            return _this.handleFilter('left', e);
        };
        _this.handleRightFilter = function (e) {
            return _this.handleFilter('right', e);
        };
        _this.handleClear = function (direction) {
            _this.setState(_defineProperty({}, direction + 'Filter', ''));
        };
        _this.handleLeftClear = function () {
            return _this.handleClear('left');
        };
        _this.handleRightClear = function () {
            return _this.handleClear('right');
        };
        _this.handleSelect = function (direction, selectedItem, checked) {
            var _this$state2 = _this.state;
            var leftCheckedKeys = _this$state2.leftCheckedKeys;
            var rightCheckedKeys = _this$state2.rightCheckedKeys;

            var holder = direction === 'left' ? [].concat(_toConsumableArray(leftCheckedKeys)) : [].concat(_toConsumableArray(rightCheckedKeys));
            var index = void 0;
            holder.forEach(function (key, i) {
                if (key === selectedItem.key) {
                    index = i;
                }
            });
            if (index > -1) {
                holder.splice(index, 1);
            }
            if (checked) {
                holder.push(selectedItem.key);
            }
            _this.setState(_defineProperty({}, direction + 'CheckedKeys', holder));
        };
        _this.handleLeftSelect = function (selectedItem, checked) {
            return _this.handleSelect('left', selectedItem, checked);
        };
        _this.handleRightSelect = function (selectedItem, checked) {
            return _this.handleSelect('right', selectedItem, checked);
        };
        _this.state = {
            leftFilter: '',
            rightFilter: '',
            leftCheckedKeys: [],
            rightCheckedKeys: []
        };
        return _this;
    }

    Transfer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var _state = this.state;
        var leftCheckedKeys = _state.leftCheckedKeys;
        var rightCheckedKeys = _state.rightCheckedKeys;

        if (nextProps.targetKeys !== this.props.targetKeys || nextProps.dataSource !== this.props.dataSource) {
            (function () {
                // clear cached splited dataSource
                _this2.splitedDataSource = null;
                var dataSource = nextProps.dataSource;
                var targetKeys = nextProps.targetKeys;
                // clear key nolonger existed
                // clear checkedKeys according to targetKeys

                _this2.setState({
                    leftCheckedKeys: leftCheckedKeys.filter(function (data) {
                        return dataSource.filter(function (item) {
                            return item.key === data;
                        }).length;
                    }).filter(function (data) {
                        return targetKeys.filter(function (key) {
                            return key === data;
                        }).length === 0;
                    }),
                    rightCheckedKeys: rightCheckedKeys.filter(function (data) {
                        return dataSource.filter(function (item) {
                            return item.key === data;
                        }).length;
                    }).filter(function (data) {
                        return targetKeys.filter(function (key) {
                            return key === data;
                        }).length > 0;
                    })
                });
            })();
        }
    };

    Transfer.prototype.splitDataSource = function splitDataSource(props) {
        if (this.splitedDataSource) {
            return this.splitedDataSource;
        }
        var targetKeys = props.targetKeys;
        var dataSource = props.dataSource;

        if (props.rowKey) {
            dataSource = dataSource.map(function (record) {
                record.key = props.rowKey(record);
                return record;
            });
        }
        var leftDataSource = [].concat(_toConsumableArray(dataSource));
        var rightDataSource = [];
        if (targetKeys.length > 0) {
            targetKeys.forEach(function (targetKey) {
                rightDataSource.push(leftDataSource.filter(function (data, index) {
                    if (data.key === targetKey) {
                        leftDataSource.splice(index, 1);
                        return true;
                    }
                    return false;
                })[0]);
            });
        }
        this.splitedDataSource = {
            leftDataSource: leftDataSource,
            rightDataSource: rightDataSource
        };
        return this.splitedDataSource;
    };

    Transfer.prototype.getGlobalCheckStatus = function getGlobalCheckStatus(direction) {
        var _splitDataSource = this.splitDataSource(this.props);

        var leftDataSource = _splitDataSource.leftDataSource;
        var rightDataSource = _splitDataSource.rightDataSource;
        var _state2 = this.state;
        var leftCheckedKeys = _state2.leftCheckedKeys;
        var rightCheckedKeys = _state2.rightCheckedKeys;

        var dataSource = direction === 'left' ? leftDataSource : rightDataSource;
        var checkedKeys = direction === 'left' ? leftCheckedKeys : rightCheckedKeys;
        var globalCheckStatus = void 0;
        if (checkedKeys.length > 0) {
            if (checkedKeys.length < dataSource.length) {
                globalCheckStatus = 'part';
            } else {
                globalCheckStatus = 'all';
            }
        } else {
            globalCheckStatus = 'none';
        }
        return globalCheckStatus;
    };

    Transfer.prototype.render = function render() {
        var _classNames;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var titles = _props.titles;
        var operations = _props.operations;
        var showSearch = _props.showSearch;
        var notFoundContent = _props.notFoundContent;
        var searchPlaceholder = _props.searchPlaceholder;
        var body = _props.body;
        var footer = _props.footer;
        var listStyle = _props.listStyle;
        var className = _props.className;
        var render = _props.render;
        var _state3 = this.state;
        var leftFilter = _state3.leftFilter;
        var rightFilter = _state3.rightFilter;
        var leftCheckedKeys = _state3.leftCheckedKeys;
        var rightCheckedKeys = _state3.rightCheckedKeys;

        var _splitDataSource2 = this.splitDataSource(this.props);

        var leftDataSource = _splitDataSource2.leftDataSource;
        var rightDataSource = _splitDataSource2.rightDataSource;

        var leftActive = rightCheckedKeys.length > 0;
        var rightActive = leftCheckedKeys.length > 0;
        var leftCheckStatus = this.getGlobalCheckStatus('left');
        var rightCheckStatus = this.getGlobalCheckStatus('right');
        var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _classNames));
        return React.createElement(
            'div',
            { className: cls },
            React.createElement(_list2["default"], { titleText: titles[0], dataSource: leftDataSource, filter: leftFilter, style: listStyle, checkedKeys: leftCheckedKeys, checkStatus: leftCheckStatus, handleFilter: this.handleLeftFilter, handleClear: this.handleLeftClear, handleSelect: this.handleLeftSelect, handleSelectAll: this.handleLeftSelectAll, render: render, showSearch: showSearch, searchPlaceholder: searchPlaceholder, notFoundContent: notFoundContent, body: body, footer: footer, prefixCls: prefixCls + '-list' }),
            React.createElement(_operation2["default"], { rightActive: rightActive, rightArrowText: operations[0], moveToRight: this.moveToRight, leftActive: leftActive, leftArrowText: operations[1], moveToLeft: this.moveToLeft, className: prefixCls + '-operation' }),
            React.createElement(_list2["default"], { titleText: titles[1], dataSource: rightDataSource, filter: rightFilter, style: listStyle, checkedKeys: rightCheckedKeys, checkStatus: rightCheckStatus, handleFilter: this.handleRightFilter, handleClear: this.handleRightClear, handleSelect: this.handleRightSelect, handleSelectAll: this.handleRightSelectAll, render: render, showSearch: showSearch, searchPlaceholder: searchPlaceholder, notFoundContent: notFoundContent, body: body, footer: footer, prefixCls: prefixCls + '-list' })
        );
    };

    return Transfer;
}(React.Component);

exports["default"] = Transfer;

Transfer.List = _list2["default"];
Transfer.Operation = _operation2["default"];
Transfer.Search = _search2["default"];
Transfer.defaultProps = {
    prefixCls: 'ant-transfer',
    dataSource: [],
    render: noop,
    targetKeys: [],
    onChange: noop,
    titles: ['源列表', '目的列表'],
    operations: [],
    showSearch: false,
    body: noop,
    footer: noop
};
module.exports = exports['default'];