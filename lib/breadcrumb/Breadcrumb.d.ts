import React from 'react';
export default class Breadcrumb extends React.Component {
    static defaultProps: {
        prefixCls: string;
        separator: string;
        linkRender: (href: any, name: any) => any;
        nameRender: (breadcrumbName: any, route: any, params: any) => any;
    };
    static propTypes: {
        prefixCls: any;
        separator: any;
        routes: any;
        params: any;
        linkRender: any;
        nameRender: any;
    };
    render(): any;
}
