

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

class IconPlusSquare extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--plus-square ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m31.6 21.4v-2.8q0-0.6-0.5-1t-1-0.5h-7.1v-7.1q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v7.1h-7.2q-0.5 0-1 0.5t-0.4 1v2.8q0 0.6 0.4 1t1 0.5h7.2v7.1q0 0.6 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-7.1h7.1q0.6 0 1-0.5t0.5-1z m5.7-12.1v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconPlusSquare

