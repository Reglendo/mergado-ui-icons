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
export interface State {
}
declare class IconCopy extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default IconCopy;
