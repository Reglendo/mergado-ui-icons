

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

class IconFutbolO extends React.Component<Props, State> {

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
                    <g><path d="m13.6 18.2l6.4-4.6 6.4 4.6-2.4 7.5h-7.9z m6.4-18.2q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4 1.6 7.8-1.6 7.8-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6z m13.8 30.1q3.3-4.5 3.3-10.1v-0.1l-2.2 2-5.4-5 1.4-7.2 3 0.3q-3.3-4.6-8.7-6.3l1.2 2.8-6.4 3.5-6.4-3.5 1.2-2.8q-5.4 1.7-8.7 6.3l3-0.3 1.4 7.2-5.4 5-2.2-2v0.1q0 5.6 3.3 10.1l0.7-2.9 7.2 0.9 3.1 6.6-2.6 1.6q2.7 0.8 5.4 0.8t5.4-0.8l-2.6-1.6 3.1-6.6 7.3-0.9z"></path></g>
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

export default IconFutbolO

