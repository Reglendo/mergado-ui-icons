

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
}
export interface State {
}

class IconCoffee extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--coffee ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m36.2 14.4q0-1.7-1.2-2.9t-2.9-1.3h-1.4v8.4h1.4q1.7 0 2.9-1.2t1.2-3z m-36.2 16.8h39q0 2.3-1.6 3.9t-4 1.6h-27.8q-2.3 0-4-1.6t-1.6-3.9z m40.4-16.8q0 3.5-2.4 5.9t-5.9 2.5h-1.4v0.7q0 2-1.5 3.4t-3.4 1.5h-15.3q-2.1 0-3.5-1.5t-1.4-3.4v-16q0-0.6 0.4-1t1-0.4h25.1q3.4 0 5.9 2.4t2.4 5.9z"></path></g>
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

export default IconCoffee

