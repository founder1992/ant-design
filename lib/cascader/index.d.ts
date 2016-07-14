import * as React from 'react';
export interface CascaderOptionType {
    value: string;
    label: string;
    disabled?: boolean;
    children?: Array<CascaderOptionType>;
}
export declare type CascaderExpandTrigger = 'click' | 'hover';
export interface CascaderProps {
    /** 可选项数据源 */
    options: Array<CascaderOptionType>;
    /** 默认的选中项 */
    defaultValue?: Array<CascaderOptionType>;
    /** 指定选中项 */
    value?: Array<CascaderOptionType>;
    /** 选择完成后的回调 */
    onChange?: (value: string, selectedOptions?: Array<CascaderOptionType>) => void;
    /** 选择后展示的渲染函数 */
    displayRender?: (label: Array<string>, selectedOptions?: Array<CascaderOptionType>) => React.ReactNode;
    /** 自定义样式 */
    style?: React.CSSProperties;
    /** 自定义类名 */
    className?: string;
    /** 自定义浮层类名 */
    popupClassName?: string;
    /** 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` */
    popupPlacement?: string;
    /** 输入框占位文本*/
    placeholder?: string;
    /** 输入框大小，可选 `large` `default` `small` */
    size?: string;
    /** 禁用*/
    disabled?: boolean;
    /** 是否支持清除*/
    allowClear?: boolean;
    /** 次级菜单的展开方式，可选 'click' 和 'hover' */
    expandTrigger?: CascaderExpandTrigger;
    /** 当此项为 true 时，点选每级菜单选项值都会发生变化 */
    changeOnSelect?: boolean;
    /** 浮层可见变化时回调 */
    onPopupVisibleChange?: (popupVisible: boolean) => void;
}
export default class Cascader extends React.Component<CascaderProps, any> {
    static defaultProps: {
        prefixCls: string;
        placeholder: string;
        transitionName: string;
        popupPlacement: string;
        onChange(): void;
        options: any[];
        displayRender: (label: any) => any;
        disabled: boolean;
        allowClear: boolean;
        onPopupVisibleChange(): void;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    handleChange: (value: any, selectedOptions: any) => void;
    handlePopupVisibleChange: (popupVisible: any) => void;
    setValue: (value: any, selectedOptions?: any[]) => void;
    getLabel(): any;
    clearSelection: (e: any) => void;
    render(): any;
}
