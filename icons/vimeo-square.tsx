

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

class IconVimeoSquare extends React.Component<Props, State> {

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
                    <g><path d="m31.8 14.2q0.3-4.8-3.6-4.9-5.1-0.2-6.9 5.8 1-0.4 1.8-0.4 1.9 0 1.7 2.1-0.1 1.3-1.7 3.8t-2.3 2.4q-1 0-1.9-3.8-0.3-1.2-1-5.6-0.6-4.3-3.5-4-1.4 0.2-3.7 2.2l-3.6 3.2 1.1 1.5q1.7-1.1 2-1.1 1.3 0 2.4 4 0.3 1.2 1 3.7t1 3.6q1.5 4 3.6 4 3.6 0 8.6-6.5 4.9-6.4 5-10z m5.5-4.9v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconVimeoSquare

