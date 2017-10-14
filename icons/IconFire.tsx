

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

class IconFire extends React.Component<Props, State> {

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
                    <g><path d="m35.9 37.9v1.4q0 0.3-0.2 0.5t-0.5 0.2h-30q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.3h30q0.3 0 0.5 0.3t0.2 0.5z m-5.7-23.6q0 1.7-0.5 3.2t-1.5 2.5-1.9 2-2.2 1.7-1.9 1.6-1.4 1.8-0.6 2.2q0 2.1 1.5 5l-0.1 0 0 0q-2-0.9-3.5-1.9t-3.1-2.2-2.6-2.7-1.6-3.4-0.6-4.1q0-1.7 0.6-3.2t1.4-2.5 1.9-2 2.2-1.7 1.9-1.6 1.5-1.8 0.5-2.2q0-2.1-1.5-5l0.1 0 0 0q2 0.9 3.6 1.9t3 2.2 2.6 2.7 1.6 3.4 0.6 4.1z"></path></g>
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

export default IconFire

