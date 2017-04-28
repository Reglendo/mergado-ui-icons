

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

class IconBackward extends React.Component<Props, State> {

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
                    <g><path d="m36.1 3.1q0.5-0.4 0.8-0.2t0.2 0.7v32.8q0 0.6-0.2 0.7t-0.8-0.2l-15.8-15.9q-0.2-0.2-0.3-0.4v15.8q0 0.6-0.3 0.7t-0.7-0.2l-15.9-15.9q-0.4-0.4-0.4-1t0.4-1l15.9-15.9q0.4-0.4 0.7-0.2t0.3 0.7v15.8q0.1-0.2 0.3-0.4z"></path></g>
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

export default IconBackward

