

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

class IconCube extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--cube ${this.props.addClass}`

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
                    <g><path d="M21.5 36.4l14.3-7.8V14.4l-14.3 5.2v16.8zm-1.4-19.3l15.5-5.7-15.5-5.7-15.6 5.7zm18.5-5.7v17.2q0 .8-.4 1.4t-1.1 1.1l-15.7 8.5q-.6.4-1.3.4t-1.4-.4L3 31.1q-.7-.4-1.1-1.1t-.4-1.4V11.4q0-.9.5-1.6t1.4-1.1L19.1 3q.5-.1 1-.1t1 .1l15.7 5.8q.8.3 1.3 1t.5 1.6z"></path></g>
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

export default IconCube

