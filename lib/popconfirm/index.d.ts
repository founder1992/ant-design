import * as React from 'react';
export default class Popconfirm extends React.Component {
    static defaultProps: {
        transitionName: string;
        placement: string;
        trigger: string;
        overlayStyle: {};
        onConfirm: () => void;
        onCancel: () => void;
        onVisibleChange: () => void;
    };
    static contextTypes: {
        antLocale: any;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    confirm: () => void;
    cancel: () => void;
    onVisibleChange: (visible: any) => void;
    setVisible(visible: any): void;
    render(): any;
}
