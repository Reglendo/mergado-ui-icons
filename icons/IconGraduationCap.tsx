

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

class IconGraduationCap extends React.Component<Props, State> {

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
                    <g><path d="m31.1 18.9l0.3 5.6q0 1.2-1.5 2.2t-4.1 1.7-5.6 0.6-5.7-0.6-4.1-1.7-1.4-2.2l0.3-5.6 10 3.2q0.4 0.1 0.9 0.1t0.8-0.1z m9.2-5.6q0 0.4-0.3 0.5l-19.7 6.2q0 0-0.1 0t-0.2 0l-11.4-3.6q-0.8 0.6-1.3 1.9t-0.6 3.2q1.1 0.6 1.1 1.9 0 1.2-1 1.8l1 7.6q0.1 0.3-0.1 0.5-0.2 0.1-0.4 0.1h-3.4q-0.2 0-0.4-0.1-0.2-0.2-0.1-0.5l1-7.6q-1-0.6-1-1.8 0-1.3 1.1-2 0.2-3.6 1.7-5.8l-5.8-1.8q-0.4-0.1-0.4-0.5t0.4-0.6l19.6-6.1q0.1 0 0.2 0t0.1 0l19.6 6.1q0.4 0.2 0.4 0.6z"></path></g>
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

export default IconGraduationCap

