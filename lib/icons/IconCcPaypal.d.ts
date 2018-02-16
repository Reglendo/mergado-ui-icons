/// <reference types="react" />
import * as React from "react";
export interface Props {
    size?: number;
    text?: string;
    title?: string;
    style?: any;
    addClass?: string;
    viewBox?: string;
    color?: string;
    textFirst?: boolean;
    className?: string;
}
declare class IconCcPaypal extends React.PureComponent<Props, {}> {
    static defaultProps: Props;
    render(): JSX.Element;
}
export default IconCcPaypal;
