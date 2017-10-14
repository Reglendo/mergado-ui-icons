

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

class IconExpand extends React.Component<Props, State> {

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
                    <g><path d="m19.9 23.6q0 0.3-0.3 0.5l-7.4 7.4 3.2 3.2q0.5 0.4 0.5 1t-0.5 1-1 0.4h-10q-0.6 0-1-0.4t-0.4-1v-10q0-0.6 0.4-1t1-0.4 1 0.4l3.2 3.2 7.5-7.4q0.2-0.2 0.5-0.2t0.5 0.2l2.5 2.6q0.3 0.2 0.3 0.5z m17.4-19.3v10q0 0.6-0.4 1t-1 0.4-1-0.4l-3.3-3.2-7.4 7.4q-0.2 0.2-0.5 0.2t-0.5-0.2l-2.5-2.6q-0.3-0.2-0.3-0.5t0.3-0.5l7.4-7.4-3.2-3.2q-0.5-0.4-0.5-1t0.5-1 1-0.4h10q0.5 0 1 0.4t0.4 1z"></path></g>
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

export default IconExpand

