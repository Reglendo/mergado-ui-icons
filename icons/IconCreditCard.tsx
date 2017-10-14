

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
    color?: string
    textFirst?: boolean
}
export interface State {
}

class IconCreditCard extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
    }

    render() {
        let className = `muk-icon ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                {this.props.text && this.props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={this.props.color}
                     stroke={this.props.color}
                     strokeWidth={0}
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m36.5 4.1q1.4 0 2.4 0.9t1 2.4v25.2q0 1.4-1 2.4t-2.4 0.9h-33.2q-1.3 0-2.3-0.9t-1-2.4v-25.2q0-1.4 1-2.4t2.3-0.9h33.2z m-33.2 2.6q-0.2 0-0.4 0.2t-0.2 0.5v4.6h34.5v-4.6q0-0.3-0.2-0.5t-0.5-0.2h-33.2z m33.2 26.6q0.3 0 0.5-0.2t0.2-0.5v-12.6h-34.5v12.6q0 0.3 0.2 0.5t0.4 0.2h33.2z m-31.2-2.7v-2.6h5.3v2.6h-5.3z m8 0v-2.6h8v2.6h-8z"></path></g>
                </svg>
                {this.props.text && !this.props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
            </span>
        )
    }
}

export default IconCreditCard

