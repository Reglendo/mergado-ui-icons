

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

class IconPlus extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--plus ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.9 16.4v4.3q0 0.9-0.6 1.5t-1.5 0.7h-9.3v9.2q0 0.9-0.6 1.6t-1.5 0.6h-4.3q-0.9 0-1.5-0.6t-0.7-1.6v-9.2h-9.3q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h9.3v-9.3q0-0.9 0.7-1.5t1.5-0.6h4.3q0.9 0 1.5 0.6t0.6 1.5v9.3h9.3q0.9 0 1.5 0.6t0.6 1.5z"></path></g>
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

export default IconPlus

