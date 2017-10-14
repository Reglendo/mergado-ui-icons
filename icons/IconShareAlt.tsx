

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

class IconShareAlt extends React.Component<Props, State> {

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
                    <g><path d="M30.1 22.9q3 0 5.1 2t2.1 5.1-2.1 5.1-5.1 2-5-2T23 30v-.8l-8-4q-2 1.9-4.9 1.9-2.9 0-5-2T3 20t2.1-5.1 5-2q2.9 0 4.9 1.9l8-4V10q0-3 2.1-5.1t5-2 5.1 2 2.1 5.1-2.1 5.1-5.1 2q-2.8 0-4.8-1.9l-8.1 4q.1.5.1.8t-.1.8l8.1 4q2-1.9 4.8-1.9z"></path></g>
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

export default IconShareAlt

