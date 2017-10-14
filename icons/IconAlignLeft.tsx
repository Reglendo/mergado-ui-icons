

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

class IconAlignLeft extends React.Component<Props, State> {

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
                    <g><path d="m40 30v2.9q0 0.5-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z m-8.6-8.6v2.9q0 0.6-0.4 1t-1 0.4h-28.6q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.5 0.4-1t1-0.4h28.6q0.6 0 1 0.4t0.4 1z m5.7-8.5v2.8q0 0.6-0.4 1t-1 0.4h-34.3q-0.6 0-1-0.4t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h34.3q0.6 0 1 0.5t0.4 1z m-8.5-8.6v2.8q0 0.6-0.5 1t-1 0.5h-25.7q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.4h25.7q0.6 0 1 0.4t0.5 1z"></path></g>
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

export default IconAlignLeft

