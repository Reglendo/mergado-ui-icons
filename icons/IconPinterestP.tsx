

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

class IconPinterestP extends React.Component<Props, State> {

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
                    <g><path d="m5.5 13.3q0-2.4 0.8-4.5t2.3-3.7 3.4-2.8 4.2-1.7 4.5-0.6q3.5 0 6.5 1.5t5 4.3 1.9 6.4q0 2.2-0.5 4.2t-1.3 4-2.2 3.3-3.3 2.3-4.2 0.9q-1.5 0-3-0.8t-2.1-1.9q-0.3 0.8-0.7 2.5t-0.5 2.1-0.4 1.6-0.6 1.6-0.7 1.4-1.1 1.7-1.4 1.9l-0.3 0.1-0.2-0.2q-0.3-3.5-0.3-4.2 0-2 0.5-4.6t1.5-6.4 1.1-4.5q-0.7-1.5-0.7-3.8 0-1.9 1.2-3.5t2.9-1.6q1.4 0 2.1 0.9t0.8 2.3q0 1.5-1 4.2t-1 4.2q0 1.4 1 2.3t2.5 1q1.2 0 2.3-0.6t1.7-1.5 1.3-2.1 0.8-2.5 0.4-2.5 0.2-2.2q0-3.9-2.5-6t-6.3-2.2q-4.5 0-7.5 2.9t-3 7.4q0 0.9 0.3 1.9t0.6 1.4 0.6 1 0.3 0.7q0 0.6-0.3 1.6t-0.9 1q0 0-0.3 0-1.2-0.4-2.1-1.3t-1.3-2.1-0.8-2.4-0.2-2.4z"></path></g>
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

export default IconPinterestP

