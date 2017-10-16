

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
    className?: string
}
export interface State {
}

class IconScribd extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
    }

    render() {
        let className = `muk-icon ${this.name}--scribd ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M36.5 34.6q0 2-1.4 3.4t-3.4 1.4-3.5-1.4-1.4-3.4q0-2 1.4-3.4t3.5-1.5 3.4 1.5 1.4 3.4zm-5.2-6.3q-2.6.3-4.3 2.3t-1.7 4.6q0 1.6.7 3.1-3.3 1.7-8.5 1.7-2.4 0-4.5-.5t-3.4-1.2-2.4-1.7-1.7-1.9-1-1.8-.6-1.5-.1-.9q0-.4.1-1t.4-1.2.8-1.3 1.5-1 2.1-.4 2.1.4 1.4.9.8 1.2.4 1.1 0 .8q0 .7-.5 1.8.7.6 1.9.9t2 .4h.9q2.6 0 4.3-1.1t1.6-3q0-.6-.2-1.1t-.7-1-1.1-.9-1.6-1-2.1-1-2.7-1.3l-.9-.4Q11.7 21 10.1 20t-2.7-2.3-1.6-2.8-.5-3.6q0-1.7.5-3.3t1.4-3.1 2.5-2.5T13.5.6t4.9-.6q2.7 0 4.9.6T27 2.1t2.4 2.1 1.5 2.3.4 2.3q0 1.1-.4 1.9t-.8 1.3-1.1.8-1 .4-.9.1h-.9l-.9-.1-1-.3-.9-.6-.8-1.1-.5-1.5-.3-2.2q-.3-.4-1.3-.6t-1.8-.2h-.8q-1.5 0-2.6.7t-1.6 1.5-.5 1.7q0 .6.1 1t.6 1 1.2 1.2 2.1 1.1 3.4 1.4q1.7.5 3.1 1.1t2.4 1.3 1.8 1.3 1.4 1.3.9 1.4.6 1.4.3 1.4.2 1.4 0 1.4z"></path></g>
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

export default IconScribd

