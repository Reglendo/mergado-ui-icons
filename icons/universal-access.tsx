

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

class IconUniversalAccess extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--universal-access`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m30.7 14.7q-0.2-0.6-0.7-0.9t-1-0.2q-5.9 1.4-9 1.4t-8.9-1.4q-0.6-0.1-1.1 0.2t-0.7 0.9 0.2 1 0.9 0.7q4.3 1 6.7 1.3 0 3.5-0.3 6t-0.6 3.5-0.9 2.5l-0.2 0.5q-0.2 0.6 0 1.1t0.8 0.8q0.2 0 0.5 0 1 0 1.4-0.9l0.1-0.4q1.2-3.1 1.6-5.8h1q0.3 2.7 1.6 5.8l0.1 0.4q0.4 0.9 1.4 0.9 0.3 0 0.5 0 0.5-0.3 0.8-0.8t0-1.1l-0.2-0.5q-0.6-1.6-0.9-2.5t-0.6-3.5-0.3-6q2.4-0.3 6.7-1.3 0.6-0.1 0.9-0.7t0.2-1z m-7.8-3.3q0-1.2-0.9-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m12.8 8.6q0 3.2-1.2 6.1t-3.4 5-5 3.4-6.1 1.2-6.1-1.2-5-3.4-3.4-5-1.2-6.1 1.2-6.1 3.4-5 5-3.4 6.1-1.2 6.1 1.2 5 3.4 3.4 5 1.2 6.1z m-15.7-17.1q-3.5 0-6.7 1.3t-5.4 3.7-3.7 5.4-1.3 6.7 1.3 6.7 3.7 5.4 5.4 3.7 6.7 1.3 6.7-1.3 5.4-3.7 3.7-5.4 1.3-6.7-1.3-6.7-3.7-5.4-5.4-3.7-6.7-1.3z m20 17.1q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6 7.8 1.6 6.4 4.2 4.2 6.4 1.6 7.8z"></path></g>
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

export default IconUniversalAccess

