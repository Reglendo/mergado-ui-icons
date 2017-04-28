

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

class IconOdnoklassnikiSquare extends React.Component<Props, State> {

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
                    <g><path d="m23.7 12.9q0 1.5-1 2.6t-2.6 1-2.5-1-1-2.6 1-2.5 2.5-1 2.6 1 1 2.5z m4.8 8.1q-0.3-0.4-0.7-0.7t-1-0.2-1.4 0.6q-0.2 0.2-0.6 0.5t-1.8 0.7-2.9 0.4-2.7-0.4-1.9-0.8l-0.6-0.4q-0.7-0.5-1.4-0.6t-1.1 0.2-0.6 0.7q-0.5 1.1 0 1.7t1.9 1.7q1.9 1.1 5.1 1.4l-1.2 1.2q-3.1 3.2-4.2 4.3-0.5 0.4-0.5 1.1t0.5 1.2l0.2 0.2q0.4 0.5 1.1 0.5t1.2-0.5l4.3-4.3q2.5 2.6 4.2 4.3 0.5 0.5 1.2 0.5t1.2-0.5l0.2-0.2q0.5-0.5 0.5-1.2t-0.5-1.1l-4.3-4.3-1.2-1.2q3.2-0.3 5.1-1.4 1.5-1 1.9-1.7t0-1.7z m-1.1-8.1q0-2.9-2.1-5.1t-5.2-2.1-5.1 2.1-2.1 5.1 2.1 5.2 5.1 2.1 5.2-2.1 2.1-5.2z m9.9-3.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconOdnoklassnikiSquare

