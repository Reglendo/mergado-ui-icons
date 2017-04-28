

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

class IconBalanceScale extends React.Component<Props, State> {

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
                    <g><path d="m31.5 11.8l-7 12.9h14z m-23.3 0l-7 12.9h14z m14.9-3.5q-0.2 0.8-0.8 1.3t-1.3 0.9v23.5h11.1q0.2 0 0.4 0.2t0.2 0.4v1.1q0 0.3-0.2 0.5t-0.4 0.1h-24.5q-0.3 0-0.4-0.1t-0.2-0.5v-1.1q0-0.3 0.2-0.4t0.4-0.2h11.1v-23.5q-0.8-0.3-1.3-0.9t-0.9-1.3h-8.9q-0.3 0-0.4-0.1t-0.2-0.4v-1.2q0-0.3 0.2-0.4t0.4-0.2h8.9q0.4-1 1.3-1.7t2-0.6 2 0.6 1.3 1.7h9q0.2 0 0.4 0.2t0.2 0.4v1.2q0 0.2-0.2 0.4t-0.4 0.1h-9z m-3.3 0.3q0.6 0 1.1-0.4t0.4-1-0.4-1.1-1.1-0.4-1 0.4-0.4 1.1 0.4 1 1 0.4z m19.8 16.1q0 1.3-0.8 2.4t-2.1 1.6-2.7 0.9-2.5 0.3-2.6-0.3-2.6-0.9-2.1-1.6-0.9-2.4q0-0.2 0.7-1.5t1.6-3.2 2-3.6 1.8-3.3 1.1-1.8q0.3-0.6 1-0.6t1 0.6q0.1 0.1 1 1.8t1.9 3.3 1.9 3.6 1.7 3.2 0.6 1.5z m-23.3 0q0 1.3-0.8 2.4t-2.2 1.6-2.6 0.9-2.5 0.3-2.6-0.3-2.6-0.9-2.2-1.6-0.8-2.4q0-0.2 0.6-1.5t1.7-3.2 2-3.6 1.8-3.3 1-1.8q0.4-0.6 1.1-0.6t1 0.6q0.1 0.1 1 1.8t1.9 3.3 1.9 3.6 1.7 3.2 0.6 1.5z"></path></g>
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

export default IconBalanceScale

