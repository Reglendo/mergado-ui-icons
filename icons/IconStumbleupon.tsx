

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

class IconStumbleupon extends React.Component<Props, State> {

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
                    <g><path d="m22.1 16.2v-2.5q0-0.8-0.7-1.5t-1.5-0.6-1.5 0.6-0.6 1.5v12.7q0 3.7-2.6 6.2t-6.3 2.6q-3.7 0-6.3-2.6t-2.6-6.3v-5.5h6.8v5.4q0 0.9 0.6 1.5t1.5 0.6 1.5-0.6 0.6-1.5v-12.8q0-3.6 2.7-6.1t6.2-2.5q3.7 0 6.3 2.5t2.6 6.1v2.8l-4 1.2z m11 4.6h6.8v5.5q0 3.7-2.6 6.3t-6.3 2.6q-3.7 0-6.3-2.6t-2.6-6.2v-5.6l2.7 1.3 4-1.2v5.6q0 0.9 0.6 1.5t1.5 0.6 1.5-0.6 0.7-1.5v-5.7z"></path></g>
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

export default IconStumbleupon

