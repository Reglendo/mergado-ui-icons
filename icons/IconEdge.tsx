

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

class IconEdge extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--edge`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m1.5 17.7h0.1q0.3-2.8 1.3-5.3t2.5-4.9 3.8-3.9 5-2.6 6.1-1q5.2 0 9.3 2.4t6.5 6.7q2.4 4.2 2.4 9.9v4.2h-25.2q0.1 2.5 1.2 4.3t3.1 2.7 4.2 1.3 4.8 0.1 4.6-1.1 3.9-1.9v8.5q-2.1 1.2-5.1 2t-7 0.9-7.1-1.2q-4.2-1.7-6.9-5.6t-2.8-8.3q-0.1-5.4 2.5-9.2t7.2-6q-1 1.4-1.7 2.8t-1 3.6h14.1q0.2-1.7-0.1-3.1t-1.1-2.3-1.6-1.5-1.8-0.9-1.6-0.5-1.3-0.1l-0.5-0.1q-3 0.1-5.8 1t-5 2.4-3.9 3.1-3.1 3.6z"></path></g>
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

export default IconEdge

