

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

class IconEnvelopeSquare extends React.Component<Props, State> {

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
                    <g><path d="m30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5z m0.7 23.5v-9.7q-0.7 0.8-1.5 1.2-0.7 0.5-2.9 1.9t-3.4 2.2q-2.2 1.6-3.7 1.6-1.4 0-3.6-1.6-1-0.7-3.2-2t-3.2-2.1q-0.2-0.2-0.7-0.6t-0.7-0.6v9.7q0 0.9 0.6 1.5t1.6 0.7h18.5q0.9 0 1.5-0.7t0.7-1.5z m0-12.8q0-0.9-0.6-1.5t-1.6-0.7h-18.5q-0.9 0-1.6 0.7t-0.6 1.5q0 0.8 0.7 1.7t1.5 1.4q1.1 0.7 3.1 2t2.9 1.9l0.3 0.2 0.5 0.3 0.5 0.3 0.5 0.3 0.5 0.2 0.5 0.2 0.4 0 0.5 0 0.5-0.2 0.5-0.2 0.5-0.3 0.5-0.3 0.4-0.3 0.4-0.2 6-3.9q0.8-0.5 1.5-1.4t0.7-1.7z"></path></g>
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

export default IconEnvelopeSquare

