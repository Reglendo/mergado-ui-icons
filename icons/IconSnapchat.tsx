

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

class IconSnapchat extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--snapchat ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m31.6 25.6q0-0.5-0.5-0.6-1.5-0.3-2.7-1.3t-1.8-2.4q-0.1-0.4-0.1-0.6 0-0.3 0.4-0.5t1-0.4 0.9-0.5 0.5-0.8q0-0.4-0.4-0.7t-0.9-0.3q-0.3 0-0.7 0.2t-0.7 0.2q-0.1 0-0.3-0.1 0.1-2.1 0.1-2.5 0-1.8-0.3-2.6-0.8-1.7-2.3-2.7t-3.4-0.9q-4.5 0-6.2 3.6-0.4 0.8-0.4 2.6 0 0.4 0.2 2.5-0.1 0.1-0.4 0.1-0.2 0-0.7-0.2t-0.6-0.2q-0.5 0-0.9 0.3t-0.4 0.7q0 0.5 0.4 0.8t1 0.5 1 0.4 0.4 0.5q0 0.2-0.2 0.6-1.4 3.1-4.4 3.7-0.5 0.1-0.5 0.6 0 1.1 3.1 1.5 0 0.2 0.1 0.6t0.3 0.7 0.5 0.2q0.3 0 0.8-0.1t0.9-0.1q0.8 0 1.5 0.4t1.2 0.7 1.3 0.7 1.7 0.3q1 0 1.8-0.3t1.3-0.7 1.2-0.7 1.5-0.4q0.3 0 0.8 0.1t0.9 0.1q0.3 0 0.5-0.2t0.3-0.7 0.1-0.6q3-0.4 3-1.5z m5.7-5.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconSnapchat

