

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

class IconCodeFork extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--code-fork ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M14.9 32.9q0-.9-.6-1.6t-1.5-.6-1.5.6-.7 1.6.7 1.5 1.5.6 1.5-.6.6-1.5zm0-25.8q0-.8-.6-1.5T12.8 5t-1.5.6-.7 1.5.7 1.6 1.5.6 1.5-.6.6-1.6zM29.2 10q0-.9-.6-1.5t-1.5-.6-1.5.6-.7 1.5.7 1.5 1.5.6 1.5-.6.6-1.5zm2.2 0q0 1.2-.6 2.2t-1.6 1.5q0 6.4-5 9.2-1.6.9-4.6 1.9-2.8.8-3.7 1.5t-1 2.3v.5q1 .6 1.6 1.6t.6 2.2q0 1.7-1.3 3t-3 1.2-3.1-1.2-1.2-3q0-1.2.6-2.2t1.5-1.5V10.8q-.9-.5-1.5-1.5t-.6-2.2q0-1.7 1.3-3t3-1.2 3 1.2 1.3 3q0 1.2-.6 2.2t-1.6 1.5v11.1q1.2-.5 3.5-1.2 1.2-.4 1.9-.7t1.6-.7 1.3-.9.9-1.1.6-1.6.2-2q-1-.6-1.5-1.5t-.6-2.2q0-1.8 1.2-3t3.1-1.3 3 1.3 1.3 3z"></path></g>
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

export default IconCodeFork

