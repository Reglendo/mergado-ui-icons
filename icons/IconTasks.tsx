

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

class IconTasks extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--tasks ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M22.9 31.4h14.2v-2.8H22.9v2.8zM14.3 20h22.8v-2.9H14.3V20zM28.6 8.6h8.5V5.7h-8.5v2.9zM40 27.1v5.8q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1v-5.8q0-.5.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-11.4v5.7q0 .6-.4 1t-1 .5H1.4q-.6 0-1-.5t-.4-1v-5.7q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-11.4V10q0 .6-.4 1t-1 .4H1.4q-.6 0-1-.4T0 10V4.3q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1z"></path></g>
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

export default IconTasks

