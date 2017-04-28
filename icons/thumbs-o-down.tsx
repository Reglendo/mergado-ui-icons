

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

class IconThumbsODown extends React.Component<Props, State> {

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
                    <g><path d="m8.7 10q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m25.7 12.9q0-0.8-0.4-1.9t-1.2-1q0.3-0.4 0.5-1.1t0.2-1.2q0-1.5-1.1-2.7 0.4-0.7 0.4-1.5t-0.4-1.6-1.1-1.2q0.1-0.7 0.1-1.3 0-1.9-1.1-2.8t-3-0.9h-2.9q-2.9 0-7.6 1.6-0.1 0.1-0.7 0.3t-0.7 0.3-0.8 0.2-0.9 0.3-0.7 0.1-0.7 0.1h-0.7v14.3h0.7q0.3 0 0.8 0.2t0.9 0.6 0.8 0.8 0.9 0.9 0.8 1 0.7 0.9 0.5 0.7q1.2 1.5 1.7 2 0.9 1 1.4 2.4t0.6 2.8 0.9 1.9q2.1 0 2.8-1t0.8-3.2q0-1.4-1.1-3.6t-1.1-3.6h7.9q1.1 0 2-0.8t0.8-2z m2.9 0q0 2.3-1.7 4t-4 1.7h-4q1.1 2.2 1.1 4.3 0 2.6-0.8 4.1-0.7 1.5-2.2 2.3t-3.4 0.7q-1.2 0-2-0.8-0.8-0.8-1.2-1.9t-0.6-2-0.4-1.9-0.7-1.4q-1.1-1.1-2.4-2.8-2.2-3-3-3.5h-6.1q-1.2 0-2.1-0.8t-0.8-2v-14.3q0-1.2 0.8-2.1t2.1-0.8h6.4q0.5 0 3.1-0.9 2.8-1 4.9-1.5t4.5-0.4h2.5q3.1 0 5.1 1.7t1.9 4.8v0.2q1.3 1.7 1.3 3.9 0 0.5-0.1 1 0.9 1.5 0.9 3.2 0 0.8-0.2 1.5 1.1 1.7 1.1 3.7z"></path></g>
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

export default IconThumbsODown

