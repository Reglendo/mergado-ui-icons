

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

class IconMixcloud extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--mixcloud ${this.props.addClass}`

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
                    <g><path d="M28.8 23.5q0-1-.6-1.8t-1.5-1.2q-.1.8-.4 1.6-.1.4-.5.6t-.8.3q-.2 0-.4-.1-.5-.1-.8-.6t-.1-1.1q.4-1.2.4-2.5 0-2.1-1-3.9t-2.9-2.9-4-1.1q-2.4 0-4.3 1.3t-3 3.4q1.9.5 3.3 1.8.4.4.4 1t-.4.9-.9.4-1-.4Q9 17.9 7.2 17.9q-1.9 0-3.2 1.3t-1.3 3.2T4 25.5t3.2 1.3h18.3q1.4 0 2.3-.9t1-2.4zm2.7 0q0 2.5-1.8 4.3t-4.2 1.7H7.2q-3 0-5.1-2.1t-2.1-5q0-2.7 1.8-4.7t4.3-2.4q1.1-3.2 3.9-5.2t6.2-2q4.1 0 7.1 2.8t3.5 6.8q2 .4 3.3 2.1t1.4 3.7zm4.4 0q0 3.1-1.7 5.6-.4.6-1.2.6-.4 0-.7-.2-.5-.3-.6-.9t.2-1q1.3-1.8 1.3-4.1t-1.3-4q-.3-.5-.2-1t.6-.9 1-.2.9.6q1.7 2.5 1.7 5.5zm4.4 0q0 4.3-2.3 7.8-.4.6-1.1.6-.4 0-.8-.2-.4-.4-.5-.9t.2-1q1.9-2.9 1.9-6.3t-1.9-6.2q-.3-.5-.2-1t.5-.9q.5-.3 1-.2t.9.6q2.3 3.5 2.3 7.7z"></path></g>
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

export default IconMixcloud

