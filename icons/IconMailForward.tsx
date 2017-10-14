

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

class IconMailForward extends React.Component<Props, State> {

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
                    <g><path d="m40 14.3q0 0.6-0.4 1l-11.5 11.4q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-5.7h-5q-2.2 0-3.9 0.1t-3.4 0.5-3 1-2.4 1.5-1.7 2.3-1.1 3.1-0.4 4q0 1.2 0.1 2.7 0 0.2 0 0.6t0.1 0.6q0 0.3-0.2 0.5t-0.5 0.2q-0.4 0-0.6-0.3-0.2-0.2-0.3-0.5t-0.3-0.7-0.3-0.5q-2.8-6.4-2.8-10.1 0-4.4 1.2-7.4 3.6-9 19.5-9h5v-5.7q0-0.6 0.4-1t1-0.5 1 0.5l11.5 11.4q0.4 0.4 0.4 1z"></path></g>
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

export default IconMailForward

