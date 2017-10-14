

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

class IconRedditAlien extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.props.addClass}`

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
                    <g><path d="M40 18.9q0 1.3-.7 2.3t-1.7 1.7q.2 1 .2 2.1 0 3.5-2.3 6.4T29 36.1t-9 1.7-8.9-1.7-6.4-4.7T2.3 25q0-1.1.2-2.1-1.1-.6-1.8-1.6T0 18.9q0-1.8 1.3-3.2t3.1-1.3q1.9 0 3.3 1.4 4.8-3.3 11.5-3.6L21.8.6q0-.3.3-.5t.6-.1l8.2 1.8q.4-.8 1.2-1.3t1.8-.5q1.4 0 2.4 1t.9 2.3-.9 2.4-2.4 1-2.4-1-.9-2.4l-7.5-1.6-2.3 10.5q6.7.2 11.6 3.6 1.3-1.4 3.2-1.4 1.8 0 3.1 1.3t1.3 3.2zM9.3 23.3q0 1.4 1 2.4t2.4 1 2.3-1 1-2.4-1-2.3-2.3-1q-1.4 0-2.4 1t-1 2.3zm18.1 8q.3-.3.3-.6t-.3-.6q-.2-.2-.5-.2t-.6.2q-.9.9-2.7 1.4t-3.6.4-3.6-.4-2.7-1.4q-.2-.2-.5-.2t-.6.2q-.3.2-.3.6t.3.6q1 .9 2.6 1.5t2.8.6 2 .1 2-.1 2.8-.6 2.6-1.6zm-.1-4.6q1.4 0 2.4-1t1-2.4q0-1.3-1-2.3t-2.4-1Q26 20 25 21t-1 2.3 1 2.4 2.3 1z"></path></g>
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

export default IconRedditAlien

