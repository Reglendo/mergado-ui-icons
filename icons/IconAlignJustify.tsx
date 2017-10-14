

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

class IconAlignJustify extends React.Component<Props, State> {

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
                    <g><path d="M40 30v2.9q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-8.6v2.9q0 .6-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1v-2.9q0-.5.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-8.5v2.8q0 .6-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1v-2.8q0-.6.4-1t1-.5h37.2q.5 0 1 .5t.4 1zm0-8.6v2.8q0 .6-.4 1t-1 .5H1.4q-.6 0-1-.5t-.4-1V4.3q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1z"></path></g>
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

export default IconAlignJustify

