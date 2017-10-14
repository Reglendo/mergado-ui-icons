

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

class IconPencil extends React.Component<Props, State> {

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
                    <g><path d="m11.1 34.3l2-2-5.2-5.3-2 2v2.4h2.8v2.9h2.4z m11.7-20.7q0-0.5-0.5-0.5-0.2 0-0.4 0.1l-12.1 12.1q-0.1 0.2-0.1 0.4 0 0.5 0.4 0.5 0.3 0 0.4-0.2l12.1-12.1q0.2-0.1 0.2-0.3z m-1.2-4.3l9.3 9.3-18.6 18.5h-9.3v-9.2z m15.2 2.1q0 1.2-0.8 2l-3.7 3.7-9.3-9.2 3.7-3.7q0.8-0.9 2-0.9 1.2 0 2 0.9l5.3 5.2q0.8 0.9 0.8 2z"></path></g>
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

export default IconPencil

