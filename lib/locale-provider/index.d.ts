import * as React from 'react';
export default class LocaleProvider extends React.Component {
    static propTypes: {
        locale: any;
    };
    static childContextTypes: {
        antLocale: any;
    };
    getChildContext(): {
        antLocale: any;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnMount(): void;
    render(): any;
}
