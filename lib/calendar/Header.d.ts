import * as React from 'react';
export default class Header extends React.Component {
    static defaultProps: {
        prefixCls: string;
        yearSelectOffset: number;
        yearSelectTotal: number;
        onValueChange: () => void;
        onTypeChange: () => void;
    };
    static propTypes: {
        value: any;
        locale: any;
        yearSelectOffset: any;
        yearSelectTotal: any;
        onValueChange: any;
        onTypeChange: any;
        prefixCls: any;
        selectPrefixCls: any;
        type: any;
    };
    getYearSelectElement(year: any): any;
    getMonthSelectElement(month: any): any;
    onYearChange: (year: any) => void;
    onMonthChange: (month: any) => void;
    onTypeChange: (e: any) => void;
    render(): any;
}
