

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

class IconRedditAlien extends React.Component<Props, State> {

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
                    <g><path d="m40 18.9q0 1.3-0.7 2.3t-1.7 1.7q0.2 1 0.2 2.1 0 3.5-2.3 6.4t-6.5 4.7-9 1.7-8.9-1.7-6.4-4.7-2.4-6.4q0-1.1 0.2-2.1-1.1-0.6-1.8-1.6t-0.7-2.4q0-1.8 1.3-3.2t3.1-1.3q1.9 0 3.3 1.4 4.8-3.3 11.5-3.6l2.6-11.6q0-0.3 0.3-0.5t0.6-0.1l8.2 1.8q0.4-0.8 1.2-1.3t1.8-0.5q1.4 0 2.4 1t0.9 2.3-0.9 2.4-2.4 1-2.4-1-0.9-2.4l-7.5-1.6-2.3 10.5q6.7 0.2 11.6 3.6 1.3-1.4 3.2-1.4 1.8 0 3.1 1.3t1.3 3.2z m-30.7 4.4q0 1.4 1 2.4t2.4 1 2.3-1 1-2.4-1-2.3-2.3-1q-1.4 0-2.4 1t-1 2.3z m18.1 8q0.3-0.3 0.3-0.6t-0.3-0.6q-0.2-0.2-0.5-0.2t-0.6 0.2q-0.9 0.9-2.7 1.4t-3.6 0.4-3.6-0.4-2.7-1.4q-0.2-0.2-0.5-0.2t-0.6 0.2q-0.3 0.2-0.3 0.6t0.3 0.6q1 0.9 2.6 1.5t2.8 0.6 2 0.1 2-0.1 2.8-0.6 2.6-1.6z m-0.1-4.6q1.4 0 2.4-1t1-2.4q0-1.3-1-2.3t-2.4-1q-1.3 0-2.3 1t-1 2.3 1 2.4 2.3 1z"></path></g>
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

export default IconRedditAlien

