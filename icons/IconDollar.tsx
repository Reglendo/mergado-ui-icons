

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

class IconDollar extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--dollar ${this.props.addClass}`

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
                    <g><path d="M30.3 26.4q0 3.5-2.2 5.9t-5.8 3.1v3.9q0 .3-.2.5t-.5.2h-3q-.3 0-.5-.2t-.2-.5v-3.9q-1.5-.2-2.8-.7t-2.3-1-1.7-1.1-1-.8-.4-.4q-.4-.5 0-.9l2.3-3q.1-.3.5-.3.3-.1.5.2h.1q2.5 2.2 5.4 2.8.8.2 1.6.2 1.8 0 3.2-1t1.4-2.7q0-.6-.4-1.2t-.7-.9-1.3-.8-1.5-.8-1.8-.7q-.8-.3-1.3-.5t-1.4-.6-1.4-.7-1.3-.8-1.2-1-.9-1.1-.8-1.2-.5-1.5-.2-1.8q0-3.1 2.2-5.4t5.7-3v-4q0-.3.2-.5t.5-.2h3q.3 0 .5.2t.2.5v3.9q1.3.2 2.5.6t1.9.7 1.5.8.8.7.4.3q.3.4.1.9l-1.8 3.2q-.2.3-.5.4-.4 0-.6-.2-.1-.1-.4-.3t-.8-.5-1.3-.8-1.7-.5-1.9-.3q-2.1 0-3.5 1T15.7 13q0 .6.2 1.1t.6.9.9.8 1.3.7 1.3.6 1.6.6q1.2.4 1.8.7t1.7.8 1.7.9 1.4 1.1 1.1 1.5.7 1.7.3 2.1z"></path></g>
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

export default IconDollar

