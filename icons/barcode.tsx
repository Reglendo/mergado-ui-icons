

import * as React from "react"

export interface Props {
    /** Icon type */
    type: string
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

class IconBarcode extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        type: "reglendo",
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--${this.props.type}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m1.4 34.3h-1.4v-31.4h1.4v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m2.1 0h-0.7v-31.4h0.7v31.4z m3.5 0h-0.7v-31.4h0.7v31.4z m3.5 0h-1.4v-31.4h1.4v31.4z m2.8 0h-0.7v-31.4h0.7v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m1.4 0h-0.6v-31.4h0.6v31.4z m3.6 0h-1.5v-31.4h1.4v31.4z m3.5 0h-1.5v-31.4h1.5v31.4z m2.8 0h-1.4v-31.4h1.4v31.4z m2.8 0h-1.4v-31.4h1.4v31.4z m2.1 0h-1.4v-31.4h1.4v31.4z m4.2 0h-2.1v-31.4h2.1v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m2.1 0h-1.4v-31.4h1.4v31.4z"></path></g>
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

export default IconBarcode

