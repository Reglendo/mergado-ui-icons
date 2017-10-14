

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

class IconMapPin extends React.Component<Props, State> {

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
                    <g><path d="m19.9 24.3q1.5 0 2.9-0.3v14.6q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-14.6q1.3 0.3 2.8 0.3z m0-24.3q4.8 0 8.1 3.3t3.4 8.1-3.4 8.1-8.1 3.4-8.1-3.4-3.3-8.1 3.3-8.1 8.1-3.3z m0 5q0.3 0 0.5-0.2t0.2-0.5-0.2-0.5-0.5-0.2q-3.2 0-5.5 2.3t-2.3 5.5q0 0.3 0.2 0.5t0.5 0.2 0.5-0.2 0.2-0.5q0-2.6 1.9-4.5t4.5-1.9z"></path></g>
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

export default IconMapPin

