

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

class IconCheckSquareO extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--check-square-o ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M32.9 20.8v7.1q0 2.6-1.9 4.5t-4.5 1.9H7.9q-2.6 0-4.5-1.9t-1.9-4.5V9.3q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6.5.3.2.4.5.1.4-.2.7l-1.1 1.1q-.2.2-.5.2-.1 0-.2-.1-.5-.1-1-.1H7.9q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-5.7q0-.3.2-.5l1.4-1.4q.2-.3.5-.3.1 0 .3.1.4.2.4.7zm5.2-11L19.9 28q-.5.6-1.3.6t-1.2-.6l-9.6-9.6q-.6-.5-.6-1.3t.6-1.2l2.4-2.5q.6-.5 1.3-.5t1.3.5l5.8 5.9L33.1 4.8q.5-.5 1.3-.5t1.2.5l2.5 2.5q.5.5.5 1.3t-.5 1.2z"></path></g>
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

export default IconCheckSquareO

