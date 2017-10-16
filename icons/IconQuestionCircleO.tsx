

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

class IconQuestionCircleO extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--question-circle-o ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M22.6 26.8v3.6q0 .3-.2.5t-.5.2h-3.5q-.4 0-.6-.2t-.2-.5v-3.6q0-.3.2-.5t.6-.2h3.5q.3 0 .5.2t.2.5zm5.8-11.1q0 1.1-.4 2t-1 1.6-1.2.9-1.3.8q-.7.4-1 .7t-.6.5-.3.7v.7q0 .3-.2.5t-.5.2h-3.5q-.4 0-.6-.2t-.2-.5v-1.5q0-.8.3-1.5t.5-1 .9-.8.9-.6 1-.5q1.2-.5 1.7-.9t.5-1.1q0-1-1-1.6t-2.1-.7q-1.3 0-2.2.6-.6.5-1.8 1.9-.2.2-.5.2t-.4-.1L13 14.2q-.3-.2-.3-.5t.1-.5q2.7-4.3 7.8-4.3 2.9 0 5.3 2t2.5 4.8zm-8.3-10q-2.9 0-5.5 1.2t-4.6 3-3 4.6T5.9 20 7 25.5t3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5-1.1-5.5-3.1-4.6-4.5-3.1-5.6-1.1zM37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconQuestionCircleO

