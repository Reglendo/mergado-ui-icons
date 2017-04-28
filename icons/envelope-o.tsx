

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

class IconEnvelopeO extends React.Component<Props, State> {

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
                    <g><path d="m37.1 33.6v-17.2q-0.7 0.8-1.5 1.5-6 4.6-9.5 7.5-1.1 1-1.9 1.5t-1.9 1.1-2.3 0.6h0q-1.1 0-2.3-0.6t-1.9-1.1-1.9-1.5q-3.5-2.9-9.5-7.5-0.8-0.7-1.5-1.5v17.2q0 0.3 0.2 0.5t0.5 0.2h32.8q0.3 0 0.5-0.2t0.2-0.5z m0-23.5v-0.5l0-0.3 0-0.3-0.2-0.2-0.2-0.2-0.3 0h-32.8q-0.3 0-0.5 0.2t-0.2 0.5q0 3.7 3.2 6.3 4.3 3.4 9 7.1 0.1 0.1 0.8 0.7t1 0.8 1 0.7 1.1 0.6 1 0.2h0q0.5 0 1-0.2t1.1-0.6 1-0.7 1-0.8 0.8-0.7q4.7-3.7 9-7.1 1.2-0.9 2.2-2.6t1-2.9z m2.9-0.8v24.3q0 1.4-1 2.5t-2.6 1h-32.8q-1.5 0-2.6-1t-1-2.5v-24.3q0-1.5 1.1-2.5t2.5-1.1h32.8q1.5 0 2.6 1.1t1 2.5z"></path></g>
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

export default IconEnvelopeO

