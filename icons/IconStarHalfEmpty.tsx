

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

class IconStarHalfEmpty extends React.Component<Props, State> {

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
                    <g><path d="M28 21.4l5.7-5.6-9.4-1.4-.7-1.3-3.5-7.2v21.5l1.3.7 7.1 3.7-1.4-7.9-.2-1.5zm10.1-5.9L30 23.4l1.9 11.2q.1.7-.2 1.1t-.7.4q-.4 0-.9-.2l-10-5.3-10 5.3q-.6.2-.9.2-.6 0-.8-.4t-.1-1.1l1.9-11.2-8.1-7.9q-.8-.7-.6-1.3t1.3-.8L14 11.8l5-10.2q.4-.9 1.1-.9.6 0 1.1.9l5 10.2 11.2 1.6q1 .2 1.2.8t-.5 1.3z"></path></g>
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

export default IconStarHalfEmpty

