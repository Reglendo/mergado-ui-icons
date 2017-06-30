

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
}
export interface State {
}

class IconLowVision extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--low-vision ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m7.5 30.3q-0.1 0-0.2-0.1-1.9-1.2-3.7-3.2t-3.1-4q-0.5-0.7-0.5-1.6 0-0.2 0-0.4t0.1-0.4 0.2-0.4 0.2-0.4 0.2-0.3 0.2-0.4 0.3-0.3 0.2-0.3q4.2-5.6 10.1-8.2-2.4-4.4-2.4-4.7 0-0.4 0.4-0.6 2.6-1.5 2.8-1.5 0.4 0 0.6 0.4l2.8 5.1q2.1-0.4 4.3-0.4 5.9 0 11.1 3t8.5 8.3q0.4 0.7 0.4 1.5t-0.4 1.6q-2.1 3.1-4.9 5.6t-6.2 3.9q2.4 4.5 2.4 4.8 0 0.4-0.4 0.6-2.6 1.4-2.8 1.4-0.4 0-0.6-0.3l-2.8-5.1-1.4-2.7-10-18.3 0.2-0.2q-1.3 0.6-2.2 1.1 0.1 0.1 2.8 5.2t5.5 10 2.6 5q0 0.2-0.2 0.2-0.3 0.1-1.6 0.1-1.3 0-1.3-0.2l-10.2-18.7q-0.9 0.6-1.8 1.5 0.5 0.9 4.7 8.8t4.3 7.9q0 0.2-0.3 0.2-0.3 0-1.8-0.5t-1.6-0.6l-2.4-4.4-5-9.2q-1 1.1-1.7 2.3 0 0.1 0.4 0.6t0.5 0.7l3.9 7.3q0 0.3-0.2 0.3z m18.5-2.3l1.1 2q6.1-2.5 10-8.6-4-6.2-10.2-8.7 1.5 1.5 2.3 3.4t0.8 3.9q0 2.4-1.1 4.5t-2.9 3.5z m-7.1-13.7q0 0.4 0.3 0.7t0.8 0.4q1.9 0 3.3 1.3t1.3 3.3q0 0.4 0.4 0.8t0.7 0.3 0.8-0.3 0.3-0.8q0-2.8-2-4.8t-4.8-2q-0.4 0-0.8 0.3t-0.3 0.8z m8.2-1.5l-0.2-0.1 0.2 0.2z"></path></g>
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

export default IconLowVision

