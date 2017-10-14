

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

class IconCodeFork extends React.Component<Props, State> {

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
                    <g><path d="m14.9 32.9q0-0.9-0.6-1.6t-1.5-0.6-1.5 0.6-0.7 1.6 0.7 1.5 1.5 0.6 1.5-0.6 0.6-1.5z m0-25.8q0-0.8-0.6-1.5t-1.5-0.6-1.5 0.6-0.7 1.5 0.7 1.6 1.5 0.6 1.5-0.6 0.6-1.6z m14.3 2.9q0-0.9-0.6-1.5t-1.5-0.6-1.5 0.6-0.7 1.5 0.7 1.5 1.5 0.6 1.5-0.6 0.6-1.5z m2.2 0q0 1.2-0.6 2.2t-1.6 1.5q0 6.4-5 9.2-1.6 0.9-4.6 1.9-2.8 0.8-3.7 1.5t-1 2.3v0.5q1 0.6 1.6 1.6t0.6 2.2q0 1.7-1.3 3t-3 1.2-3.1-1.2-1.2-3q0-1.2 0.6-2.2t1.5-1.5v-18.4q-0.9-0.5-1.5-1.5t-0.6-2.2q0-1.7 1.3-3t3-1.2 3 1.2 1.3 3q0 1.2-0.6 2.2t-1.6 1.5v11.1q1.2-0.5 3.5-1.2 1.2-0.4 1.9-0.7t1.6-0.7 1.3-0.9 0.9-1.1 0.6-1.6 0.2-2q-1-0.6-1.5-1.5t-0.6-2.2q0-1.8 1.2-3t3.1-1.3 3 1.3 1.3 3z"></path></g>
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

export default IconCodeFork

