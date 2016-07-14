import * as React from 'react';
export interface TimePickerProps {
    /** 默认时间 */
    value?: string | Date;
    /** 初始默认时间 */
    defaultValue?: string | Date;
    /** 展示的时间格式 : "HH:mm:ss"、"HH:mm"、"mm:ss" */
    format?: string;
    /** 时间发生变化的回调 */
    onChange?: (Date: Date) => void;
    /** 禁用全部操作 */
    disabled?: boolean;
    /** 没有值的时候显示的内容 */
    placeholder?: string;
    /** 国际化配置 */
    locale?: Object;
    /** 隐藏禁止选择的选项 */
    hideDisabledOptions?: boolean;
    /** 禁止选择部分小时选项 */
    disabledHours?: Function;
    /** 禁止选择部分分钟选项 */
    disabledMinutes?: Function;
    /** 禁止选择部分秒选项 */
    disabledSeconds?: Function;
    style?: React.CSSProperties;
}
export default class TimePicker extends React.Component<TimePickerProps, any> {
    static defaultProps: {
        format: string;
        prefixCls: string;
        onChange(): void;
        locale: {};
        align: {
            offset: number[];
        };
        disabled: boolean;
        disabledHours: any;
        disabledMinutes: any;
        disabledSeconds: any;
        hideDisabledOptions: boolean;
        placement: string;
        transitionName: string;
    };
    static contextTypes: {
        antLocale: any;
    };
    getFormatter(): any;
    /**
     * 获得输入框的 className
     */
    getSizeClass(): string;
    /**
     * 获得输入框的默认值
     */
    parseTimeFromValue(value: any): any;
    handleChange: (value: any) => void;
    getLocale(): any;
    render(): any;
}
