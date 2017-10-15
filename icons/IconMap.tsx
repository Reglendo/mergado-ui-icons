

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

class IconMap extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--map ${this.props.addClass}`

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
                    <g><path d="M11.4 0q.3 0 .5.2t.2.5v32.9q0 .4-.3.6L1.1 39.9q-.2.1-.4.1-.3 0-.5-.2t-.2-.5V6.4q0-.4.4-.6L11.1.1q.2-.1.3-.1zm27.9 0q.3 0 .5.2t.2.5v32.9q0 .4-.4.6l-10.7 5.7q-.1.1-.3.1-.3 0-.5-.2t-.2-.5V6.4q0-.4.3-.6L39 .1q.1-.1.3-.1zm-25 0q.2 0 .3.1L26 5.8q.4.2.4.6v32.9q0 .3-.2.5t-.5.2q-.2 0-.3-.1L14 34.2q-.4-.2-.4-.6V.7q0-.3.2-.5t.5-.2z"></path></g>
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

export default IconMap

