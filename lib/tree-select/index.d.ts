import * as React from 'react';
export default class TreeSelect extends React.Component {
    static TreeNode: any;
    static SHOW_ALL: any;
    static SHOW_PARENT: any;
    static SHOW_CHILD: any;
    static defaultProps: {
        prefixCls: string;
        transitionName: string;
        choiceTransitionName: string;
        showSearch: boolean;
        dropdownClassName: string;
    };
    static contextTypes: {
        antLocale: any;
    };
    render(): any;
}
