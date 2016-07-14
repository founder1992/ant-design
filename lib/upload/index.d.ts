import * as React from 'react';
export declare function Dragger(props: any): any;
export default class Upload extends React.Component {
    static Dragger: typeof Dragger;
    static defaultProps: {
        type: string;
        multiple: boolean;
        action: string;
        data: {};
        accept: string;
        onChange: () => void;
        beforeUpload: () => boolean;
        showUploadList: boolean;
        listType: string;
        className: string;
    };
    constructor(props: any);
    onStart: (file: any) => void;
    autoUpdateProgress(percent: any, file: any): void;
    removeFile(file: any): any;
    onSuccess: (response: any, file: any) => void;
    onProgress: (e: any, file: any) => void;
    onError: (error: any, response: any, file: any) => void;
    beforeUpload: (file: any) => any;
    handleRemove(file: any): void;
    handleManualRemove: (file: any) => void;
    onChange: (info: any) => void;
    componentWillReceiveProps(nextProps: any): void;
    onFileDrop: (e: any) => void;
    clearProgressTimer(): void;
    render(): any;
}
