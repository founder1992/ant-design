import * as React from 'react';
import List from './list';
import Operation from './operation';
import Search from './search';
export interface TransferItem {
    key: number | string;
    title: string;
    description?: string;
    chosen: boolean;
}
export interface TransferProps {
    /** 数据源 */
    dataSource: Array<TransferItem>;
    /** 每行数据渲染函数 */
    render?: (record: TransferItem) => any;
    /** 显示在右侧框数据的key集合 */
    targetKeys: Array<string>;
    /** 变化时回调函数 */
    onChange?: (targetKeys: Array<TransferItem>, direction: string, moveKeys: any) => void;
    /** 两个穿梭框的自定义样式 */
    listStyle?: React.CSSProperties;
    /** 自定义类*/
    className?: string;
    /** 标题集合,顺序从左至右 */
    titles?: Array<string>;
    /** 操作文案集合,顺序从上至下 */
    operations?: Array<string>;
    /** 是否显示搜索框 */
    showSearch?: boolean;
    /** 搜索框的默认值 */
    searchPlaceholder?: string;
    /** 当列表为空时显示的内容 */
    notFoundContent?: React.ReactNode | string;
    /** 底部渲染函数 */
    footer?: (props: any) => any;
    style?: React.CSSProperties;
}
export default class Transfer extends React.Component<TransferProps, any> {
    static List: typeof List;
    static Operation: typeof Operation;
    static Search: typeof Search;
    static defaultProps: {
        prefixCls: string;
        dataSource: any[];
        render: () => void;
        targetKeys: any[];
        onChange: () => void;
        titles: string[];
        operations: any[];
        showSearch: boolean;
        body: () => void;
        footer: () => void;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    splitDataSource(props: any): any;
    moveTo: (direction: any) => void;
    moveToLeft: () => void;
    moveToRight: () => void;
    getGlobalCheckStatus(direction: any): any;
    handleSelectAll: (direction: any) => void;
    handleLeftSelectAll: () => void;
    handleRightSelectAll: () => void;
    handleFilter: (direction: any, e: any) => void;
    handleLeftFilter: (e: any) => void;
    handleRightFilter: (e: any) => void;
    handleClear: (direction: any) => void;
    handleLeftClear: () => void;
    handleRightClear: () => void;
    handleSelect: (direction: any, selectedItem: any, checked: any) => void;
    handleLeftSelect: (selectedItem: any, checked: any) => void;
    handleRightSelect: (selectedItem: any, checked: any) => void;
    render(): any;
}
