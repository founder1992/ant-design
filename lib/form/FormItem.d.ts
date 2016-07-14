import * as React from 'react';
export default class FormItem extends React.Component {
    static defaultProps: {
        hasFeedback: boolean;
        prefixCls: string;
    };
    static propTypes: {
        prefixCls: any;
        label: any;
        labelCol: any;
        help: any;
        validateStatus: any;
        hasFeedback: any;
        wrapperCol: any;
        className: any;
        id: any;
        children: any;
        colon: any;
    };
    static contextTypes: {
        form: any;
    };
    shouldComponentUpdate(...args: any[]): any;
    getHelpMsg(): any;
    getOnlyControl(): any;
    getChildProp(prop: any): any;
    getId(): any;
    getMeta(): any;
    renderHelp(): any;
    renderExtra(): any;
    getValidateStatus(): string;
    renderValidateWrapper(c1: any, c2: any, c3: any): any;
    renderWrapper(children: any): any;
    isRequired(): any;
    renderLabel(): any;
    renderChildren(): any[];
    renderFormItem(children: any): any;
    render(): any;
}
