import * as React from 'react';
export interface TimeLineItemProps {
    /** 指定圆圈颜色 */
    color?: string;
    dot?: React.ReactNode;
    style?: React.CSSProperties;
}
export default class TimelineItem extends React.Component<TimeLineItemProps, any> {
    static defaultProps: {
        prefixCls: string;
        color: string;
        last: boolean;
        pending: boolean;
    };
    render(): any;
}
