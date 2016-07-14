import * as React from 'react';
export default class Calendar extends React.Component {
    static defaultProps: {
        monthCellRender: () => any;
        dateCellRender: () => any;
        locale: {};
        fullscreen: boolean;
        prefixCls: string;
        onPanelChange: () => any;
        mode: string;
    };
    static propTypes: {
        monthCellRender: any;
        dateCellRender: any;
        fullscreen: any;
        locale: any;
        prefixCls: any;
        className: any;
        style: any;
        onPanelChange: any;
        value: any;
    };
    static contextTypes: {
        antLocale: any;
    };
    constructor(props: any);
    parseDateFromValue(value: any): any;
    componentWillReceiveProps(nextProps: any): void;
    getLocale: () => any;
    monthCellRender: (value: any, locale: any) => any;
    dateCellRender: (value: any) => any;
    setValue: (value: any) => void;
    setType: (type: any) => void;
    render(): any;
}
