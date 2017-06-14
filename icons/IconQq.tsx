

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

class IconQq extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--qq ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m6 18q-0.2-0.4-0.2-1.2 0-0.4 0.3-1.1t0.5-1q0-0.5 0.2-1.2t0.5-0.9q0-3.1 2.1-6.5t4.8-4.6q3.1-1.5 7.2-1.5 3 0 6 1.2 1.1 0.5 2 1.1t1.6 1.2 1.2 1.6 1 1.6 0.7 1.9 0.5 2 0.5 2.2l0.1 0.1q1.2 1.9 1.2 3.4 0 0.3-0.2 0.8t-0.2 0.9q0 0 0 0.1t0.1 0.1 0 0.1q1.8 2.5 2.7 4.7t1 4.7q0 1-0.4 2.2t-1.3 1.3q-0.2 0-0.4-0.2t-0.4-0.4-0.5-0.5-0.3-0.6-0.3-0.6-0.2-0.4q0 0-0.1 0l-0.1 0.1q-1.3 3.4-2.9 5 0.4 0.4 1.3 0.8t1.6 0.9 0.8 1.5q-0.1 0.1-0.1 0.3t-0.2 0.4q-1.4 2.2-6.7 2.2-1.2 0-2.5-0.2t-2.2-0.4-2.3-0.7q-0.3-0.1-0.5-0.2-0.3-0.1-1.1-0.1t-0.8 0q-1 1-2.9 1.5t-3.8 0.4q-0.7 0-1.5 0t-2.1-0.2-2.2-0.5-1.7-0.9-0.7-1.4q0-0.9 0.2-1.3t0.9-1.1q0.3-0.1 0.9-0.3t1.1-0.3q0.1 0 0.4 0 0-0.1 0-0.1l0-0.1q-1.1-0.2-2.5-2.3t-1.6-3.5l-0.1-0.1q-0.1 0-0.3 0.4-0.4 1-1.2 1.7t-1.7 0.8h0q-0.1 0-0.2-0.1t-0.1-0.1q-0.5-1.2-0.5-2.2 0-6.1 5.6-10.4z"></path></g>
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

export default IconQq

