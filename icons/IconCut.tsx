

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

class IconCut extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--cut`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m21.4 20q0.6 0 1 0.4t0.5 1-0.5 1-1 0.5-1-0.5-0.4-1 0.4-1 1-0.4z m6.7 1.4l11.3 8.9q0.7 0.5 0.6 1.3-0.1 0.7-0.8 1.1l-2.8 1.4q-0.3 0.2-0.7 0.2-0.4 0-0.7-0.2l-15.4-8.6-2.4 1.4q-0.2 0.1-0.3 0.2 0.3 1 0.2 2.1-0.1 1.7-1.2 3.3t-3 2.8q-2.9 1.8-6.2 1.8-3 0-4.9-1.7-2-1.9-1.8-4.6 0.2-1.7 1.3-3.3t2.9-2.8q2.9-1.8 6.2-1.8 1.9 0 3.4 0.6 0.2-0.2 0.5-0.4l2.7-1.7-2.7-1.6q-0.3-0.2-0.5-0.5-1.5 0.7-3.4 0.7-3.3 0-6.2-1.9-1.8-1.2-2.9-2.7t-1.3-3.3q-0.1-1.3 0.4-2.5t1.4-2.1q1.9-1.8 4.9-1.8 3.3 0 6.2 1.9 1.9 1.2 3 2.7t1.2 3.3q0.1 1.1-0.2 2.2 0.1 0 0.3 0.1l2.4 1.5 15.4-8.6q0.3-0.2 0.7-0.2 0.4 0 0.7 0.1l2.8 1.5q0.7 0.3 0.8 1.1 0.1 0.8-0.6 1.3z m-15.2-5.8q1.1-0.9 0.5-2.4t-2.4-2.6q-2-1.3-4.3-1.3-1.6 0-2.5 0.8-1 0.9-0.4 2.4t2.3 2.6q2.1 1.3 4.3 1.3 1.7 0 2.5-0.8z m-1.9 16.7q1.8-1.2 2.4-2.7t-0.5-2.4q-0.8-0.8-2.5-0.8-2.2 0-4.3 1.3-1.8 1.2-2.3 2.7t0.4 2.4q0.9 0.8 2.5 0.8 2.3 0 4.3-1.3z m4-13.7l2.1 1.3v-0.3q0-0.8 0.8-1.2l0.3-0.2-1.8-1.1-0.6 0.6q0 0.1-0.2 0.3t-0.2 0.2q-0.1 0.1-0.1 0.1t-0.1 0.1z m5 5l2.1 0.7 16.5-12.9-2.9-1.4-17.1 9.6v2.5l-3.6 2.2 0.2 0.2q0 0 0.2 0.1 0 0.1 0.2 0.3t0.3 0.2l0.5 0.6z m15.7 9.3l2.9-1.5-11.6-9.1-4 3.1q0 0.1-0.3 0.2z"></path></g>
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

export default IconCut
