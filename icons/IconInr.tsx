

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

class IconInr extends React.Component<Props, State> {

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
                    <g><path d="m30 10.5v2.3q0 0.3-0.2 0.5t-0.5 0.2h-3.7q-0.5 3.2-2.9 5.2t-6.2 2.5q3.8 3.9 10.3 11.9 0.3 0.4 0.1 0.8-0.2 0.4-0.7 0.4h-4.3q-0.4 0-0.6-0.3-6.8-8.2-11.1-12.7-0.2-0.2-0.2-0.5v-2.9q0-0.2 0.2-0.5t0.5-0.2h2.5q3 0 4.8-0.9t2.2-2.8h-9.5q-0.3 0-0.5-0.2t-0.2-0.5v-2.3q0-0.3 0.2-0.5t0.5-0.2h9.2q-1.2-2.5-6-2.5h-3.2q-0.3 0-0.5-0.3t-0.2-0.5v-2.9q0-0.3 0.2-0.5t0.5-0.2h18.6q0.3 0 0.5 0.2t0.2 0.5v2.2q0 0.4-0.2 0.6t-0.5 0.2h-5.2q1 1.3 1.4 3.2h3.8q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconInr

