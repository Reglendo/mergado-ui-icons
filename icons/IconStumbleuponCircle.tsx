

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

class IconStumbleuponCircle extends React.Component<Props, State> {

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
                    <g><path d="m22.3 18.7l2-0.6v-1.4q0-1.7-1.3-3t-3-1.2-3.1 1.2-1.3 3v6.3q0 0.5-0.3 0.8t-0.8 0.3-0.7-0.3-0.3-0.8v-2.6h-3.4v2.7q0 1.8 1.3 3.1t3.1 1.3q1.8 0 3.1-1.3t1.3-3.1v-6.2q0-0.4 0.3-0.7t0.8-0.4q0.4 0 0.7 0.4t0.3 0.7v1.2z m7.5 4.4v-2.7h-3.4v2.8q0 0.4-0.3 0.7t-0.7 0.3q-0.5 0-0.8-0.3t-0.3-0.7v-2.8l-2 0.6-1.3-0.6v2.7q0 1.8 1.3 3.1t3.1 1.3 3.1-1.3 1.3-3.1z m7.5-3.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconStumbleuponCircle

