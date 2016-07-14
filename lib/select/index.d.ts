import * as React from 'react';
export default class Select extends React.Component {
    static Option: any;
    static OptGroup: any;
    static defaultProps: {
        prefixCls: string;
        transitionName: string;
        choiceTransitionName: string;
        showSearch: boolean;
    };
    static contextTypes: {
        antLocale: any;
    };
    render(): any;
}
