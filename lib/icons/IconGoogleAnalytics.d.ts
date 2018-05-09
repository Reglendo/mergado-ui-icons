/// <reference types="react" />
import * as React from "react";
export interface Props {
    size?: number;
    text?: string | Element;
    title?: string;
    style?: any;
    addClass?: string;
    viewBox?: string;
    color?: string;
    textFirst?: boolean;
    className?: string;
}
declare class IconGoogleAnalytics extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps: any): boolean;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default IconGoogleAnalytics;
