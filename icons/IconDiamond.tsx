

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

class IconDiamond extends React.Component<Props, State> {

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
                    <g><path d="m4.1 17.5l12.1 12.9-5.8-12.9h-6.3z m15.8 15l6.7-15h-13.5z m-9.5-17.5l4-7.4h-5.1l-5.6 7.4h6.7z m13.1 15.4l12.1-12.9h-6.2z m-10.2-15.4h13.2l-4-7.4h-5.3z m16 0h6.7l-5.6-7.4h-5.1z m2.7-9.4l7.5 9.9q0.3 0.4 0.3 0.8t-0.4 0.8l-18.6 19.9q-0.4 0.4-0.9 0.4t-0.9-0.4l-18.7-19.9q-0.3-0.3-0.3-0.8t0.3-0.8l7.4-9.9q0.4-0.5 1-0.5h22.4q0.6 0 0.9 0.5z"></path></g>
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

export default IconDiamond

