

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

class IconToggleOff extends React.Component<Props, State> {

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
                    <g><path d="m22.4 20q0-2-0.8-3.9t-2.2-3.1-3.1-2.2-3.9-0.7-3.8 0.7-3.2 2.2-2.1 3.1-0.8 3.9 0.8 3.9 2.1 3.1 3.2 2.2 3.8 0.7 3.9-0.7 3.1-2.2 2.2-3.1 0.8-3.9z m14.9 0q0-2-0.8-3.9t-2.1-3.1-3.2-2.2-3.9-0.7h-7.5q2.3 1.7 3.7 4.3t1.3 5.6-1.3 5.6-3.7 4.3h7.5q2 0 3.9-0.7t3.2-2.2 2.1-3.1 0.8-3.9z m2.5 0q0 2.5-1 4.8t-2.7 4-3.9 2.6-4.9 1h-14.9q-2.5 0-4.8-1t-4-2.6-2.6-4-1-4.8 1-4.8 2.6-4 4-2.6 4.8-1h14.9q2.6 0 4.9 1t3.9 2.6 2.7 4 1 4.8z"></path></g>
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

export default IconToggleOff

