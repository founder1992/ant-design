import * as React from 'react';
export default class UploadList extends React.Component {
    static defaultProps: {
        listType: string;
        items: any[];
        progressAttr: {
            strokeWidth: number;
            showInfo: boolean;
        };
    };
    handleClose: (file: any) => void;
    handlePreview: (file: any, e: any) => any;
    componentDidUpdate(): void;
    render(): any;
}
