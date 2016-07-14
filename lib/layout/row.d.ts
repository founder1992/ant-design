import React from 'react';
export default class Row extends React.Component {
    static defaultProps: {
        gutter: number;
    };
    static propTypes: {
        type: any;
        align: any;
        justify: any;
        className: any;
        children: any;
        gutter: any;
    };
    render(): any;
}
