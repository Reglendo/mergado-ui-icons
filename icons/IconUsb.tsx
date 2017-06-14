

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

class IconUsb extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--usb ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m40.1 18.4q0.2 0.1 0.2 0.5t-0.2 0.5l-5.6 3.3q-0.2 0.1-0.3 0.1-0.2 0-0.3-0.1-0.3-0.1-0.3-0.5v-2.2h-15q0.6 1 1.4 2.9 0.3 0.6 0.5 1t0.4 0.8 0.5 0.8 0.4 0.6 0.6 0.5 0.6 0.1h1.7v-1.7q0-0.2 0.1-0.4t0.4-0.1h5.6q0.3 0 0.4 0.1t0.2 0.4v5.6q0 0.3-0.2 0.4t-0.4 0.2h-5.6q-0.2 0-0.4-0.2t-0.1-0.4v-1.6h-1.7q-0.6 0-1.1-0.2t-0.9-0.4-0.8-0.7-0.6-0.8-0.6-1-0.5-1-0.5-1.1q-0.4-0.9-0.6-1.4t-0.7-1.2-0.8-0.9-0.8-0.3h-6.3q-0.4 1.5-1.6 2.4t-2.7 1q-1.9 0-3.2-1.3t-1.3-3.2 1.3-3.2 3.2-1.3q1.5 0 2.7 0.9t1.6 2.5h1.8q0.5 0 0.9-0.3t0.7-1 0.7-1.1 0.6-1.4q0.3-0.8 0.5-1.1t0.5-1 0.6-1 0.6-0.8 0.8-0.7 0.9-0.4 1.1-0.2h1.9q0.3-1 1.2-1.6t1.9-0.6q1.4 0 2.4 0.9t1 2.4-1 2.4-2.4 1q-1.1 0-1.9-0.6t-1.2-1.7h-1.9q-0.3 0-0.6 0.2t-0.5 0.4-0.5 0.6-0.5 0.9-0.4 0.8-0.4 1q-0.8 1.8-1.5 2.9h19.5v-2.3q0-0.3 0.3-0.5t0.6 0z"></path></g>
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

export default IconUsb

