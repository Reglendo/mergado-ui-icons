

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

class IconBattery4 extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--battery-4 ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m33.6 13.3v13.4h-29.1v-13.4h29.1z m2.3 10.1h2.2v-6.8h-2.2v-5q0-0.2-0.2-0.4t-0.4-0.2h-32.5q-0.2 0-0.4 0.2t-0.2 0.4v16.8q0 0.2 0.2 0.4t0.4 0.2h32.5q0.2 0 0.4-0.2t0.2-0.4v-5z m4.4-6.8v6.8q0 0.9-0.6 1.5t-1.6 0.7v2.8q0 1.2-0.8 2t-2 0.8h-32.5q-1.2 0-2-0.8t-0.8-2v-16.8q0-1.2 0.8-2t2-0.8h32.5q1.2 0 2 0.8t0.8 2v2.8q0.9 0 1.6 0.7t0.6 1.5z"></path></g>
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

export default IconBattery4

