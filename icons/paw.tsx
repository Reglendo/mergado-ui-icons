

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

class IconPaw extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--paw`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m18.9 10.5q0 1.4-0.4 2.6t-1.4 2-2.4 0.9q-1.7 0-3-1.3t-2.1-3-0.7-3.4q0-1.3 0.5-2.5t1.4-2.1 2.3-0.8q1.7 0 3.1 1.2t2 3.1 0.7 3.3z m-7.6 10.8q0 1.8-1 3.1t-2.6 1.3q-1.7 0-3.2-1.2t-2.2-3-0.8-3.4q0-1.8 0.9-3.1t2.7-1.3q1.7 0 3.2 1.2t2.2 3 0.8 3.4z m8.8-0.6q2.6 0 5.7 2.2t5.1 5.3 2 5.7q0 1-0.3 1.7t-1.1 1-1.5 0.4-1.7 0.1q-1.5 0-4.2-1t-4-1q-1.5 0-4.3 1t-4.5 1q-4.1 0-4.1-3.2 0-2 1.3-4.3t3.1-4.3 4.2-3.3 4.3-1.3z m5.3-4.7q-1.4 0-2.3-0.9t-1.4-2-0.5-2.6q0-1.6 0.7-3.3t2-3.1 3.1-1.2q1.4 0 2.4 0.8t1.4 2.1 0.4 2.5q0 1.7-0.7 3.4t-2 3-3.1 1.3z m9.7-2.3q1.7 0 2.6 1.3t0.9 3.1q0 1.7-0.7 3.4t-2.3 3-3.1 1.2q-1.8 0-2.7-1.3t-0.9-3.1q0-1.6 0.7-3.4t2.3-3 3.2-1.2z"></path></g>
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

export default IconPaw

