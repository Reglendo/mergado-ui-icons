

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

class IconTry extends React.Component<Props, State> {

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
                    <g><path d="m32.7 18.6q0 4.2-2.1 7.8t-5.7 5.8-7.9 2.1h-3.6q-0.3 0-0.5-0.2t-0.2-0.5v-13.7l-4.8 1.5q0 0-0.2 0-0.2 0-0.4-0.1-0.3-0.2-0.3-0.6v-2.8q0-0.6 0.5-0.7l5.2-1.6v-2.1l-4.8 1.5q0 0-0.2 0-0.2 0-0.4-0.1-0.3-0.3-0.3-0.6v-2.9q0-0.5 0.5-0.7l5.2-1.6v-5.5q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5v4l8.4-2.6q0.3-0.1 0.6 0.1t0.3 0.6v2.9q0 0.5-0.5 0.7l-8.8 2.7v2l8.4-2.6q0.3-0.1 0.6 0.2t0.3 0.5v2.9q0 0.5-0.5 0.7l-8.8 2.7v10.9q4.2-0.3 7.1-3.4t2.9-7.3q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconTry

