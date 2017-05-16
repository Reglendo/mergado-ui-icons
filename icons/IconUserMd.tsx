

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

class IconUserMd extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--user-md`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m13.1 30q0 0.6-0.5 1t-1 0.4-1-0.4-0.4-1 0.4-1 1-0.4 1 0.4 0.5 1z m22.8 1.4q0 2.7-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.6 0.1-3t0.6-3 1-3 1.8-2.3 2.7-1.4q-0.5 1.2-0.5 2.7v4.6q-1.3 0.4-2.1 1.5t-0.7 2.5q0 1.8 1.2 3t3 1.3 3.1-1.3 1.2-3q0-1.4-0.8-2.5t-2-1.5v-4.6q0-1.4 0.5-2 3 2.3 6.6 2.3t6.6-2.3q0.6 0.6 0.6 2v1.5q-2.4 0-4.1 1.6t-1.7 4.1v2q-0.7 0.6-0.7 1.5 0 0.9 0.7 1.6t1.5 0.6 1.5-0.6 0.6-1.6q0-0.9-0.7-1.5v-2q0-1.2 0.9-2t2-0.9 2 0.9 0.8 2v2q-0.7 0.6-0.7 1.5 0 0.9 0.6 1.6t1.5 0.6 1.6-0.6 0.6-1.6q0-0.9-0.7-1.5v-2q0-1.5-0.8-2.9t-2.1-2.1q0-0.2 0-0.9t0-1.1 0-0.9-0.2-1.1-0.3-0.8q1.5 0.3 2.7 1.3t1.8 2.3 1.1 3 0.5 3 0.1 3z m-7.1-20q0 3.6-2.5 6.1t-6.1 2.5-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z"></path></g>
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

export default IconUserMd
