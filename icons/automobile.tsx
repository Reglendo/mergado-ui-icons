

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

class IconAutomobile extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--automobile`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m9.3 23.7q0-1.3-0.9-2.2t-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9 2.2-0.9 0.9-2.2z m0.7-6.2h19.7l-1.7-6.9q0-0.2-0.3-0.4t-0.4-0.1h-14.9q-0.2 0-0.4 0.1t-0.3 0.4z m26.6 6.2q0-1.3-0.9-2.2t-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9 2.2-0.9 0.9-2.2z m3.2-1.8v7.4q0 0.3-0.2 0.5t-0.5 0.1h-1.8v2.5q0 1.6-1.1 2.7t-2.7 1-2.6-1-1.1-2.7v-2.5h-19.9v2.5q0 1.6-1 2.7t-2.7 1-2.6-1-1.1-2.7v-2.5h-1.9q-0.3 0-0.4-0.1t-0.2-0.5v-7.4q0-1.8 1.3-3.1t3-1.3h0.6l2-8.1q0.5-1.8 2-3.1t3.5-1.2h14.9q1.9 0 3.5 1.2t2 3.1l2.1 8.1h0.5q1.8 0 3.1 1.3t1.3 3.1z"></path></g>
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

export default IconAutomobile

