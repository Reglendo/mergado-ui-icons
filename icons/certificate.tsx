

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

class IconCertificate extends React.Component<Props, State> {

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
                    <g><path d="m33.7 20l3.1 3q0.7 0.6 0.4 1.6-0.2 0.9-1.1 1.1l-4.2 1.1 1.2 4.1q0.2 1-0.5 1.6-0.6 0.7-1.5 0.4l-4.2-1.2-1 4.2q-0.3 0.9-1.2 1.2-0.3 0-0.4 0-0.7 0-1.1-0.4l-3.1-3.1-3 3.1q-0.6 0.6-1.5 0.4-0.9-0.2-1.2-1.2l-1-4.2-4.2 1.2q-0.9 0.3-1.6-0.4-0.7-0.6-0.4-1.6l1.2-4.1-4.2-1.1q-0.9-0.2-1.2-1.1-0.2-1 0.5-1.6l3.1-3-3.1-3q-0.7-0.6-0.5-1.6 0.3-0.9 1.2-1.1l4.2-1.1-1.2-4.1q-0.3-1 0.4-1.6 0.7-0.7 1.6-0.4l4.2 1.2 1-4.2q0.3-1 1.2-1.2 0.9-0.2 1.5 0.4l3 3.1 3.1-3.1q0.6-0.6 1.5-0.4 0.9 0.2 1.2 1.2l1 4.2 4.2-1.2q0.9-0.3 1.5 0.4 0.7 0.6 0.5 1.6l-1.2 4.1 4.2 1.1q0.9 0.2 1.1 1.1 0.3 1-0.4 1.6z"></path></g>
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

export default IconCertificate

