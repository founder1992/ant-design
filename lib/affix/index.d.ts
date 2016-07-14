import * as React from 'react';
export interface AffixProps {
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop?: number;
    offset?: number;
    offsetBottom?: number;
    style?: React.CSSProperties;
    onChange?: (affixed?: boolean) => any;
}
export default class Affix extends React.Component<AffixProps, any> {
    static propTypes: {
        offsetTop: any;
        offsetBottom: any;
    };
    static defaultProps: {
        onChange(): void;
    };
    scrollEvent: any;
    resizeEvent: any;
    refs: {
        fixedNode: any;
    };
    constructor(props: any);
    setAffixStyle(e: any, affixStyle: any): void;
    setPlaceholderStyle(e: any, placeholderStyle: any): void;
    handleScroll: (e: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): any;
}
