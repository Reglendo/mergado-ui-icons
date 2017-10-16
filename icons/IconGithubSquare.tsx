

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

class IconGithubSquare extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--github-square ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M14.6 26.8q.1-.1-.1-.3-.2-.2-.3 0-.1.1.1.2.2.2.3.1zm-.6-.9q-.2-.2-.3-.1-.1.1 0 .3.1.1.3.1.1-.1 0-.3zm-1-.9q.1-.1-.1-.2h-.1q-.1.2 0 .2.2.1.2 0zm.5.5q.1 0 0-.1t0-.1q-.2-.2-.3-.1t.1.3q.1.1.2 0zm1.9 1.7q.1-.2-.2-.3-.2 0-.3.1 0 .2.2.3.2 0 .3-.1zm1 0q0-.1-.3-.1-.2 0-.2.1t.2.2.3-.2zm.8-.1q0-.2-.2-.1t-.2.2q0 .1.2.1t.2-.2zM31.6 20q0-4.7-3.4-8.1t-8.1-3.3-8 3.3T8.7 20q0 3.7 2.2 6.7t5.6 4.1q.4.1.6-.1t.2-.4v-2.1h-.4q-.3 0-.8.1t-1-.1-1-.5-.7-.9q-.5-1.3-1.2-1.6l-.1-.1-.2-.2-.2-.2.1-.2.5-.1q.1 0 .3.1t.7.3.7.8q.4.7.8 1t1 .3.9-.1.6-.2q.2-1.1.8-1.6-1.1-.1-1.9-.4t-1.7-.8-1.2-1.7-.5-2.7q0-1.8 1.2-3.1-.5-1.3.1-3 .5-.1 1.3.2t1.3.6l.6.4q1.3-.4 2.8-.4t2.9.4l.6-.4q.3-.2 1.3-.6t1.3-.2q.6 1.7.1 3 1.1 1.3 1.1 3.1 0 1.3-.3 2.2t-.8 1.6-1.2 1-1.3.6-1.6.2q.8.7.8 2.2v3.1q0 .3.2.4t.6.1q3.4-1.1 5.6-4.1t2.2-6.7zm5.7-10.7v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconGithubSquare

