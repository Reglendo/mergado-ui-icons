

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

class IconChild extends React.Component<Props, State> {

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
                    <g><path d="m32 12.2l-6.5 6.6v18.3q0 1.1-0.7 1.8t-1.8 0.7-1.8-0.7-0.7-1.8v-8.5h-1.4v8.5q0 1.1-0.8 1.8t-1.7 0.7-1.8-0.7-0.7-1.8v-18.3l-6.5-6.6q-0.7-0.6-0.7-1.5t0.7-1.5 1.5-0.6 1.5 0.6l5.1 5.1h8.2l5.1-5.1q0.6-0.6 1.5-0.6t1.5 0.6 0.6 1.5-0.6 1.5z m-7.2-3.6q0 2-1.5 3.5t-3.5 1.5-3.6-1.5-1.4-3.5 1.4-3.6 3.6-1.4 3.5 1.4 1.5 3.6z"></path></g>
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

export default IconChild

