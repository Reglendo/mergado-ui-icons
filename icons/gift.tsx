

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

class IconGift extends React.Component<Props, State> {

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
                    <g><path d="m23.7 30.3v-16h-7.1v16q0 0.5 0.4 0.8t1 0.3h4.3q0.6 0 1-0.3t0.4-0.8z m-10.2-18.9h4.4l-2.8-3.6q-0.6-0.7-1.6-0.7-0.9 0-1.5 0.7t-0.6 1.5 0.6 1.5 1.5 0.6z m15.4-2.1q0-0.9-0.6-1.5t-1.6-0.7q-0.9 0-1.5 0.7l-2.8 3.6h4.4q0.8 0 1.5-0.6t0.6-1.5z m8.4 5.7v7.1q0 0.4-0.2 0.6t-0.5 0.2h-2.2v9.2q0 0.9-0.6 1.6t-1.5 0.6h-24.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-2.2q-0.3 0-0.5-0.2t-0.2-0.6v-7.1q0-0.3 0.2-0.5t0.5-0.2h9.8q-2 0-3.5-1.5t-1.5-3.5 1.5-3.6 3.5-1.4q2.4 0 3.8 1.7l2.8 3.7 2.9-3.7q1.4-1.7 3.8-1.7 2 0 3.5 1.4t1.4 3.6-1.4 3.5-3.6 1.5h9.9q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconGift

