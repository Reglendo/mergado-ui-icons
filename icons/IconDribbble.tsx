

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

class IconDribbble extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--dribbble ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M25.9 33.5q-1-5.4-3.2-11.1h-.1q-.3.1-.9.4t-2.3 1-3 1.9-3 2.5-2.3 3.3l-.3-.2q4.1 3.3 9.3 3.3 3 0 5.8-1.1zm-4.2-13.6q-.4-1.1-1.2-2.4-6.9 2-15 2v.5q0 2.8 1 5.3t2.8 4.5q1.1-2 2.7-3.7t3.2-2.8 2.9-1.8 2.2-1.1l.9-.3.2-.1q.2-.1.3-.1zm-2.4-4.7q-2.6-4.8-5.4-8.4-3.1 1.4-5.2 4.1T5.8 17q6.8 0 13.5-1.8zm15.3 7.1q-4.7-1.3-9.1-.6 1.9 5.3 2.8 10.4 2.5-1.6 4.2-4.2t2.1-5.6zm-18-16.5zM29.8 9q-4.1-3.6-9.7-3.6-1.7 0-3.4.4 2.9 3.8 5.5 8.5 1.5-.6 2.9-1.3t2.1-1.4 1.5-1.3.8-.9zm5 10.8q-.1-5.1-3.3-9.1h-.1l-.4.6q-.2.3-1 1t-1.5 1.3-2.3 1.5-2.9 1.4q.6 1.2 1 2.1 0 .1.1.4t.2.4l1.6-.2q.8-.1 1.7 0t1.5 0 1.5.1 1.2.1 1.1.2.8.1.6.1zm2.5.2q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconDribbble

