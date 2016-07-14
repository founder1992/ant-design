import * as React from 'react';
export default class FilterMenu extends React.Component {
    static defaultProps: {
        handleFilter(): void;
        column: any;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    setSelectedKeys: ({ selectedKeys }: {
        selectedKeys: any;
    }) => void;
    handleClearFilters: () => void;
    handleConfirm: () => void;
    onVisibleChange: (visible: any) => void;
    confirmFilter(): void;
    renderMenuItem(item: any): any;
    renderMenus(items: any): any;
    handleMenuItemClick: (info: any) => void;
    render(): any;
}
