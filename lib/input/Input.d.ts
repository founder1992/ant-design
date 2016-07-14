import { Component } from 'react';
export default class Input extends Component {
    static defaultProps: {
        defaultValue: string;
        disabled: boolean;
        prefixCls: string;
        type: string;
        onPressEnter(): void;
        onKeyDown(): void;
        autosize: boolean;
    };
    static propTypes: {
        type: any;
        id: any;
        size: any;
        disabled: any;
        value: any;
        defaultValue: any;
        className: any;
        addonBefore: any;
        addonAfter: any;
        prefixCls: any;
        autosize: any;
        onPressEnter: any;
        onKeyDown: any;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    handleKeyDown: (e: any) => void;
    handleTextareaChange: (e: any) => void;
    resizeTextarea: () => void;
    renderLabledInput(children: any): any;
    renderInput(): any;
    render(): any;
}
