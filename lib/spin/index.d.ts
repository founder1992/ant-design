import * as React from 'react';
export default class Spin extends React.Component {
    static defaultProps: {
        prefixCls: string;
        spinning: boolean;
    };
    static propTypes: {
        className: any;
        size: any;
    };
    constructor(props: any);
    isNestedPattern(): boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getSpinning(props: any): any;
    componentWillReceiveProps(nextProps: any): void;
    render(): any;
}
