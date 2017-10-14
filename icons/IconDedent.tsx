

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

class IconDedent extends React.Component<Props, State> {

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
                    <g><path d="m8.6 12.1v12.9q0 0.3-0.2 0.5t-0.5 0.2q-0.4 0-0.6-0.2l-6.4-6.4q-0.2-0.2-0.2-0.5t0.2-0.5l6.4-6.5q0.2-0.2 0.6-0.2 0.2 0 0.5 0.2t0.2 0.5z m31.4 17.2v4.3q0 0.3-0.2 0.5t-0.5 0.2h-38.6q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h38.6q0.3 0 0.5 0.2t0.2 0.5z m0-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-24.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h24.3q0.3 0 0.5 0.2t0.2 0.5z m0-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-24.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.2 0.2-0.5t0.5-0.2h24.3q0.3 0 0.5 0.2t0.2 0.5z m0-8.5v4.3q0 0.2-0.2 0.5t-0.5 0.2h-38.6q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h38.6q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconDedent

