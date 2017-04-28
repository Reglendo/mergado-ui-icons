

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

class IconClone extends React.Component<Props, State> {

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
                    <g><path d="m37.1 36.4v-24.3q0-0.2-0.2-0.5t-0.5-0.2h-24.3q-0.2 0-0.5 0.2t-0.2 0.5v24.3q0 0.3 0.2 0.5t0.5 0.2h24.3q0.3 0 0.5-0.2t0.2-0.5z m2.9-24.3v24.3q0 1.5-1 2.6t-2.6 1h-24.3q-1.4 0-2.5-1t-1-2.6v-24.3q0-1.4 1-2.5t2.5-1h24.3q1.5 0 2.6 1t1 2.5z m-8.6-8.5v3.5h-2.8v-3.5q0-0.3-0.2-0.5t-0.5-0.2h-24.3q-0.3 0-0.5 0.2t-0.2 0.5v24.3q0 0.2 0.2 0.5t0.5 0.2h3.5v2.8h-3.5q-1.5 0-2.6-1t-1-2.5v-24.3q0-1.5 1.1-2.5t2.5-1.1h24.3q1.4 0 2.5 1.1t1 2.5z"></path></g>
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

export default IconClone

