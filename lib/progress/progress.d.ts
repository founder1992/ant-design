import * as React from 'react';
export default class Line extends React.Component {
    static defaultProps: {
        type: string;
        percent: number;
        showInfo: boolean;
        trailColor: string;
        prefixCls: string;
    };
    static propTypes: {
        status: any;
        type: any;
        showInfo: any;
        percent: any;
        width: any;
        strokeWidth: any;
        trailColor: any;
        format: any;
    };
    render(): any;
}
