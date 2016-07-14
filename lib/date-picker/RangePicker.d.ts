import * as React from 'react';
export default class RangePicker extends React.Component {
    static defaultProps: {
        defaultValue: any[];
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    clearSelection: (e: any) => void;
    handleChange: (value: any) => void;
    render(): any;
}
