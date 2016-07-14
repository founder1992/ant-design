import * as React from 'react';
export interface CheckboxOptionType {
    label: string;
    value: string;
    disabled?: boolean;
}
export interface CheckboxGroupProps {
    /** 默认选中的选项 */
    defaultValue?: Array<string>;
    /** 指定选中的选项 */
    value?: Array<string>;
    /** 指定可选项 */
    options?: Array<CheckboxOptionType> | Array<string>;
    /** 变化时回调函数 */
    onChange?: (checkedValue: Array<string>) => void;
    disabled?: boolean;
    style?: React.CSSProperties;
}
export interface CheckboxGroupState {
    value: any;
}
export default class CheckboxGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState> {
    static defaultProps: {
        options: any[];
        defaultValue: any[];
        onChange(): void;
    };
    static propTypes: {
        defaultValue: any;
        value: any;
        options: any;
        onChange: any;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    shouldComponentUpdate(...args: any[]): any;
    getOptions(): any;
    toggleOption: (option: any) => void;
    render(): any;
}
