

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

class IconThumbsDown extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--thumbs-down ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m7.7 12.9q0 0.5-0.4 1t-1 0.4q-0.6 0-1-0.4t-0.4-1q0-0.6 0.4-1.1t1-0.4q0.6 0 1 0.4t0.4 1.1z m3.6 11.4v-14.3q0-0.6-0.4-1t-1-0.4h-6.5q-0.6 0-1 0.4t-0.4 1v14.3q0 0.6 0.4 1t1 0.4h6.5q0.5 0 1-0.4t0.4-1z m25.2-3.3q1.2 1.3 1.2 3.3 0 1.7-1.3 3t-3 1.3h-6.2q0.1 0.3 0.2 0.5t0.3 0.5 0.2 0.4q0.4 0.8 0.6 1.3t0.4 1.3 0.2 1.7q0 0.5 0 0.9t-0.1 1-0.2 1.1-0.6 1-0.9 0.9-1.3 0.6-1.9 0.2q-0.5 0-1-0.4-0.4-0.5-0.7-1.1t-0.5-1.2-0.2-1.4q-0.2-0.9-0.3-1.3t-0.4-1.1-0.7-1.1q-0.8-0.7-2.3-2.6-1.1-1.5-2.2-2.7t-1.7-1.4q-0.6 0-1-0.4t-0.4-1v-14.3q0-0.6 0.4-1t1-0.4q0.8-0.1 3.6-1 1.7-0.6 2.7-0.9t2.7-0.6 3.2-0.4h2.9q2.9 0.1 4.4 1.8 1.3 1.5 1.1 4 0.8 0.8 1.2 2.1 0.3 1.4 0 2.6 1 1.4 0.9 3.1 0 0.7-0.3 1.7z"></path></g>
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

export default IconThumbsDown

