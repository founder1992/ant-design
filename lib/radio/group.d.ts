import * as React from 'react';
export default class RadioGroup extends React.Component {
    static defaultProps: {
        prefixCls: string;
        disabled: boolean;
        onChange(): void;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    shouldComponentUpdate(...args: any[]): any;
    onRadioChange: (ev: any) => void;
    render(): any;
}
