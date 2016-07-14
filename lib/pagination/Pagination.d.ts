import * as React from 'react';
export default class Pagination extends React.Component {
    static defaultProps: {
        locale: any;
        className: string;
        prefixCls: string;
    };
    static contextTypes: {
        antLocale: any;
    };
    render(): any;
}
