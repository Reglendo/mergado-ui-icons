

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

class IconXing extends React.Component<Props, State> {

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
                    <g><path d="m17.8 14.9q-0.2 0.4-5.7 10.2-0.6 1-1.5 1h-5.3q-0.5 0-0.7-0.4t0-0.8l5.7-10q0 0 0 0l-3.6-6.2q-0.3-0.5-0.1-0.9 0.2-0.3 0.8-0.3h5.3q0.9 0 1.5 1z m18-14.3q0.3 0.3 0 0.8l-11.8 20.8v0.1l7.5 13.7q0.3 0.4 0.1 0.8-0.3 0.3-0.8 0.3h-5.3q-0.9 0-1.5-1l-7.5-13.8 11.8-21.1q0.6-1 1.4-1h5.4q0.5 0 0.7 0.4z"></path></g>
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

export default IconXing

