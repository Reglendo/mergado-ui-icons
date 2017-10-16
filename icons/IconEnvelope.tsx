

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

class IconEnvelope extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--envelope ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M40 15.8v17.8q0 1.4-1 2.5t-2.6 1H3.6q-1.5 0-2.6-1t-1-2.5V15.8q1 1.1 2.3 2 8 5.5 11 7.7 1.3.9 2.1 1.5t2.1 1 2.5.6q1.2 0 2.5-.6t2.1-1 2.1-1.5q3.7-2.8 11.1-7.7 1.2-.9 2.2-1.9zm0-6.5q0 1.7-1.1 3.4t-2.7 2.7q-8.4 5.8-10.5 7.3-.2.1-.9.6t-1.2.9-1.2.7-1.3.6-1.1.2q-.5 0-1.1-.2t-1.3-.6-1.2-.7-1.2-.9-.9-.6q-2.1-1.5-5.9-4.1t-4.6-3.2q-1.3-.9-2.6-2.6T0 9.8Q0 8 .9 6.9t2.7-1.2h32.8q1.5 0 2.5 1.1T40 9.3z"></path></g>
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

export default IconEnvelope

