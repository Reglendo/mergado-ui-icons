

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

class IconRepeat extends React.Component<Props, State> {

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
                    <g><path d="m37.3 5.7v10q0 0.6-0.4 1t-1 0.4h-10q-1 0-1.4-0.9-0.3-0.8 0.4-1.5l3-3.1q-3.3-3-7.8-3-2.3 0-4.4 0.9t-3.6 2.4-2.5 3.7-0.9 4.4 0.9 4.4 2.5 3.7 3.6 2.4 4.4 0.9q2.7 0 5.1-1.1t4-3.3q0.1-0.2 0.5-0.3 0.3 0 0.5 0.2l3.1 3.1q0.2 0.2 0.2 0.5t-0.2 0.5q-2.4 2.9-5.9 4.5t-7.3 1.6q-3.4 0-6.6-1.3t-5.5-3.7-3.6-5.4-1.4-6.7 1.4-6.7 3.6-5.4 5.5-3.7 6.6-1.3q3.3 0 6.4 1.2t5.5 3.5l2.9-2.9q0.6-0.7 1.5-0.3 0.9 0.4 0.9 1.3z"></path></g>
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

export default IconRepeat

