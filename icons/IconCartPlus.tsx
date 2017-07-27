

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

class IconCartPlus extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--cart-plus ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m28.6 15.7q0-0.6-0.4-1t-1-0.4h-2.8v-2.9q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1v2.9h-2.9q-0.5 0-1 0.4t-0.4 1 0.4 1 1 0.4h2.9v2.9q0 0.6 0.4 1t1 0.4 1-0.4 0.5-1v-2.9h2.8q0.6 0 1-0.4t0.4-1z m-12.8 18.6q0 1.2-0.9 2t-2 0.8-2-0.8-0.8-2 0.8-2 2-0.9 2 0.9 0.9 2z m20 0q0 1.2-0.9 2t-2 0.8-2-0.8-0.8-2 0.8-2 2-0.9 2 0.9 0.9 2z m2.8-24.3v11.4q0 0.6-0.3 1t-0.9 0.5l-23.3 2.7q0 0.1 0.1 0.5t0.1 0.6 0.1 0.4q0 0.4-0.6 1.5h20.6q0.5 0 1 0.4t0.4 1-0.4 1-1 0.4h-22.9q-0.6 0-1-0.4t-0.4-1q0-0.3 0.2-0.9t0.7-1.3 0.4-0.9l-3.9-18.3h-4.6q-0.6 0-1-0.5t-0.4-1 0.4-1 1-0.4h5.7q0.4 0 0.7 0.2t0.4 0.3 0.3 0.6 0.2 0.5 0.1 0.7 0.1 0.6h26.8q0.6 0 1 0.4t0.4 1z"></path></g>
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

export default IconCartPlus

