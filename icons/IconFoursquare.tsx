

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

class IconFoursquare extends React.Component<Props, State> {

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
                    <g><path d="m27.8 9.7l0.8-4.3q0.2-0.6-0.2-0.9t-0.7-0.4h-15.9q-0.5 0-0.9 0.4t-0.3 0.8v24.6q0 0.1 0.1 0l6.5-7.9q0.5-0.5 0.8-0.7t1.1-0.2h5.4q0.4 0 0.8-0.3t0.4-0.7q0.5-2.9 0.8-4.2 0.1-0.5-0.3-0.9t-0.8-0.4h-6.5q-0.7 0-1.1-0.5t-0.4-1v-1q0-0.6 0.4-1t1.1-0.5h7.7q0.4 0 0.8-0.3t0.4-0.6z m5.1-5q-0.3 1.7-1.2 6t-1.6 7.8-0.7 3.9q-0.2 0.5-0.2 0.7t-0.4 0.7-0.5 0.8-0.9 0.4-1.3 0.2h-6q-0.3 0-0.5 0.3-0.2 0.2-9.5 11-0.5 0.6-1.3 0.6t-1.1-0.1q-1.2-0.5-1.2-2.2v-31.4q0-1.3 0.8-2.3t2.7-1.1h19.8q2.1 0 2.9 1.2t0.2 3.5z m0 0l-3.5 17.7q0-0.4 0.7-3.9t1.6-7.8 1.2-6z"></path></g>
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

export default IconFoursquare

