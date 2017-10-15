

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

class IconFont extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--font ${this.props.addClass}`

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
                    <g><path d="M17.7 12.5l-3.8 10q.7 0 3 .1t3.6 0h1.3q-2-5.7-4.1-10.1zM1.5 37.1v-1.7q.6-.2 1.3-.3t1.3-.2 1.1-.4 1-.6.7-1.1L12.1 19l6.3-16.1h2.9q.1.3.2.4L26.1 14q.7 1.8 2.3 5.8t2.6 6.1q.3.8 1.3 3.2t1.6 3.8q.4 1 .8 1.3.4.3 1.9.6t1.9.5q.1.8.1 1.3v.5q-1.4 0-4.2-.1t-4.3-.2q-1.7 0-4.8.1t-4 .2q0-.9.1-1.7l3-.6.2-.1q.2-.1.4-.1t.3-.1.3-.1.3-.2.2-.3 0-.3q0-.3-.6-2.1t-1.7-4-.9-2.2l-10-.1q-.6 1.3-1.7 4.4T10 33.2q0 .5.3.9t1 .5 1.1.3 1.3.2.9.1v1.9q-1.3 0-3.9-.2t-3.9-.3q-.2 0-.6.1t-.5.1q-1.8.3-4.2.3z"></path></g>
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

export default IconFont

