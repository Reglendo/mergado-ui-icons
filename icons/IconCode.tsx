

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

class IconCode extends React.Component<Props, State> {

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
                    <g><path d="M12.8 30.4l-1 1.1q-.2.2-.5.2t-.5-.2l-9.7-9.7q-.2-.2-.2-.5t.2-.4l9.7-9.7q.2-.2.5-.2t.5.2l1 1q.2.2.2.5t-.2.5l-8.1 8.1 8.1 8.2q.2.2.2.5t-.2.4zM25.1 8.3l-7.8 26.8q0 .3-.3.4t-.5.1l-1.3-.4q-.2-.1-.4-.3t0-.5l7.7-26.8q.1-.3.4-.4t.4-.1l1.3.4q.3 0 .4.3t.1.5zm13.6 13.5L29 31.5q-.2.2-.4.2t-.5-.2l-1-1.1q-.3-.2-.3-.4t.3-.5l8.1-8.2-8.1-8.1q-.3-.2-.3-.5t.3-.5l1-1q.2-.2.5-.2t.4.2l9.7 9.7q.2.2.2.4t-.2.5z"></path></g>
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

export default IconCode

