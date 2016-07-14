import * as React from 'react';
export default class Menu extends React.Component {
    static Divider: any;
    static Item: any;
    static SubMenu: any;
    static ItemGroup: any;
    static defaultProps: {
        prefixCls: string;
        onClick: () => void;
        onOpen: () => void;
        onClose: () => void;
        className: string;
        theme: string;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    handleClick: (e: any) => void;
    handleOpenKeys: (e: any) => void;
    handleCloseKeys: (e: any) => void;
    setOpenKeys(openKeys: any): void;
    render(): any;
}
