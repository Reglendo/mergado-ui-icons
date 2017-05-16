

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

class IconAt extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--at`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m24.7 17.3q0-2.4-1.2-3.8t-3.3-1.3q-1.4 0-2.8 0.6t-2.4 1.9-1.8 3.1-0.7 4q0 2.5 1.2 3.9t3.4 1.3q2.1 0 3.9-1.5t2.7-3.7 1-4.5z m12.6 2.7q0 2.5-0.8 4.4t-2.2 3-3 1.7-3.2 0.6q-0.1 0-0.4 0t-0.3 0q-2.1 0-3.2-1.2-0.6-0.7-0.7-1.8-1.2 1.4-3 2.4t-3.8 1q-3.6 0-5.6-2.1t-2-6q0-3.5 1.5-6.5t4-4.7 5.5-1.7q1.9 0 3.4 0.7t2.4 2.3l0-0.5 0.3-1.2q0-0.1 0.1-0.3t0.2-0.1h2.7q0.1 0 0.3 0.2 0.1 0.2 0 0.4l-2.7 13.7q-0.1 0.5-0.1 1.1 0 0.8 0.3 1.1t1 0.3q0.6 0 1.3-0.1t1.6-0.5 1.7-1.2 1.3-1.9 0.5-3.1q0-6.5-3.9-10.4t-10.4-3.9q-2.9 0-5.5 1.1t-4.6 3.1-3 4.5-1.1 5.6 1.1 5.5 3 4.6 4.6 3 5.5 1.2q5.1 0 9.1-3.2 0.2-0.2 0.5-0.2t0.5 0.3l0.9 1.1q0.2 0.2 0.2 0.5-0.1 0.3-0.3 0.5-2.3 1.8-5.1 2.8t-5.8 1q-3.4 0-6.6-1.3t-5.5-3.7-3.6-5.5-1.4-6.6 1.4-6.7 3.6-5.4 5.5-3.7 6.6-1.3q7.7 0 12.5 4.7t4.7 12.4z"></path></g>
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

export default IconAt
