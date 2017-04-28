

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

class IconArrowsAlt extends React.Component<Props, State> {

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
                    <g><path d="m31.6 12.1l-7.9 7.9 7.9 7.9 3.3-3.2q0.6-0.7 1.5-0.3 0.9 0.4 0.9 1.3v10q0 0.6-0.4 1t-1 0.4h-10q-1 0-1.4-0.9-0.3-0.8 0.4-1.5l3.2-3.2-8-7.9-7.9 7.9 3.2 3.2q0.7 0.7 0.3 1.5-0.3 0.9-1.3 0.9h-10q-0.5 0-1-0.4t-0.4-1v-10q0-0.9 0.9-1.3 0.9-0.4 1.5 0.3l3.2 3.2 8-7.9-7.9-7.9-3.3 3.2q-0.4 0.4-1 0.4-0.2 0-0.5-0.1-0.9-0.4-0.9-1.3v-10q0-0.6 0.4-1t1-0.4h10q1 0 1.3 0.9 0.4 0.8-0.3 1.5l-3.2 3.2 7.9 7.9 8-7.9-3.2-3.2q-0.7-0.7-0.4-1.5 0.4-0.9 1.4-0.9h10q0.5 0 1 0.4t0.4 1v10q0 0.9-0.9 1.3-0.3 0.1-0.5 0.1-0.6 0-1-0.4z"></path></g>
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

export default IconArrowsAlt

