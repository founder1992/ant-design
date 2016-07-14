import * as React from 'react';
import { TransferItem } from './index';
export declare function isRenderResultPlainObject(result: any): boolean;
export interface TransferListProps {
    prefixCls?: string;
    /** 数据源 */
    dataSource: Array<TransferItem>;
    filter?: TransferItem;
    /** 是否显示搜索框 */
    showSearch?: boolean;
    /** 搜索框的默认值 */
    searchPlaceholder?: string;
    /** 标题 */
    titleText?: string;
    style?: React.CSSProperties;
    handleFilter?: Function;
    handleSelect?: Function;
    handleSelectAll?: Function;
    handleClear?: Function;
    /** 每行渲染函数 */
    render?: Function;
    /** 主体渲染函数 */
    body?: Function;
    /** 底部渲染函数 */
    footer?: Function;
    /** 选中项 */
    checkedKeys?: Array<TransferItem>;
    checkStatus?: boolean;
    position?: string;
    notFoundContent?: React.ReactNode | string;
}
export default class TransferList extends React.Component<TransferListProps, any> {
    static defaultProps: {
        dataSource: any[];
        titleText: string;
        showSearch: boolean;
        handleClear: () => void;
        handleFilter: () => void;
        handleSelect: () => void;
        handleSelectAll: () => void;
        render: () => void;
        body: () => void;
        footer: () => void;
    };
    static contextTypes: {
        antLocale: any;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(...args: any[]): any;
    handleSelectAll: () => void;
    handleSelect: (selectedItem: any) => void;
    handleFilter: (e: any) => void;
    handleClear: () => void;
    renderCheckbox(props: any): any;
    matchFilter(text: any, filterText: any): boolean;
    render(): any;
}
