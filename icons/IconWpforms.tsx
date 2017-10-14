

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

class IconWpforms extends React.Component<Props, State> {

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
                    <g><path d="M14.5 20.3v2.9H8.9v-2.9h5.6zm0-5.7v2.9H8.9v-2.9h5.6zM31.4 26v2.9h-7.6v-2.8h7.6zm0-5.7v2.9h-15v-2.9h15zm0-5.7v2.9h-15v-2.9h15zm3 19.2V6.2q0-.2-.1-.4t-.3-.1h-.7l-8.5 5.7-4.7-3.8-4.6 3.8L7 5.7h-.7q-.2 0-.3.1t-.1.4v27.6q0 .2.1.4t.3.1H34q.2 0 .3-.1t.1-.4zM15.3 9.1l4.2-3.4h-9.1zm9.6 0l5-3.4h-9.1zm12.4-2.9v27.6q0 1.4-1 2.4t-2.3.9H6.3q-1.4 0-2.3-.9t-1-2.4V6.2q0-1.4 1-2.4t2.3-.9H34q1.4 0 2.3.9t1 2.4z"></path></g>
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

export default IconWpforms

