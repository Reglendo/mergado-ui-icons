

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

class IconSignOut extends React.Component<Props, State> {

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
                    <g><path d="m16.8 32.1q0 0.1 0 0.5t0 0.6 0 0.5-0.3 0.4-0.4 0.2h-7.2q-2.6 0-4.5-1.9t-1.9-4.5v-15.8q0-2.6 1.9-4.5t4.5-1.9h7.2q0.3 0 0.5 0.2t0.2 0.5q0 0.1 0 0.5t0 0.6 0 0.5-0.3 0.4-0.4 0.2h-7.2q-1.4 0-2.5 1t-1 2.5v15.8q0 1.4 1 2.5t2.5 1h7l0.2 0.1 0.3 0 0.2 0.1 0.1 0.2 0.1 0.3z m20.7-12.1q0 0.6-0.4 1l-12.2 12.1q-0.4 0.5-1 0.5t-1-0.5-0.4-1v-6.4h-10q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h10v-6.4q0-0.6 0.4-1t1-0.5 1 0.5l12.2 12.1q0.4 0.4 0.4 1z"></path></g>
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

export default IconSignOut

