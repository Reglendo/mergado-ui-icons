

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

class IconShareAltSquare extends React.Component<Props, State> {

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
                    <g><path d="m31.6 26.7q0-2-1.4-3.4t-3.4-1.4q-1.9 0-3.2 1.3l-5.4-2.7q0-0.3 0-0.5t0-0.5l5.4-2.7q1.3 1.3 3.2 1.3 2 0 3.4-1.4t1.4-3.4-1.4-3.3-3.4-1.4-3.4 1.4-1.4 3.3q0 0.2 0.1 0.5l-5.4 2.7q-1.4-1.3-3.2-1.3-2 0-3.4 1.4t-1.4 3.4 1.4 3.4 3.4 1.4q1.8 0 3.2-1.3l5.4 2.7q-0.1 0.3-0.1 0.5 0 1.9 1.4 3.3t3.4 1.4 3.4-1.4 1.4-3.3z m5.7-17.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconShareAltSquare

