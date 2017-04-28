/// <reference types="react" />
import * as React from "react";
export interface Props {
    /** Size */
    size?: number;
    /** Icon text */
    text?: string;
    /** Icon title */
    title?: string;
    style?: any;
}
export interface State {
}
declare class IconCaretUp extends React.Component<Props, State> {
    readonly name: string;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default IconCaretUp;
