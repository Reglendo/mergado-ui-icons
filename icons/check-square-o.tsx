

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

class IconCheckSquareO extends React.Component<Props, State> {

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
                    <g><path d="m32.9 20.8v7.1q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.2 0.2-0.5 0.2-0.1 0-0.2-0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-5.7q0-0.3 0.2-0.5l1.4-1.4q0.2-0.3 0.5-0.3 0.1 0 0.3 0.1 0.4 0.2 0.4 0.7z m5.2-11l-18.2 18.2q-0.5 0.6-1.3 0.6t-1.2-0.6l-9.6-9.6q-0.6-0.5-0.6-1.3t0.6-1.2l2.4-2.5q0.6-0.5 1.3-0.5t1.3 0.5l5.8 5.9 14.5-14.5q0.5-0.5 1.3-0.5t1.2 0.5l2.5 2.5q0.5 0.5 0.5 1.3t-0.5 1.2z"></path></g>
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

export default IconCheckSquareO

