import * as React from 'react';
export default class Badge extends React.Component {
    static defaultProps: {
        prefixCls: string;
        count: any;
        dot: boolean;
        overflowCount: number;
    };
    static propTypes: {
        count: any;
        dot: any;
        overflowCount: any;
    };
    render(): any;
}
