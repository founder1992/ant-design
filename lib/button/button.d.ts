import * as React from 'react';
export default class Button extends React.Component {
    static defaultProps: {
        prefixCls: string;
        onClick(): void;
        loading: boolean;
    };
    static propTypes: {
        type: any;
        shape: any;
        size: any;
        htmlType: any;
        onClick: any;
        loading: any;
        className: any;
        icon: any;
    };
    componentWillUnmount(): void;
    clearButton: (button: any) => void;
    handleClick: (...args: any[]) => void;
    handleMouseUp: (e: any) => void;
    render(): any;
}
