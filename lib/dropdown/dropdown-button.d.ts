import * as React from 'react';
export default class DropdownButton extends React.Component {
    static defaultProps: {
        align: {
            points: string[];
            overlay: {
                adjustX: number;
                adjustY: number;
            };
            offset: number[];
            targetOffset: number[];
        };
        type: string;
    };
    render(): any;
}
