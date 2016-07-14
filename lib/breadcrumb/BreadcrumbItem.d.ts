import * as React from 'react';
export default class BreadcrumbItem extends React.Component {
    static defaultProps: {
        prefixCls: string;
        separator: string;
    };
    static propTypes: {
        prefixCls: any;
        separator: any;
        href: any;
    };
    render(): any;
}
