

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

class IconTag extends React.Component<Props, State> {

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
                    <g><path d="m13 10q0-1.2-0.8-2t-2.1-0.9-2 0.9-0.8 2 0.8 2 2 0.9 2.1-0.9 0.8-2z m23.8 12.9q0 1.1-0.8 2l-11 10.9q-0.8 0.9-2 0.9-1.2 0-2-0.9l-16-15.9q-0.8-0.9-1.4-2.3t-0.6-2.6v-9.3q0-1.1 0.8-2t2.1-0.8h9.2q1.2 0 2.7 0.5t2.2 1.5l16 15.9q0.8 0.9 0.8 2.1z"></path></g>
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

export default IconTag

