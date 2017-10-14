

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

class IconArrowLeft extends React.Component<Props, State> {

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
                    <g><path d="m36.3 20v2.9q0 1.1-0.7 2t-1.9 0.8h-15.7l6.5 6.6q0.9 0.8 0.9 2t-0.9 2l-1.7 1.7q-0.8 0.8-2 0.8-1.1 0-2-0.8l-14.5-14.6q-0.9-0.8-0.9-2 0-1.1 0.9-2l14.5-14.5q0.8-0.9 2-0.9 1.2 0 2 0.9l1.7 1.6q0.9 0.9 0.9 2.1t-0.9 2l-6.5 6.5h15.7q1.1 0 1.9 0.9t0.7 2z"></path></g>
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

export default IconArrowLeft

