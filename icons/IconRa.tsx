

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

class IconRa extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--ra`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m0.4 19.5q0.2-4.8 2.6-9.1t6.8-7.1h0.1q0 0.1 0 0.1-0.2 0.2-0.6 0.8t-1.2 1.7-1.3 2.4-1 3.1-0.3 3.3 0.8 3.5 2.5 3.5q1.1 1.1 2.2 1.5t2.1 0.3 1.5-0.5 1.1-0.8l0.3-0.3q0.9-1.2 1.2-2.6t0.2-2.8-0.5-2.3-0.6-1.8l-0.3-0.7q-0.2-0.5-0.7-1.1t-1-0.9-0.9-0.7-0.8-0.4l-0.3-0.1 2.3-2.6q0.9 0.4 1.8 1.2t1.3 1.3l0.4 0.6q0-1-0.4-2.3t-0.9-1.9l-0.5-0.7 3.6-4.1 3.6 4q-0.7 1.1-1.2 2.3t-0.5 2.1l-0.1 0.7q0.5-0.8 1.4-1.6t1.5-1.2l0.6-0.4 2.3 2.6q-0.9 0.3-1.9 1.1t-1.3 1.5l-0.4 0.6q-0.7 1.3-1.1 3t-0.1 3.8 1.2 3.5q0.8 1 1.8 1.3t1.9 0.1 1.7-0.5 1.2-0.8l0.5-0.4q1.3-1.1 2.2-2.5t1-2.7 0.3-2.7-0.4-2.7-0.9-2.4-1-2.1-1-1.6-0.8-1l-0.2-0.4q-0.4-0.3-0.2-0.3l0.2 0.1q0.9 0.6 1.4 1t1.4 1.1 1.4 1.3 1.3 1.5 1.3 1.7 1 1.9 0.8 2.3 0.6 2.7 0.2 3q0.1 5.8-2.4 10.4t-7 7.1-10.2 2.6q-4.1 0-7.8-1.6t-6.3-4.5-4.1-6.5-1.4-7.9z"></path></g>
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

export default IconRa
