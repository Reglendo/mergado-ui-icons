

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

class IconGavel extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--gavel ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39.5 34.3q0 1.2-0.8 2l-2.4 2.4q-0.9 0.8-2 0.8-1.2 0-2-0.8l-8.1-8.1q-0.9-0.8-0.9-2 0-1.2 1-2.2l-5.7-5.7-2.8 2.8q-0.4 0.3-0.8 0.3t-0.8-0.3q0.1 0.1 0.3 0.3t0.3 0.3 0.2 0.2 0.2 0.3 0.2 0.3 0.1 0.4 0 0.4q0 0.9-0.6 1.5-0.1 0.1-0.4 0.4t-0.4 0.5-0.4 0.4-0.5 0.3-0.5 0.2-0.6 0.1q-0.8 0-1.5-0.6l-9.1-9.1q-0.6-0.6-0.6-1.5 0-0.3 0.1-0.6t0.2-0.5 0.3-0.5 0.4-0.4 0.5-0.4 0.4-0.4q0.6-0.6 1.5-0.6 0.2 0 0.4 0t0.4 0.1 0.3 0.2 0.3 0.2 0.2 0.2 0.3 0.3 0.3 0.3q-0.3-0.4-0.3-0.8t0.3-0.8l7.7-7.7q0.4-0.3 0.8-0.3t0.8 0.3q-0.1-0.1-0.3-0.3t-0.3-0.3-0.2-0.2-0.2-0.3-0.2-0.3-0.1-0.4 0-0.4q0-0.9 0.6-1.5 0.1-0.1 0.4-0.4t0.4-0.5 0.4-0.4 0.5-0.3 0.5-0.2 0.6-0.1q0.8 0 1.5 0.6l9.1 9.1q0.6 0.6 0.6 1.5 0 0.3-0.1 0.6t-0.2 0.5-0.3 0.5-0.4 0.4-0.5 0.4-0.4 0.4q-0.6 0.6-1.5 0.6-0.2 0-0.4 0t-0.4-0.1-0.3-0.2-0.3-0.2-0.2-0.2-0.3-0.3-0.3-0.3q0.3 0.4 0.3 0.8t-0.3 0.8l-2.8 2.8 5.7 5.7q1-1 2.2-1 1.1 0 2 0.9l8.1 8.1q0.8 0.8 0.8 2z"></path></g>
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

export default IconGavel

