/// <reference types="react" />
import * as React from "react";
export interface Props {
    size?: number;
    text?: string | Element | JSX.Element;
    title?: string;
    style?: any;
    addClass?: string;
    viewBox?: string;
    color?: string;
    textFirst?: boolean;
    className?: string;
}
declare class IconWhatsapp extends React.PureComponent<Props, {}> {
    static defaultProps: Props;
    render(): JSX.Element;
}
export default IconWhatsapp;
