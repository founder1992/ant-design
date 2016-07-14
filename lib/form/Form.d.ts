import * as React from 'react';
export default class Form extends React.Component {
    static defaultProps: {
        prefixCls: string;
        onSubmit(e: any): void;
    };
    static propTypes: {
        prefixCls: any;
        horizontal: any;
        inline: any;
        form: any;
        children: any;
        onSubmit: any;
    };
    static childContextTypes: {
        form: any;
    };
    shouldComponentUpdate(...args: any[]): any;
    getChildContext(): {
        form: any;
    };
    render(): any;
}
