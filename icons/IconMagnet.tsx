

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

class IconMagnet extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--magnet ${this.props.addClass}`

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
                    <g><path d="M37.3 18.6v2.8q0 4.5-2.2 8.1T29 35.1t-8.9 2-8.8-2-6.1-5.6T3 21.4v-2.8q0-.6.4-1t1-.5H13q.6 0 1 .5t.4 1v2.8q0 1.2.6 2t1.1 1.3 1.6.7 1.5.3.9 0 1 0 1.5-.3 1.5-.7 1.2-1.3.6-2v-2.8q0-.6.4-1t1-.5h8.6q.5 0 1 .5t.4 1zM14.4 4.3v8.6q0 .5-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4H13q.6 0 1 .4t.4 1zm22.9 0v8.6q0 .5-.4 1t-1 .4h-8.6q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4h8.6q.5 0 1 .4t.4 1z"></path></g>
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

export default IconMagnet

