

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
    className?: string
}
export interface State {
}

class IconCodepen extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
    }

    render() {
        let className = `muk-icon ${this.name}--codepen ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M4.8 26.1l13.5 9v-8l-7.5-5zm-1.4-3.2L7.7 20l-4.3-2.9v5.8zm18.3 12.2l13.5-9-6-4-7.5 5v8zm-1.7-11l6.1-4.1-6.1-4.1-6.1 4.1zm-9.2-6.2l7.5-5v-8l-13.5 9zM32.3 20l4.3 2.9v-5.8zm-3.1-2.1l6-4-13.5-9v8zm10.8-4v12.2q0 .9-.8 1.4L21 39.7q-.5.3-1 .3t-1-.3L.8 27.5Q0 27 0 26.1V13.9q0-.9.8-1.4L19 .3q.5-.3 1-.3t1 .3l18.2 12.2q.8.5.8 1.4z"></path></g>
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

export default IconCodepen

