

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

class IconParagraph extends React.Component<Props, State> {

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
                    <g><path d="m34 4.2v1.6q0 0.7-0.4 1.4t-0.9 0.7q-1.2 0-1.2 0-0.6 0.2-0.8 0.7 0 0.3 0 1.5v25.7q0 0.5-0.4 0.9t-1 0.4h-2.4q-0.6 0-1-0.4t-0.4-0.9v-27.2h-3.1v27.2q0 0.5-0.4 0.9t-1 0.4h-2.4q-0.6 0-1-0.4t-0.4-0.9v-11.1q-3.3-0.3-5.5-1.3-2.8-1.3-4.2-4-1.5-2.6-1.5-5.8 0-3.7 2-6.4 2-2.6 4.7-3.5 2.4-0.8 9.3-0.8h10.7q0.5 0 0.9 0.4t0.4 0.9z"></path></g>
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

export default IconParagraph

