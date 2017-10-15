

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

class IconBriefcase extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--briefcase ${this.props.addClass}`

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
                    <g><path d="M14.3 5.7h11.4V2.9H14.3v2.8zM40 20v10.7q0 1.5-1 2.5t-2.6 1.1H3.6q-1.5 0-2.6-1.1t-1-2.5V20h15v3.6q0 .5.4 1t1 .4h7.2q.6 0 1-.4t.4-1V20h15zm-17.1 0v2.9h-5.8V20h5.8zM40 9.3v8.6H0V9.3q0-1.5 1.1-2.5t2.5-1.1h7.8V2.1q0-.8.7-1.5t1.5-.6h12.8q.9 0 1.5.6t.7 1.5v3.6h7.8q1.5 0 2.6 1.1t1 2.5z"></path></g>
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

export default IconBriefcase

