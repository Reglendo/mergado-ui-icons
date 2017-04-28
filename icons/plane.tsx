

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

class IconPlane extends React.Component<Props, State> {

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
                    <g><path d="m34.7 3.6q1 1.1 0.3 3.3t-2.4 3.8l-3.6 3.6 3.5 15.5q0.2 0.5-0.2 0.8l-2.9 2.1q-0.1 0.2-0.4 0.2-0.1 0-0.2-0.1-0.3 0-0.4-0.3l-6.3-11.4-5.7 5.8 1.1 4.4q0.2 0.3-0.1 0.6l-2.2 2.2q-0.2 0.2-0.5 0.2h0q-0.4-0.1-0.6-0.3l-4.2-5.6-5.6-4.2q-0.3-0.2-0.3-0.6 0-0.2 0.2-0.5l2.1-2.2q0.2-0.2 0.6-0.2 0.1 0 0.1 0l4.4 1.2 5.7-5.8-11.3-6.2q-0.3-0.2-0.4-0.5 0-0.4 0.2-0.6l2.9-2.9q0.3-0.3 0.7-0.2l14.8 3.6 3.6-3.6q1.7-1.7 3.8-2.4t3.3 0.3z"></path></g>
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

export default IconPlane

