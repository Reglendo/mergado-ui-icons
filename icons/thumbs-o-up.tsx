

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

class IconThumbsOUp extends React.Component<Props, State> {

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
                    <g><path d="m8.7 30q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m25.7-12.9q0-1.1-0.8-2t-2-0.8h-7.9q0-1.3 1.1-3.6t1.1-3.6q0-2.1-0.8-3.2t-2.8-1q-0.6 0.5-0.9 1.9t-0.6 2.8-1.4 2.4q-0.5 0.5-1.7 2-0.1 0.1-0.5 0.7t-0.7 0.9-0.8 1-0.9 0.9-0.8 0.8-0.9 0.6-0.8 0.2h-0.7v14.3h0.7q0.3 0 0.7 0.1t0.7 0.1 0.9 0.3 0.8 0.2 0.7 0.3 0.7 0.3q4.7 1.6 7.6 1.6h2.7q4.3 0 4.3-3.7 0-0.6-0.1-1.3 0.7-0.3 1.1-1.2t0.4-1.6-0.4-1.5q1.1-1.2 1.1-2.7 0-0.6-0.2-1.2t-0.5-1.1q0.7 0 1.1-1t0.5-1.9z m2.9 0q0 2-1.1 3.7 0.2 0.7 0.2 1.5 0 1.7-0.9 3.2 0.1 0.5 0.1 1 0 2.2-1.3 3.9 0 3.2-1.9 4.9t-5.1 1.8h-2.9q-2.1 0-4.2-0.5t-4.8-1.4q-2.6-0.9-3.1-0.9h-6.4q-1.2 0-2.1-0.8t-0.8-2.1v-14.3q0-1.1 0.8-2t2.1-0.8h6.1q0.8-0.6 3-3.5 1.3-1.6 2.4-2.8 0.6-0.6 0.8-1.9t0.7-2.9 1.4-2.4q0.8-0.8 2-0.8 1.9 0 3.4 0.7t2.2 2.3 0.8 4.1q0 2.1-1.1 4.3h4q2.3 0 4 1.7t1.7 4z"></path></g>
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

export default IconThumbsOUp

