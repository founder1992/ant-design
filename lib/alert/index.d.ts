import * as React from 'react';
export default class Alert extends React.Component {
    static defaultProps: {
        prefixCls: string;
        showIcon: boolean;
        onClose(): void;
        type: string;
    };
    constructor(props: any);
    handleClose: (e: any) => void;
    animationEnd: () => void;
    render(): any;
}
