

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

class IconCny extends React.Component<Props, State> {

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
                    <g><path d="m22 34.3h-3.9q-0.3 0-0.5-0.2t-0.2-0.5v-7.4h-6.4q-0.3 0-0.5-0.2t-0.2-0.5v-2.3q0-0.3 0.2-0.5t0.5-0.2h6.4v-1.9h-6.4q-0.3 0-0.5-0.2t-0.2-0.5v-2.4q0-0.2 0.2-0.5t0.5-0.2h4.8l-7.2-12.9q-0.2-0.3 0-0.7 0.2-0.3 0.6-0.3h4.3q0.5 0 0.7 0.4l4.8 9.4q0.4 0.9 1.2 2.8 0.3-0.5 0.7-1.5t0.6-1.3l4.3-9.4q0.2-0.4 0.6-0.4h4.3q0.4 0 0.6 0.3 0.2 0.3 0 0.7l-7 12.9h4.8q0.3 0 0.5 0.2t0.3 0.5v2.4q0 0.3-0.3 0.5t-0.5 0.2h-6.4v1.9h6.4q0.3 0 0.5 0.2t0.3 0.5v2.3q0 0.3-0.3 0.5t-0.5 0.2h-6.4v7.4q0 0.3-0.2 0.5t-0.5 0.2z"></path></g>
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

export default IconCny

