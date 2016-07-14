import * as React from 'react';
export default class Table extends React.Component {
    static propTypes: {
        dataSource: any;
        prefixCls: any;
        useFixedHeader: any;
        rowSelection: any;
        className: any;
        size: any;
        loading: any;
        bordered: any;
        onChange: any;
        locale: any;
    };
    static defaultProps: {
        dataSource: any[];
        prefixCls: string;
        useFixedHeader: boolean;
        rowSelection: any;
        className: string;
        size: string;
        loading: boolean;
        bordered: boolean;
        indentSize: number;
        onChange: () => void;
        locale: {};
    };
    static contextTypes: {
        antLocale: any;
    };
    constructor(props: any);
    getCheckboxPropsByItem(item: any): any;
    getDefaultSelection(): any[];
    getLocale(): any;
    componentWillReceiveProps(nextProps: any): void;
    setSelectedRowKeys(selectedRowKeys: any): void;
    hasPagination(): boolean;
    isFiltersChanged(filters: any): boolean;
    getSortOrderColumns(columns: any): any;
    getFilteredValueColumns(columns: any): any;
    getFiltersFromColumns(columns: any): {};
    getSortStateFromColumns(columns: any): {
        sortColumn: any;
        sortOrder: any;
    };
    getSorterFn(): (a: any, b: any) => any;
    toggleSortOrder(order: any, column: any): void;
    handleFilter: (column: any, nextFilters: any) => void;
    handleSelect: (record: any, rowIndex: any, e: any) => void;
    handleRadioSelect: (record: any, rowIndex: any, e: any) => void;
    handleSelectAllRow: (e: any) => void;
    handlePageChange: (current: any) => void;
    renderSelectionRadio: (value: any, record: any, index: any) => any;
    renderSelectionCheckBox: (value: any, record: any, index: any) => any;
    getRecordKey(record: any, index: any): any;
    renderRowSelection(): any;
    getColumnKey(column: any, index: any): any;
    getMaxCurrent(total: any): any;
    isSortColumn(column: any): boolean;
    renderColumnsDropdown(columns: any): any;
    handleShowSizeChange: (current: any, pageSize: any) => void;
    renderPagination(): any;
    prepareParamsArguments(state: any): any[];
    findColumn(myKey: any): any;
    getCurrentPageData(): any;
    getFlatCurrentPageData(): any[];
    getLocalData(): any;
    render(): any;
}
