

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

class IconFeed extends React.Component<Props, State> {

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
                    <g><path d="m13.1 30q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3 3-1.3 3 1.3 1.3 3z m11.4 2.7q0 0.7-0.4 1.1-0.4 0.5-1 0.5h-3q-0.6 0-1-0.4t-0.4-0.9q-0.5-5.1-4.2-8.7t-8.7-4.2q-0.6 0-0.9-0.4t-0.4-1v-3q0-0.6 0.5-1 0.3-0.4 0.9-0.4h0.1q3.6 0.3 6.9 1.8t5.8 4q2.5 2.6 4 5.8t1.8 6.8z m11.4 0.1q0.1 0.6-0.4 1-0.4 0.5-1 0.5h-3.2q-0.6 0-1-0.4t-0.4-1q-0.3-4.8-2.3-9.1t-5.1-7.5-7.5-5.1-9.2-2.3q-0.5 0-0.9-0.5t-0.4-0.9v-3.2q0-0.6 0.4-1 0.5-0.4 1-0.4h0.1q5.8 0.2 11.2 2.6t9.5 6.6q4.2 4.1 6.6 9.5t2.6 11.2z"></path></g>
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

export default IconFeed

