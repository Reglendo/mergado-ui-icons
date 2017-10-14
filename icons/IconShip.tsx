

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

class IconShip extends React.Component<Props, State> {

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
                    <g><path d="m35.2 32.8q0.3-0.4 0.8-0.4t0.9 0.4l2.5 2.5-1.8 1.7-1.6-1.6-1.6 1.6q-0.3 0.4-0.9 0.4t-0.8-0.4l-1.6-1.6-1.7 1.6q-0.3 0.4-0.8 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.8-0.4l-1.7-1.6-1.6 1.6q-0.3 0.4-0.8 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.8-0.4l-2.5-2.5 1.7-1.7 1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.3-0.4 0.8-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.8 0.4l1.6 1.6z m-30.6-0.7q-0.4 0.3-0.9 0.3t-0.8-0.3l-2.5-2.5 1.7-1.8 1.6 1.6 1.6-1.6q0.4-0.3 0.9-0.3t0.9 0.3l1.6 1.6 1.2-1.2v-5.7l-4-6.1q-0.4-0.5-0.2-1.1t0.8-0.8l3.4-1.1v-5.8h2.5v-2.5h5v-2.5h5v2.5h4.9v2.5h2.5v5.8l3.4 1.1q0.6 0.2 0.8 0.8t-0.1 1.1l-4.1 6.1v5.7l0.4-0.4q0.4-0.3 0.9-0.3t0.8 0.3l1.6 1.6 1.7-1.6q0.3-0.3 0.8-0.3t0.9 0.3l2.5 2.5-1.8 1.8-1.6-1.7-1.6 1.7q-0.3 0.3-0.9 0.3t-0.8-0.3l-1.6-1.7-1.7 1.7q-0.3 0.3-0.8 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.8-0.3l-1.7-1.7-1.6 1.7q-0.3 0.3-0.8 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.9-0.3l-1.6-1.7z m7.8-22v2.4l7.5-2.4 7.4 2.4v-2.4h-2.5v-2.5h-9.9v2.5h-2.5z"></path></g>
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

export default IconShip

