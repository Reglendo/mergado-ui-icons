

import * as React from "react"

export interface Props {
    /** Size */
    size?: number
    /** Icon text */
    text?: string
    /** Icon title */
    title?: string
    style?: any
}
export interface State {
}

class IconQrcode extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--qrcode`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m13.1 25.7v2.9h-2.9v-2.9h2.9z m0-17.1v2.8h-2.9v-2.8h2.9z m17.1 0v2.8h-2.8v-2.8h2.8z m-22.8 22.8h8.5v-8.5h-8.5v8.5z m0-17.1h8.5v-8.6h-8.5v8.6z m17.1 0h8.6v-8.6h-8.6v8.6z m-5.7 5.7v14.3h-14.3v-14.3h14.3z m11.4 11.4v2.9h-2.8v-2.9h2.8z m5.7 0v2.9h-2.8v-2.9h2.8z m0-11.4v8.6h-8.5v-2.9h-2.9v8.6h-2.9v-14.3h8.6v2.9h2.9v-2.9h2.8z m-17.1-17.1v14.2h-14.3v-14.2h14.3z m17.1 0v14.2h-14.3v-14.2h14.3z"></path></g>
                </svg>
                {this.props.text ? (
                    <span className={`${this.name}__text`}>
                        {this.props.text}
                    </span>
                ) : null}
            </span>
        )
    }
}

export default IconQrcode
