

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

class IconShield extends React.Component<Props, State> {

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
                    <g><path d="m29.8 21.4v-14.3h-10v25.4q2.6-1.4 4.7-3 5.3-4.1 5.3-8.1z m4.3-17.1v17.1q0 2-0.8 3.8t-1.8 3.4-2.7 2.8-2.8 2.3-2.7 1.8-2 1.1-0.9 0.4q-0.3 0.1-0.6 0.1t-0.6-0.1q-0.4-0.2-0.9-0.4t-2-1.1-2.7-1.8-2.9-2.3-2.6-2.8-1.9-3.4-0.7-3.8v-17.1q0-0.6 0.4-1t1-0.4h25.7q0.6 0 1 0.4t0.5 1z"></path></g>
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

export default IconShield

