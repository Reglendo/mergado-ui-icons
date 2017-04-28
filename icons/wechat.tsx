

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

class IconWechat extends React.Component<Props, State> {

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
                    <g><path d="m11.3 11.6q0-0.8-0.5-1.3t-1.3-0.5q-0.8 0-1.5 0.5t-0.6 1.3q0 0.7 0.6 1.2t1.5 0.5q0.8 0 1.3-0.5t0.5-1.2z m14.4 9.8q0-0.5-0.5-1t-1.3-0.4q-0.5 0-0.9 0.4t-0.5 1q0 0.5 0.5 1t0.9 0.4q0.8 0 1.3-0.4t0.5-1z m-4.6-9.8q0-0.8-0.5-1.3t-1.2-0.5q-0.9 0-1.5 0.5t-0.7 1.3q0 0.7 0.7 1.2t1.5 0.5q0.7 0 1.2-0.5t0.5-1.2z m12.3 9.8q0-0.5-0.5-1t-1.2-0.4q-0.6 0-1 0.4t-0.4 1q0 0.5 0.4 1t1 0.4q0.7 0 1.2-0.4t0.5-1z m-5.1-7.7q-0.6-0.1-1.4-0.1-3.3 0-6 1.5t-4.4 4.1-1.6 5.5q0 1.5 0.5 3-0.7 0-1.3 0-0.5 0-1 0t-1.1-0.1-0.8-0.1-1.1-0.2-1-0.3l-4.9 2.5 1.4-4.2q-5.6-4-5.6-9.5 0-3.3 1.9-6.1t5.1-4.3 7.1-1.6q3.4 0 6.4 1.3t5.1 3.5 2.7 5.1z m11.5 10.9q0 2.3-1.4 4.3t-3.6 3.8l1.1 3.5-3.9-2.1q-2.9 0.7-4.2 0.7-3.3 0-6-1.4t-4.4-3.7-1.6-5.1 1.6-5.1 4.4-3.8 6-1.3q3.1 0 5.9 1.3t4.4 3.8 1.6 5.1z"></path></g>
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

export default IconWechat

