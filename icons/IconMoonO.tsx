

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

class IconMoonO extends React.Component<Props, State> {

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
                    <g><path d="M31.7 29.1q-1.2.2-2.5.2-4 0-7.5-2t-5.5-5.5-2-7.5q0-4.3 2.3-8-4.5 1.4-7.3 5.1T6.4 20q0 2.9 1.1 5.5t3 4.6 4.6 3 5.5 1.2q3.3 0 6.1-1.4t5-3.8zm4.5-1.9q-2.1 4.5-6.3 7.2t-9.3 2.7q-3.4 0-6.6-1.3t-5.5-3.7-3.6-5.4T3.5 20q0-3.4 1.3-6.5t3.5-5.4 5.2-3.7T20 2.9q1-.1 1.4.8.4 1-.4 1.7-1.9 1.7-2.9 4t-1 4.9q0 3.3 1.6 6.1t4.4 4.4 6.1 1.6q2.6 0 5.1-1.1.9-.4 1.6.3.3.3.4.7t-.1.9z"></path></g>
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

export default IconMoonO

