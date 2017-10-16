

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

class IconFonticons extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--fonticons ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M3 2.9h34.3v34.2H3V2.9zM23.3 10l-.3.7 1.7 1.9-.7 2.5.5.6 2.4-1.3 2.4 1.3.6-.6-.7-2.5 1.7-1.9-.3-.7h-2.1l-1.2-2.1h-.7L25.4 10h-2.1zm-6 3.6q.7 0 1 .4t.3 1.4l3.8-.5q0-1.2-.3-2t-1.2-1.3-1.5-.6-1.9-.1q-3 0-4.5 1.3t-1.4 4.1v1.6H9.4v2.8h1.7q.5 0 .5.2v8.5q0 .3-.1.5t-.4.1l-1.7.2v1.9h10v-1.9l-3.3-.3h-.2q-.1 0-.1-.1t0-.1 0-.1.1-.2v-8.7h4.2l.9-2.8h-5.2q-.1 0 0-.2t.1-.2v-2.7q0-.3.2-.6t.4-.4.8-.2zm13.6 18.5v-1.9l-1.2-.2h-.3q-.1 0 0-.1t0-.2 0-.2V17.9h-6.1l-.5 2.2 1.8.5q.5.2.5.6v8.3q0 .3-.1.4t-.4.1l-1.6.2v1.9h7.9z"></path></g>
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

export default IconFonticons

