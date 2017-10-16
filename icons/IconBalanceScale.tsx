

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

class IconBalanceScale extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--balance-scale ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M31.5 11.8l-7 12.9h14zm-23.3 0l-7 12.9h14zm14.9-3.5q-.2.8-.8 1.3t-1.3.9V34h11.1q.2 0 .4.2t.2.4v1.1q0 .3-.2.5t-.4.1H7.6q-.3 0-.4-.1t-.2-.5v-1.1q0-.3.2-.4t.4-.2h11.1V10.5q-.8-.3-1.3-.9t-.9-1.3H7.6q-.3 0-.4-.1T7 7.8V6.6q0-.3.2-.4t.4-.2h8.9q.4-1 1.3-1.7t2-.6 2 .6T23.1 6h9q.2 0 .4.2t.2.4v1.2q0 .2-.2.4t-.4.1h-9zm-3.3.3q.6 0 1.1-.4t.4-1-.4-1.1-1.1-.4-1 .4-.4 1.1.4 1 1 .4zm19.8 16.1q0 1.3-.8 2.4t-2.1 1.6-2.7.9-2.5.3-2.6-.3-2.6-.9-2.1-1.6-.9-2.4q0-.2.7-1.5t1.6-3.2 2-3.6 1.8-3.3 1.1-1.8q.3-.6 1-.6t1 .6q.1.1 1 1.8t1.9 3.3 1.9 3.6 1.7 3.2.6 1.5zm-23.3 0q0 1.3-.8 2.4t-2.2 1.6-2.6.9-2.5.3-2.6-.3-2.6-.9-2.2-1.6-.8-2.4q0-.2.6-1.5T2.3 20t2-3.6 1.8-3.3 1-1.8q.4-.6 1.1-.6t1 .6q.1.1 1 1.8t1.9 3.3T14 20t1.7 3.2.6 1.5z"></path></g>
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

export default IconBalanceScale

