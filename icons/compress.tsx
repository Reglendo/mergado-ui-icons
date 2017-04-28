

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

class IconCompress extends React.Component<Props, State> {

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
                    <g><path d="m20.1 21.4v10q0 0.6-0.4 1t-1 0.5-1-0.5l-3.2-3.2-7.4 7.4q-0.2 0.3-0.5 0.3t-0.5-0.3l-2.6-2.5q-0.2-0.2-0.2-0.5t0.2-0.5l7.4-7.5-3.2-3.2q-0.4-0.4-0.4-1t0.4-1 1-0.4h10q0.6 0 1 0.4t0.4 1z m16.9-15q0 0.3-0.2 0.5l-7.4 7.5 3.2 3.2q0.4 0.4 0.4 1t-0.4 1-1 0.4h-10q-0.6 0-1-0.4t-0.5-1v-10q0-0.6 0.5-1t1-0.5 1 0.5l3.2 3.2 7.4-7.4q0.2-0.3 0.5-0.3t0.5 0.3l2.6 2.5q0.2 0.2 0.2 0.5z"></path></g>
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

export default IconCompress

