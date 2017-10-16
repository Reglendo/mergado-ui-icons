

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

class IconGavel extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--gavel ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M39.5 34.3q0 1.2-.8 2l-2.4 2.4q-.9.8-2 .8-1.2 0-2-.8l-8.1-8.1q-.9-.8-.9-2t1-2.2l-5.7-5.7-2.8 2.8q-.4.3-.8.3t-.8-.3l.3.3.3.3.2.2q.1.1.2.3t.2.3.1.4 0 .4q0 .9-.6 1.5l-.4.4q-.3.3-.4.5t-.4.4-.5.3-.5.2-.6.1q-.8 0-1.5-.6l-9.1-9.1q-.6-.6-.6-1.5 0-.3.1-.6t.2-.5.3-.5.4-.4.5-.4.4-.4q.6-.6 1.5-.6h.4q.2 0 .4.1t.3.2.3.2.2.2.3.3.3.3q-.3-.4-.3-.8t.3-.8l7.7-7.7q.4-.3.8-.3t.8.3l-.3-.3-.3-.3-.2-.2q-.1-.1-.2-.3t-.2-.3-.1-.4 0-.4q0-.9.6-1.5l.4-.4q.3-.3.4-.5t.4-.4.5-.3.5-.2.6-.1q.8 0 1.5.6l9.1 9.1q.6.6.6 1.5 0 .3-.1.6t-.2.5-.3.5-.4.4-.5.4-.4.4q-.6.6-1.5.6h-.4q-.2 0-.4-.1t-.3-.2-.3-.2-.2-.2-.3-.3-.3-.3q.3.4.3.8t-.3.8l-2.8 2.8 5.7 5.7q1-1 2.2-1 1.1 0 2 .9l8.1 8.1q.8.8.8 2z"></path></g>
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

export default IconGavel

