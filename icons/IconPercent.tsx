

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

class IconPercent extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--percent`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m31.6 28.6q0-1.2-0.9-2t-2-0.9-2 0.9-0.8 2 0.8 2 2 0.8 2-0.8 0.9-2z m-17.2-17.2q0-1.1-0.8-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.8-2z m22.9 17.2q0 3.5-2.5 6t-6.1 2.5-6-2.5-2.6-6 2.6-6.1 6-2.5 6.1 2.5 2.5 6.1z m-2.2-24.3q0 0.4-0.2 0.8l-23.6 31.5q-0.4 0.5-1.2 0.5h-3.5q-0.6 0-1-0.4t-0.5-1q0-0.4 0.3-0.8l23.6-31.5q0.4-0.5 1.1-0.5h3.6q0.6 0 1 0.4t0.4 1z m-15 7.1q0 3.6-2.5 6.1t-6 2.5-6.1-2.5-2.5-6.1 2.5-6 6.1-2.5 6 2.5 2.5 6z"></path></g>
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

export default IconPercent

