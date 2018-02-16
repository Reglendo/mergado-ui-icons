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
declare class IconNewspaperO extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(): boolean;
    static defaultProps: Props;
    render(): JSX.Element;
}
export default IconNewspaperO;
