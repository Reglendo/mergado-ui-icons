

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

class IconTrello extends React.Component<Props, State> {

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
                    <g><path d="m18.7 30v-22.9q0-0.3-0.2-0.5t-0.5-0.2h-10.7q-0.3 0-0.5 0.2t-0.2 0.5v22.9q0 0.3 0.2 0.5t0.5 0.2h10.7q0.3 0 0.5-0.2t0.2-0.5z m15-8.6v-14.3q0-0.3-0.2-0.5t-0.5-0.2h-10.7q-0.3 0-0.5 0.2t-0.2 0.5v14.3q0 0.3 0.2 0.5t0.5 0.2h10.7q0.3 0 0.5-0.2t0.2-0.5z m3.6-17.1v31.4q0 0.6-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-31.4q0-0.6 0.4-1t1-0.4h31.5q0.5 0 1 0.4t0.4 1z"></path></g>
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

export default IconTrello

