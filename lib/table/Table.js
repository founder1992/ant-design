'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcTable = require('rc-table');

var _rcTable2 = _interopRequireDefault(_rcTable);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

var _filterDropdown = require('./filterDropdown');

var _filterDropdown2 = _interopRequireDefault(_filterDropdown);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _spin = require('../spin');

var _spin2 = _interopRequireDefault(_spin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

function stopPropagation(e) {
    e.stopPropagation();
    if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation();
    }
}
var defaultLocale = {
    filterTitle: '筛选',
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: React.createElement(
        'span',
        null,
        React.createElement(_icon2["default"], { type: 'frown' }),
        '暂无数据'
    )
};
var defaultPagination = {
    pageSize: 10,
    onChange: noop,
    onShowSizeChange: noop
};

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleFilter = function (column, nextFilters) {
            var props = _this.props;
            var pagination = (0, _objectAssign2["default"])({}, _this.state.pagination);
            var filters = (0, _objectAssign2["default"])({}, _this.state.filters, _defineProperty({}, _this.getColumnKey(column), nextFilters));
            // Remove filters not in current columns
            var currentColumnKeys = props.columns.map(function (c) {
                return _this.getColumnKey(c);
            });
            Object.keys(filters).forEach(function (columnKey) {
                if (currentColumnKeys.indexOf(columnKey) < 0) {
                    delete filters[columnKey];
                }
            });
            if (props.pagination) {
                // Reset current prop
                pagination.current = 1;
                pagination.onChange(pagination.current);
            }
            var newState = {
                selectionDirty: false,
                pagination: pagination
            };
            var filtersToSetState = (0, _objectAssign2["default"])({}, filters);
            // Remove filters which is controlled
            _this.getFilteredValueColumns().forEach(function (col) {
                var columnKey = _this.getColumnKey(col);
                if (columnKey) {
                    delete filtersToSetState[columnKey];
                }
            });
            if (Object.keys(filtersToSetState).length > 0) {
                newState.filters = filtersToSetState;
            }
            // Controlled current prop will not respond user interaction
            if (props.pagination && 'current' in props.pagination) {
                newState.pagination = (0, _objectAssign2["default"])({}, pagination, {
                    current: _this.state.pagination.current
                });
            }
            _this.setState(newState, function () {
                props.onChange.apply(props, _toConsumableArray(_this.prepareParamsArguments((0, _objectAssign2["default"])({}, _this.state, {
                    selectionDirty: false,
                    filters: filters,
                    pagination: pagination
                }))));
            });
        };
        _this.handleSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var defaultSelection = _this.state.selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.state.selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            if (checked) {
                selectedRowKeys.push(_this.getRecordKey(record, rowIndex));
            } else {
                selectedRowKeys = selectedRowKeys.filter(function (i) {
                    return key !== i;
                });
            }
            _this.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys);
            if (_this.props.rowSelection.onSelect) {
                var data = _this.getFlatCurrentPageData();
                var selectedRows = data.filter(function (row, i) {
                    return selectedRowKeys.indexOf(_this.getRecordKey(row, i)) >= 0;
                });
                _this.props.rowSelection.onSelect(record, checked, selectedRows);
            }
        };
        _this.handleRadioSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var defaultSelection = _this.state.selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.state.selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            selectedRowKeys = [key];
            _this.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys);
            if (_this.props.rowSelection.onSelect) {
                var data = _this.getFlatCurrentPageData();
                var selectedRows = data.filter(function (row, i) {
                    return selectedRowKeys.indexOf(_this.getRecordKey(row, i)) >= 0;
                });
                _this.props.rowSelection.onSelect(record, checked, selectedRows);
            }
        };
        _this.handleSelectAllRow = function (e) {
            var checked = e.target.checked;
            var data = _this.getFlatCurrentPageData();
            var defaultSelection = _this.state.selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.state.selectedRowKeys.concat(defaultSelection);
            var changableRowKeys = data.filter(function (item) {
                return !_this.getCheckboxPropsByItem(item).disabled;
            }).map(function (item, i) {
                return _this.getRecordKey(item, i);
            });
            // 记录变化的列
            var changeRowKeys = [];
            if (checked) {
                changableRowKeys.forEach(function (key) {
                    if (selectedRowKeys.indexOf(key) < 0) {
                        selectedRowKeys.push(key);
                        changeRowKeys.push(key);
                    }
                });
            } else {
                changableRowKeys.forEach(function (key) {
                    if (selectedRowKeys.indexOf(key) >= 0) {
                        selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                        changeRowKeys.push(key);
                    }
                });
            }
            _this.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys);
            if (_this.props.rowSelection.onSelectAll) {
                var selectedRows = data.filter(function (row, i) {
                    return selectedRowKeys.indexOf(_this.getRecordKey(row, i)) >= 0;
                });
                var changeRows = data.filter(function (row, i) {
                    return changeRowKeys.indexOf(_this.getRecordKey(row, i)) >= 0;
                });
                _this.props.rowSelection.onSelectAll(checked, selectedRows, changeRows);
            }
        };
        _this.handlePageChange = function (current) {
            var _this$props;

            var props = _this.props;
            var pagination = (0, _objectAssign2["default"])({}, _this.state.pagination);
            if (current) {
                pagination.current = current;
            } else {
                pagination.current = pagination.current || 1;
            }
            pagination.onChange(pagination.current);
            var newState = {
                selectionDirty: false,
                pagination: pagination
            };
            // Controlled current prop will not respond user interaction
            if (props.pagination && 'current' in props.pagination) {
                newState.pagination = (0, _objectAssign2["default"])({}, pagination, {
                    current: _this.state.pagination.current
                });
            }
            _this.setState(newState);
            (_this$props = _this.props).onChange.apply(_this$props, _toConsumableArray(_this.prepareParamsArguments((0, _objectAssign2["default"])({}, _this.state, {
                selectionDirty: false,
                pagination: pagination
            }))));
        };
        _this.renderSelectionRadio = function (value, record, index) {
            var rowIndex = _this.getRecordKey(record, index); // 从 1 开始
            var props = _this.getCheckboxPropsByItem(record);
            var checked = void 0;
            if (_this.state.selectionDirty) {
                checked = _this.state.selectedRowKeys.indexOf(rowIndex) >= 0;
            } else {
                checked = _this.state.selectedRowKeys.indexOf(rowIndex) >= 0 || _this.getDefaultSelection().indexOf(rowIndex) >= 0;
            }
            return React.createElement(
                'span',
                { onClick: stopPropagation },
                React.createElement(_radio2["default"], { disabled: props.disabled, onChange: function onChange(e) {
                        return _this.handleRadioSelect(record, rowIndex, e);
                    }, value: rowIndex, checked: checked })
            );
        };
        _this.renderSelectionCheckBox = function (value, record, index) {
            var rowIndex = _this.getRecordKey(record, index); // 从 1 开始
            var checked = void 0;
            if (_this.state.selectionDirty) {
                checked = _this.state.selectedRowKeys.indexOf(rowIndex) >= 0;
            } else {
                checked = _this.state.selectedRowKeys.indexOf(rowIndex) >= 0 || _this.getDefaultSelection().indexOf(rowIndex) >= 0;
            }
            var props = _this.getCheckboxPropsByItem(record);
            return React.createElement(
                'span',
                { onClick: stopPropagation },
                React.createElement(_checkbox2["default"], { checked: checked, disabled: props.disabled, onChange: function onChange(e) {
                        return _this.handleSelect(record, rowIndex, e);
                    } })
            );
        };
        _this.handleShowSizeChange = function (current, pageSize) {
            var _this$props2;

            var pagination = _this.state.pagination;
            pagination.onShowSizeChange(current, pageSize);
            var nextPagination = (0, _objectAssign2["default"])({}, pagination, { pageSize: pageSize, current: current });
            _this.setState({ pagination: nextPagination });
            (_this$props2 = _this.props).onChange.apply(_this$props2, _toConsumableArray(_this.prepareParamsArguments((0, _objectAssign2["default"])({}, _this.state, {
                pagination: nextPagination
            }))));
        };
        var pagination = props.pagination || {};
        _this.state = (0, _objectAssign2["default"])({}, _this.getSortStateFromColumns(), {
            // 减少状态
            selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || [],
            filters: _this.getFiltersFromColumns(),
            selectionDirty: false,
            pagination: _this.hasPagination() ? (0, _objectAssign2["default"])({}, defaultPagination, pagination, {
                current: pagination.defaultCurrent || pagination.current || 1
            }) : {}
        });
        _this.CheckboxPropsCache = {};
        return _this;
    }

    Table.prototype.getCheckboxPropsByItem = function getCheckboxPropsByItem(item) {
        var _props$rowSelection = this.props.rowSelection;
        var rowSelection = _props$rowSelection === undefined ? {} : _props$rowSelection;

        if (!rowSelection.getCheckboxProps) {
            return {};
        }
        var key = this.getRecordKey(item);
        // Cache checkboxProps
        if (!this.CheckboxPropsCache[key]) {
            this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
        }
        return this.CheckboxPropsCache[key];
    };

    Table.prototype.getDefaultSelection = function getDefaultSelection() {
        var _this2 = this;

        var _props$rowSelection2 = this.props.rowSelection;
        var rowSelection = _props$rowSelection2 === undefined ? {} : _props$rowSelection2;

        if (!rowSelection.getCheckboxProps) {
            return [];
        }
        return this.getFlatCurrentPageData().filter(function (item) {
            return _this2.getCheckboxPropsByItem(item).defaultChecked;
        }).map(function (record, rowIndex) {
            return _this2.getRecordKey(record, rowIndex);
        });
    };

    Table.prototype.getLocale = function getLocale() {
        var locale = {};
        if (this.context.antLocale && this.context.antLocale.Table) {
            locale = this.context.antLocale.Table;
        }
        return (0, _objectAssign2["default"])({}, defaultLocale, locale, this.props.locale);
    };

    Table.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this3 = this;

        if ('pagination' in nextProps && nextProps.pagination !== false) {
            this.setState(function (previousState) {
                var newPagination = (0, _objectAssign2["default"])({}, defaultPagination, previousState.pagination, nextProps.pagination);
                newPagination.current = newPagination.current || 1;
                return { pagination: newPagination };
            });
        }
        // dataSource 的变化会清空选中项
        if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
            this.setState({
                selectionDirty: false
            });
            this.CheckboxPropsCache = {};
        }
        if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
            this.setState({
                selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
            });
            var rowSelection = this.props.rowSelection;

            if (rowSelection && nextProps.rowSelection.getCheckboxProps !== rowSelection.getCheckboxProps) {
                this.CheckboxPropsCache = {};
            }
        }
        if (this.getSortOrderColumns(nextProps.columns).length > 0) {
            var sortState = this.getSortStateFromColumns(nextProps.columns);
            if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
                this.setState(sortState);
            }
        }
        var filteredValueColumns = this.getFilteredValueColumns(nextProps.columns);
        if (filteredValueColumns.length > 0) {
            (function () {
                var filtersFromColumns = _this3.getFiltersFromColumns(nextProps.columns);
                var newFilters = (0, _objectAssign2["default"])({}, _this3.state.filters);
                Object.keys(filtersFromColumns).forEach(function (key) {
                    newFilters[key] = filtersFromColumns[key];
                });
                if (_this3.isFiltersChanged(newFilters)) {
                    _this3.setState({ filters: newFilters });
                }
            })();
        }
    };

    Table.prototype.setSelectedRowKeys = function setSelectedRowKeys(selectedRowKeys) {
        var _this4 = this;

        if (this.props.rowSelection && !('selectedRowKeys' in this.props.rowSelection)) {
            this.setState({ selectedRowKeys: selectedRowKeys });
        }
        if (this.props.rowSelection && this.props.rowSelection.onChange) {
            var data = this.getFlatCurrentPageData();
            var selectedRows = data.filter(function (row, i) {
                return selectedRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
            });
            this.props.rowSelection.onChange(selectedRowKeys, selectedRows);
        }
    };

    Table.prototype.hasPagination = function hasPagination() {
        return this.props.pagination !== false;
    };

    Table.prototype.isFiltersChanged = function isFiltersChanged(filters) {
        var _this5 = this;

        var filtersChanged = false;
        if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
            filtersChanged = true;
        } else {
            Object.keys(filters).forEach(function (columnKey) {
                if (filters[columnKey] !== _this5.state.filters[columnKey]) {
                    filtersChanged = true;
                }
            });
        }
        return filtersChanged;
    };

    Table.prototype.getSortOrderColumns = function getSortOrderColumns(columns) {
        return (columns || this.props.columns || []).filter(function (column) {
            return 'sortOrder' in column;
        });
    };

    Table.prototype.getFilteredValueColumns = function getFilteredValueColumns(columns) {
        return (columns || this.props.columns || []).filter(function (column) {
            return 'filteredValue' in column;
        });
    };

    Table.prototype.getFiltersFromColumns = function getFiltersFromColumns(columns) {
        var _this6 = this;

        var filters = {};
        this.getFilteredValueColumns(columns).forEach(function (col) {
            filters[_this6.getColumnKey(col)] = col.filteredValue;
        });
        return filters;
    };

    Table.prototype.getSortStateFromColumns = function getSortStateFromColumns(columns) {
        // return fisrt column which sortOrder is not falsy
        var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
            return col.sortOrder;
        })[0];
        if (sortedColumn) {
            return {
                sortColumn: sortedColumn,
                sortOrder: sortedColumn.sortOrder
            };
        }
        return {
            sortColumn: null,
            sortOrder: null
        };
    };

    Table.prototype.getSorterFn = function getSorterFn() {
        var _state = this.state;
        var sortOrder = _state.sortOrder;
        var sortColumn = _state.sortColumn;

        if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
            return;
        }
        return function (a, b) {
            var result = sortColumn.sorter(a, b);
            if (result !== 0) {
                return sortOrder === 'descend' ? -result : result;
            }
            return a.indexForSort - b.indexForSort;
        };
    };

    Table.prototype.toggleSortOrder = function toggleSortOrder(order, column) {
        var _props;

        var _state2 = this.state;
        var sortColumn = _state2.sortColumn;
        var sortOrder = _state2.sortOrder;
        // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

        var isSortColumn = this.isSortColumn(column);
        if (!isSortColumn) {
            sortOrder = order;
            sortColumn = column;
        } else {
            if (sortOrder === order) {
                sortOrder = '';
                sortColumn = null;
            } else {
                sortOrder = order;
            }
        }
        var newState = {
            sortOrder: sortOrder,
            sortColumn: sortColumn
        };
        // Controlled
        if (this.getSortOrderColumns().length === 0) {
            this.setState(newState);
        }
        (_props = this.props).onChange.apply(_props, _toConsumableArray(this.prepareParamsArguments((0, _objectAssign2["default"])({}, this.state, newState))));
    };

    Table.prototype.getRecordKey = function getRecordKey(record, index) {
        if (this.props.rowKey) {
            return this.props.rowKey(record, index);
        }
        return record.key || index;
    };

    Table.prototype.renderRowSelection = function renderRowSelection() {
        var _this7 = this;

        var columns = this.props.columns.concat();
        if (this.props.rowSelection) {
            var data = this.getFlatCurrentPageData().filter(function (item) {
                if (_this7.props.rowSelection.getCheckboxProps) {
                    return !_this7.getCheckboxPropsByItem(item).disabled;
                }
                return true;
            });
            var checked = void 0;
            if (!data.length) {
                checked = false;
            } else {
                checked = this.state.selectionDirty ? data.every(function (item, i) {
                    return _this7.state.selectedRowKeys.indexOf(_this7.getRecordKey(item, i)) >= 0;
                }) : data.every(function (item, i) {
                    return _this7.state.selectedRowKeys.indexOf(_this7.getRecordKey(item, i)) >= 0;
                }) || data.every(function (item) {
                    return _this7.getCheckboxPropsByItem(item).defaultChecked;
                });
            }
            var selectionColumn = void 0;
            if (this.props.rowSelection.type === 'radio') {
                selectionColumn = {
                    key: 'selection-column',
                    render: this.renderSelectionRadio,
                    className: 'ant-table-selection-column'
                };
            } else {
                var checkboxAllDisabled = data.every(function (item) {
                    return _this7.getCheckboxPropsByItem(item).disabled;
                });
                var checkboxAll = React.createElement(_checkbox2["default"], { checked: checked, disabled: checkboxAllDisabled, onChange: this.handleSelectAllRow });
                selectionColumn = {
                    key: 'selection-column',
                    title: checkboxAll,
                    render: this.renderSelectionCheckBox,
                    className: 'ant-table-selection-column'
                };
            }
            if (columns.some(function (column) {
                return column.fixed === 'left' || column.fixed === true;
            })) {
                selectionColumn.fixed = 'left';
            }
            if (columns[0] && columns[0].key === 'selection-column') {
                columns[0] = selectionColumn;
            } else {
                columns.unshift(selectionColumn);
            }
        }
        return columns;
    };

    Table.prototype.getColumnKey = function getColumnKey(column, index) {
        return column.key || column.dataIndex || index;
    };

    Table.prototype.getMaxCurrent = function getMaxCurrent(total) {
        var _state$pagination = this.state.pagination;
        var current = _state$pagination.current;
        var pageSize = _state$pagination.pageSize;

        if ((current - 1) * pageSize >= total) {
            return current - 1;
        }
        return current;
    };

    Table.prototype.isSortColumn = function isSortColumn(column) {
        var sortColumn = this.state.sortColumn;

        if (!column || !sortColumn) {
            return false;
        }
        return this.getColumnKey(sortColumn) === this.getColumnKey(column);
    };

    Table.prototype.renderColumnsDropdown = function renderColumnsDropdown(columns) {
        var _this8 = this;

        var sortOrder = this.state.sortOrder;

        var locale = this.getLocale();
        return columns.map(function (originColumn, i) {
            var column = (0, _objectAssign2["default"])({}, originColumn);
            var key = _this8.getColumnKey(column, i);
            var filterDropdown = void 0;
            var sortButton = void 0;
            if (column.filters && column.filters.length > 0 || column.filterDropdown) {
                var colFilters = _this8.state.filters[key] || [];
                filterDropdown = React.createElement(_filterDropdown2["default"], { locale: locale, column: column, selectedKeys: colFilters, confirmFilter: _this8.handleFilter });
            }
            if (column.sorter) {
                var isSortColumn = _this8.isSortColumn(column);
                if (isSortColumn) {
                    column.className = column.className || '';
                    if (sortOrder) {
                        column.className += ' ant-table-column-sort';
                    }
                }
                var isAscend = isSortColumn && sortOrder === 'ascend';
                var isDescend = isSortColumn && sortOrder === 'descend';
                sortButton = React.createElement(
                    'div',
                    { className: 'ant-table-column-sorter' },
                    React.createElement(
                        'span',
                        { className: 'ant-table-column-sorter-up ' + (isAscend ? 'on' : 'off'), title: '↑', onClick: function onClick() {
                                return _this8.toggleSortOrder('ascend', column);
                            } },
                        React.createElement(_icon2["default"], { type: 'caret-up' })
                    ),
                    React.createElement(
                        'span',
                        { className: 'ant-table-column-sorter-down ' + (isDescend ? 'on' : 'off'), title: '↓', onClick: function onClick() {
                                return _this8.toggleSortOrder('descend', column);
                            } },
                        React.createElement(_icon2["default"], { type: 'caret-down' })
                    )
                );
            }
            column.title = React.createElement(
                'span',
                null,
                column.title,
                sortButton,
                filterDropdown
            );
            return column;
        });
    };

    Table.prototype.renderPagination = function renderPagination() {
        // 强制不需要分页
        if (!this.hasPagination()) {
            return null;
        }
        var size = 'default';
        var pagination = this.state.pagination;

        if (pagination.size) {
            size = pagination.size;
        } else if (this.props.size === 'middle' || this.props.size === 'small') {
            size = 'small';
        }
        var total = pagination.total || this.getLocalData().length;
        return total > 0 ? React.createElement(_pagination2["default"], _extends({}, pagination, { className: this.props.prefixCls + '-pagination', onChange: this.handlePageChange, total: total, size: size, current: this.getMaxCurrent(total), onShowSizeChange: this.handleShowSizeChange })) : null;
    };

    Table.prototype.prepareParamsArguments = function prepareParamsArguments(state) {
        // 准备筛选、排序、分页的参数
        var pagination = state.pagination;
        var filters = state.filters;
        var sorter = {};
        if (state.sortColumn && state.sortOrder) {
            sorter.column = state.sortColumn;
            sorter.order = state.sortOrder;
            sorter.field = state.sortColumn.dataIndex;
            sorter.columnKey = this.getColumnKey(state.sortColumn);
        }
        return [pagination, filters, sorter];
    };

    Table.prototype.findColumn = function findColumn(myKey) {
        var _this9 = this;

        return this.props.columns.filter(function (c) {
            return _this9.getColumnKey(c) === myKey;
        })[0];
    };

    Table.prototype.getCurrentPageData = function getCurrentPageData() {
        var data = this.getLocalData();
        var current = void 0;
        var pageSize = void 0;
        var state = this.state;
        // 如果没有分页的话，默认全部展示
        if (!this.hasPagination()) {
            pageSize = Number.MAX_VALUE;
            current = 1;
        } else {
            pageSize = state.pagination.pageSize;
            current = this.getMaxCurrent(state.pagination.total || data.length);
        }
        // 分页
        // ---
        // 当数据量少于等于每页数量时，直接设置数据
        // 否则进行读取分页数据
        if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
            data = data.filter(function (item, i) {
                return i >= (current - 1) * pageSize && i < current * pageSize;
            });
        }
        return data;
    };

    Table.prototype.getFlatCurrentPageData = function getFlatCurrentPageData() {
        return (0, _util.flatArray)(this.getCurrentPageData());
    };

    Table.prototype.getLocalData = function getLocalData() {
        var _this10 = this;

        var state = this.state;
        var data = this.props.dataSource || [];
        // 优化本地排序
        data = data.slice(0);
        for (var i = 0; i < data.length; i++) {
            data[i].indexForSort = i;
        }
        var sorterFn = this.getSorterFn();
        if (sorterFn) {
            data = data.sort(sorterFn);
        }
        // 筛选
        if (state.filters) {
            Object.keys(state.filters).forEach(function (columnKey) {
                var col = _this10.findColumn(columnKey);
                if (!col) {
                    return;
                }
                var values = state.filters[columnKey] || [];
                if (values.length === 0) {
                    return;
                }
                data = col.onFilter ? data.filter(function (record) {
                    return values.some(function (v) {
                        return col.onFilter(v, record);
                    });
                }) : data;
            });
        }
        return data;
    };

    Table.prototype.render = function render() {
        var _classNames,
            _this11 = this;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['style', 'className']);

        var _splitObject2 = _slicedToArray(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var style = _splitObject2$.style;
        var className = _splitObject2$.className;
        var restProps = _splitObject2[1];

        var data = this.getCurrentPageData();
        var columns = this.renderRowSelection();
        var expandIconAsCell = this.props.expandedRowRender && this.props.expandIconAsCell !== false;
        var locale = this.getLocale();
        var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, 'ant-table-' + this.props.size, true), _defineProperty(_classNames, 'ant-table-bordered', this.props.bordered), _classNames));
        columns = this.renderColumnsDropdown(columns);
        columns = columns.map(function (column, i) {
            var newColumn = (0, _objectAssign2["default"])({}, column);
            newColumn.key = _this11.getColumnKey(newColumn, i);
            return newColumn;
        });
        var emptyText = void 0;
        var emptyClass = '';
        if (!data || data.length === 0) {
            emptyText = React.createElement(
                'div',
                { className: 'ant-table-placeholder' },
                locale.emptyText
            );
            emptyClass = 'ant-table-empty';
        }
        var table = React.createElement(
            'div',
            null,
            React.createElement(_rcTable2["default"], _extends({}, restProps, { data: data, columns: columns, className: classString, expandIconColumnIndex: columns[0] && columns[0].key === 'selection-column' ? 1 : 0, expandIconAsCell: expandIconAsCell })),
            emptyText
        );
        // if there is no pagination or no data,
        // the height of spin should decrease by half of pagination
        var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? 'ant-table-with-pagination' : 'ant-table-without-pagination';
        var spinClassName = this.props.loading ? paginationPatchClass + ' ant-table-spin-holder' : '';
        table = React.createElement(
            _spin2["default"],
            { className: spinClassName, spinning: this.props.loading },
            table
        );
        return React.createElement(
            'div',
            { className: emptyClass + ' ' + className + ' clearfix', style: style },
            table,
            this.renderPagination()
        );
    };

    return Table;
}(React.Component);

exports["default"] = Table;

Table.propTypes = {
    dataSource: React.PropTypes.array,
    prefixCls: React.PropTypes.string,
    useFixedHeader: React.PropTypes.bool,
    rowSelection: React.PropTypes.object,
    className: React.PropTypes.string,
    size: React.PropTypes.string,
    loading: React.PropTypes.bool,
    bordered: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    locale: React.PropTypes.object
};
Table.defaultProps = {
    dataSource: [],
    prefixCls: 'ant-table',
    useFixedHeader: false,
    rowSelection: null,
    className: '',
    size: 'large',
    loading: false,
    bordered: false,
    indentSize: 20,
    onChange: noop,
    locale: {}
};
Table.contextTypes = {
    antLocale: React.PropTypes.object
};
module.exports = exports['default'];