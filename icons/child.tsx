

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

class IconChild extends React.Component<Props, State> {

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
                    <g><path d="m32 12.2l-6.5 6.6v18.3q0 1.1-0.7 1.8t-1.8 0.7-1.8-0.7-0.7-1.8v-8.5h-1.4v8.5q0 1.1-0.8 1.8t-1.7 0.7-1.8-0.7-0.7-1.8v-18.3l-6.5-6.6q-0.7-0.6-0.7-1.5t0.7-1.5 1.5-0.6 1.5 0.6l5.1 5.1h8.2l5.1-5.1q0.6-0.6 1.5-0.6t1.5 0.6 0.6 1.5-0.6 1.5z m-7.2-3.6q0 2-1.5 3.5t-3.5 1.5-3.6-1.5-1.4-3.5 1.4-3.6 3.6-1.4 3.5 1.4 1.5 3.6z"></path></g>
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

export default IconChild

