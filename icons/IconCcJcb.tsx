

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

class IconCcJcb extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--cc-jcb ${this.props.addClass}`

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
                    <g><path d="M34.2 21.8q0 .4-.3.8t-.7.4h-3v-2.4h3q.4.1.7.4t.3.8zm-.4-3.7q0 .4-.2.7t-.7.4h-2.7v-2.3h2.7q.4.1.7.4t.2.8zm-21.1 2.8v-5.4H8.8v5.4q0 1-.7 1.7t-1.8.6q-1.9 0-4.1-1v2q1 .2 2.2.4t1.9.1H7q5.7 0 5.7-3.8zm12.5 3.2v-1.9q-1.7.9-3.5 1-1.8.1-2.9-.7T17.7 20t1.1-2.5 2.9-.7q1.8.1 3.5 1v-1.9q-.8-.3-1.7-.4t-1.4-.2h-.5q-2.2-.1-3.8.3t-2.5 1-1.2 1.5-.4 1.9.4 1.9 1.2 1.5 2.5 1 3.8.3q1.8-.1 3.6-.6zm12.9-2q0-.9-.8-1.5t-1.9-.7v-.1q1-.1 1.6-.7t.6-1.4q0-.9-.8-1.5t-1.8-.6q-.1 0-.2-.1t-.3 0h-8v9h8.6q1.3 0 2.2-.7t.8-1.7zm2.2-13.3v22.4q0 .9-.6 1.6t-1.6.6H2.2q-.9 0-1.5-.6T0 31.2V8.8q0-.9.7-1.6t1.5-.6h35.9q.9 0 1.6.6t.6 1.6z"></path></g>
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

export default IconCcJcb

