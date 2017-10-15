

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

class IconTree extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--tree ${this.props.addClass}`

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
                    <g><path d="M36.6 32.9q0 .5-.5 1t-1 .4H24.8q.1.4.2 1.9t.1 2.5q0 .5-.4.9t-1 .4h-7.1q-.6 0-1-.4t-.4-.9q0-.9.1-2.5t.2-1.9H5.1q-.5 0-1-.4t-.4-1 .4-1l9-9H8q-.6 0-1-.5t-.4-1 .4-1l9-9h-4.4q-.6 0-1-.4t-.5-1 .5-1L19.1.4q.5-.4 1-.4t1 .4L29.7 9q.4.4.4 1t-.4 1-1 .4h-4.4l9 9q.4.4.4 1t-.4 1-1 .5h-5.1l8.9 8.9q.5.5.5 1.1z"></path></g>
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

export default IconTree

