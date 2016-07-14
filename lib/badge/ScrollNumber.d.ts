import React from 'react';
export default class ScrollNumber extends React.Component {
    static defaultProps: {
        prefixCls: string;
        count: any;
        component: string;
        onAnimated(): void;
        height: number;
    };
    static propTypes: {
        count: any;
        component: any;
        onAnimated: any;
        height: any;
    };
    constructor(props: any);
    componentDidMount(): void;
    getPositionByNum(num: any, i: any): any;
    componentWillReceiveProps(nextProps: any): void;
    renderNumberList(position: any): any[];
    renderCurrentNumber(num: any, i: any): any;
    renderNumberElement(): any;
    render(): any;
}
