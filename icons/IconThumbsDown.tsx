

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

class IconThumbsDown extends React.Component<Props, State> {

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
                    <g><path d="m7.7 12.9q0 0.5-0.4 1t-1 0.4q-0.6 0-1-0.4t-0.4-1q0-0.6 0.4-1.1t1-0.4q0.6 0 1 0.4t0.4 1.1z m3.6 11.4v-14.3q0-0.6-0.4-1t-1-0.4h-6.5q-0.6 0-1 0.4t-0.4 1v14.3q0 0.6 0.4 1t1 0.4h6.5q0.5 0 1-0.4t0.4-1z m25.2-3.3q1.2 1.3 1.2 3.3 0 1.7-1.3 3t-3 1.3h-6.2q0.1 0.3 0.2 0.5t0.3 0.5 0.2 0.4q0.4 0.8 0.6 1.3t0.4 1.3 0.2 1.7q0 0.5 0 0.9t-0.1 1-0.2 1.1-0.6 1-0.9 0.9-1.3 0.6-1.9 0.2q-0.5 0-1-0.4-0.4-0.5-0.7-1.1t-0.5-1.2-0.2-1.4q-0.2-0.9-0.3-1.3t-0.4-1.1-0.7-1.1q-0.8-0.7-2.3-2.6-1.1-1.5-2.2-2.7t-1.7-1.4q-0.6 0-1-0.4t-0.4-1v-14.3q0-0.6 0.4-1t1-0.4q0.8-0.1 3.6-1 1.7-0.6 2.7-0.9t2.7-0.6 3.2-0.4h2.9q2.9 0.1 4.4 1.8 1.3 1.5 1.1 4 0.8 0.8 1.2 2.1 0.3 1.4 0 2.6 1 1.4 0.9 3.1 0 0.7-0.3 1.7z"></path></g>
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

export default IconThumbsDown

