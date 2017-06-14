

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

class IconShoppingBasket extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--shopping-basket ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m37.3 17.5q1 0 1.7 0.7t0.8 1.8-0.8 1.8-1.7 0.7h-0.3l-2.3 12.8q-0.1 0.9-0.8 1.5t-1.6 0.6h-24.8q-0.9 0-1.6-0.6t-0.9-1.5l-2.2-12.8h-0.3q-1 0-1.8-0.7t-0.7-1.8 0.7-1.8 1.8-0.7h34.8z m-27.9 15.5q0.5 0 0.9-0.4t0.3-0.9l-0.7-8.1q0-0.5-0.4-0.8t-0.9-0.3-0.8 0.4-0.3 0.9l0.6 8.1q0 0.5 0.4 0.8t0.8 0.3h0.1z m8-1.2v-8.1q0-0.5-0.4-0.8t-0.9-0.4-0.8 0.4-0.4 0.8v8.1q0 0.5 0.4 0.9t0.8 0.3 0.9-0.3 0.4-0.9z m7.4 0v-8.1q0-0.5-0.3-0.8t-0.9-0.4-0.9 0.4-0.3 0.8v8.1q0 0.5 0.3 0.9t0.9 0.3 0.9-0.3 0.3-0.9z m6.9 0.1l0.6-8.1q0-0.5-0.3-0.9t-0.8-0.4-1 0.3-0.4 0.8l-0.6 8.1q0 0.5 0.3 0.9t0.8 0.4h0.1q0.5 0 0.9-0.3t0.4-0.8z m-22.5-23.6l-1.8 8h-2.5l1.9-8.6q0.4-1.7 1.8-2.8t3.1-1.1h3.2q0-0.5 0.4-0.8t0.8-0.4h7.5q0.5 0 0.9 0.4t0.3 0.9h3.3q1.7 0 3.1 1t1.7 2.8l2 8.6h-2.6l-1.8-8q-0.2-0.9-0.9-1.4t-1.5-0.6h-3.3q0 0.5-0.3 0.9t-0.9 0.4h-7.5q-0.5 0-0.8-0.4t-0.4-0.9h-3.2q-0.9 0-1.6 0.6t-0.9 1.4z"></path></g>
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

export default IconShoppingBasket

