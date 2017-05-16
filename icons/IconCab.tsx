

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

class IconCab extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--cab`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.4 20q1.8 0 3.1 1.3t1.3 3v7.5q0 0.3-0.2 0.4t-0.5 0.2h-1.8v1.3q0 1.5-1.1 2.6t-2.7 1.1-2.6-1.1-1.1-2.6v-1.3h-19.9v1.3q0 1.5-1 2.6t-2.7 1.1-2.6-1.1-1.1-2.6v-1.3h-1.9q-0.3 0-0.4-0.2t-0.2-0.4v-7.5q0-1.8 1.3-3t3-1.3h0.6l2-8.1q0.5-1.9 2-3.1t3.5-1.2h2.5v-4.4q0-0.2 0.2-0.4t0.4-0.2h8.7q0.3 0 0.5 0.2t0.1 0.4v4.4h2.5q1.9 0 3.5 1.2t2 3.1l2.1 8.1h0.5z m-29.2 9.3q1.3 0 2.2-0.9t0.9-2.2-0.9-2.2-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9z m3.8-9.3h19.7l-1.7-6.9q0-0.2-0.3-0.4t-0.4-0.2h-14.9q-0.2 0-0.4 0.2t-0.3 0.4z m23.5 9.3q1.3 0 2.2-0.9t0.9-2.2-0.9-2.2-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9z"></path></g>
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

export default IconCab
