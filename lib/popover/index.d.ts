import * as React from 'react';
export default class Popover extends React.Component {
    static defaultProps: {
        prefixCls: string;
        placement: string;
        transitionName: string;
        trigger: string;
        mouseEnterDelay: number;
        mouseLeaveDelay: number;
        overlayStyle: {};
    };
    render(): any;
    getPopupDomNode(): any;
    componentDidMount(): void;
    getOverlay(): any;
}
