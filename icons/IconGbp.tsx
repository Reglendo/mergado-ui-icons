

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

class IconGbp extends React.Component<Props, State> {

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
                    <g><path d="m31.3 25.4v8.2q0 0.3-0.2 0.5t-0.5 0.2h-21.4q-0.3 0-0.5-0.2t-0.2-0.5v-3.4q0-0.3 0.2-0.5t0.5-0.2h2.2v-8.5h-2.1q-0.4 0-0.6-0.2t-0.2-0.6v-2.9q0-0.3 0.2-0.5t0.6-0.2h2.1v-5q0-3.8 2.7-6.3t7.1-2.4q4.1 0 7.4 2.7 0.2 0.2 0.3 0.5t-0.2 0.5l-2.3 2.8q-0.2 0.3-0.5 0.3-0.3 0.1-0.5-0.1-0.1-0.2-0.6-0.5t-1.5-0.7-2.1-0.4q-1.9 0-3.1 1.1t-1.1 2.7v4.8h6.8q0.3 0 0.5 0.2t0.2 0.5v2.9q0 0.3-0.2 0.5t-0.5 0.3h-6.8v8.4h9.2v-4q0-0.3 0.2-0.5t0.5-0.2h3.7q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconGbp

