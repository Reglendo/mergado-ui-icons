

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

class IconReddit extends React.Component<Props, State> {

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
                    <g><path d="m24.4 26.1q0.4 0.3 0 0.6-1.3 1.4-4.4 1.4t-4.4-1.4q-0.4-0.3 0-0.6 0.1-0.2 0.3-0.2t0.3 0.2q1.1 1 3.8 1 2.7 0 3.8-1.1 0.1-0.1 0.3-0.1t0.3 0.1z m-6.8-4.1q0 0.8-0.6 1.4t-1.4 0.6-1.4-0.6-0.6-1.4q0-0.8 0.6-1.4t1.4-0.6 1.4 0.6 0.6 1.4z m8.8 0q0 0.8-0.6 1.4t-1.4 0.6-1.4-0.6-0.6-1.4 0.6-1.4 1.4-0.6 1.4 0.6 0.6 1.4z m5.6-2.7q0-1.1-0.8-1.8t-1.9-0.8-1.9 0.8q-2.9-2-6.9-2.2l1.4-6.3 4.4 1q0 0.8 0.6 1.4t1.4 0.6 1.4-0.6 0.6-1.4-0.6-1.4-1.4-0.6q-1.2 0-1.8 1.1l-4.9-1.1q-0.4-0.1-0.6 0.4l-1.5 6.9q-4 0.2-6.9 2.2-0.8-0.8-1.9-0.8-1.1 0-1.9 0.8t-0.8 1.8q0 0.8 0.4 1.5t1.1 0.9q-0.1 0.6-0.1 1.3 0 3.2 3.1 5.4t7.5 2.3q4.4 0 7.6-2.3t3.1-5.4q0-0.7-0.2-1.3 0.7-0.3 1.1-1t0.4-1.4z m8 0.7q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6 7.8 1.6 6.4 4.2 4.2 6.4 1.6 7.8z"></path></g>
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

export default IconReddit

