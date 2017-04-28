

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

class IconHeartbeat extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--heartbeat`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m28.6 22.9h6.8q-0.1 0.1-0.2 0.2t-0.2 0.2l-0.1 0-13.9 13.4q-0.4 0.4-1 0.4t-1-0.4l-13.9-13.4q-0.1 0-0.5-0.4h8.3q0.4 0 0.8-0.3t0.5-0.8l1.6-6.3 4.2 14.9q0.2 0.4 0.6 0.7t0.8 0.3q0.5 0 0.9-0.3t0.5-0.7l3.2-10.8 1.3 2.5q0.4 0.8 1.3 0.8z m11.4-9.6q0 3.2-2.3 6.7h-8.2l-2.5-4.9q-0.2-0.4-0.6-0.6t-0.8-0.2q-1 0.1-1.2 1l-2.9 9.6-4.4-15.3q-0.1-0.4-0.5-0.7t-0.9-0.3-0.9 0.3-0.5 0.7l-2.6 10.4h-9.4q-2.3-3.5-2.3-6.7 0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8 0.4t2.7 1.3 2.1 1.6 1.7 1.5q0.8-0.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-0.4q5 0 7.9 2.7t2.8 7.7z"></path></g>
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

export default IconHeartbeat

