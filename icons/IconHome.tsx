

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

class IconHome extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--home ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M32.9 22.1v10.8q0 .5-.4 1t-1 .4h-8.6v-8.6h-5.7v8.6H8.6q-.5 0-1-.4t-.4-1V22l12.9-10.6L32.9 22v.1zm5-1.5l-1.4 1.7q-.2.2-.4.2H36q-.3 0-.5-.2L20.1 9.5 4.6 22.3q-.2.2-.5.2t-.5-.2l-1.4-1.7q-.1-.2-.1-.5t.2-.5L18.4 6.2q.7-.6 1.7-.6t1.7.6l5.4 4.6V6.4q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v9.1l4.9 4.1q.2.2.3.5t-.2.5z"></path></g>
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

export default IconHome

