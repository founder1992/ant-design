import * as React from 'react';
export default class Modal extends React.Component {
    static defaultProps: {
        prefixCls: string;
        onOk: () => void;
        onCancel: () => void;
        width: number;
        transitionName: string;
        maskTransitionName: string;
        confirmLoading: boolean;
        visible: boolean;
    };
    static propTypes: {
        prefixCls: any;
        onOk: any;
        onCancel: any;
        okText: any;
        cancelText: any;
        width: any;
        confirmLoading: any;
        visible: any;
        align: any;
        footer: any;
        title: any;
        closable: any;
    };
    static contextTypes: {
        antLocale: any;
    };
    handleCancel: (e: any) => void;
    handleOk: () => void;
    componentDidMount(): void;
    render(): any;
}
