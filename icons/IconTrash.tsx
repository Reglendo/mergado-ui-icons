

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

class IconTrash extends React.Component<Props, State> {

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
                    <g><path d="m15.9 30.7v-15.7q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.7 0v-15.7q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.8 0v-15.7q0-0.3-0.2-0.5t-0.6-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.4 0 0.6-0.2t0.2-0.5z m-12.2-22.1h10l-1.1-2.6q-0.1-0.2-0.3-0.3h-7.1q-0.2 0.1-0.4 0.3z m20.7 0.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-2.1v21.2q0 1.8-1.1 3.2t-2.5 1.3h-18.6q-1.4 0-2.5-1.3t-1-3.1v-21.3h-2.2q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h6.9l1.6-3.8q0.3-0.8 1.2-1.4t1.7-0.5h7.2q0.9 0 1.8 0.5t1.2 1.4l1.5 3.8h6.9q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconTrash

