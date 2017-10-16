

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

class IconHeader extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--header ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M37.5 37.1h-2.9q-2 0-3-.1-1 0-2.9.1t-3 0q-.5 0-.8-.4t-.3-1q0-.7.4-1.1t.8-.3 1.2-.2 1-.3q.7-.5.7-3.2v-9.4q-.3-.1-1.1-.1H12.5q-.8 0-1.1.1-.1.2-.1.7v8.3q0 3.2.8 3.7.4.2 1.1.2t1.3.1 1 .4.4 1q0 .6-.2 1t-.9.5h-3.1q-2.1 0-3.1-.1-.9 0-2.8.1t-2.9 0q-.5 0-.7-.4t-.3-1q0-.7.3-1t.8-.4 1.1-.2.9-.3q.8-.5.8-3.2l-.1-1.3V11.2q0-.1.1-.6t0-.8-.1-.9-.1-.9-.1-.8-.3-.7-.3-.4q-.3-.3-1-.3t-1.2-.1-.9-.3-.4-1q0-.6.3-1t.8-.5h3.1q2.1 0 3 .1 1 0 2.9-.1t2.8 0q.6 0 .8.4t.3 1.1q0 .7-.4 1t-.8.3-1.1.1-1 .3q-.8.5-.8 3.6v7.1q0 .5.1.7.3.1.8.1h15.6q.6 0 .9-.1V9.7q0-3.1-.7-3.6-.5-.3-1.4-.3t-1.4-.3-.6-1.1q0-.6.3-1.1t.8-.4h3q2 0 2.9.1 1 0 2.9-.1t2.9 0q.5 0 .8.4t.3 1.1q0 .7-.4 1t-.9.3-1.1.1-1 .3q-.8.5-.8 3.6v21q0 2.7.8 3.1.3.3 1 .3t1.2.1.9.4.4 1q0 .6-.2 1t-.9.5z"></path></g>
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

export default IconHeader

