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
declare class IconTextHeight extends React.PureComponent<Props, {}> {
    static defaultProps: Props;
    render(): JSX.Element;
}
export default IconTextHeight;
