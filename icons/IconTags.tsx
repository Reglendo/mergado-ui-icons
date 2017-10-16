

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

class IconTags extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--tags ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M9.5 10.5q0-1.2-.8-1.9t-1.9-.8-1.9.8-.8 1.9.8 1.9 1.9.8 1.9-.8.8-1.9zm22.7 12.2q0 1.1-.8 1.9L21 35.1q-.8.8-2 .8-1.1 0-1.9-.8L1.9 19.9q-.8-.8-1.3-2.2T0 15.2V6.4q0-1.1.8-1.9t1.9-.8h8.9q1.1 0 2.5.5t2.1 1.4l15.2 15.2q.8.8.8 1.9zm8.2 0q0 1.1-.8 1.9L29.1 35.1q-.8.8-1.9.8-.8 0-1.2-.3t-1.2-1l10-10q.8-.8.8-1.9 0-1.1-.8-1.9L19.6 5.6q-.8-.8-2.1-1.4T15 3.7h4.7q1.2 0 2.5.5t2.2 1.4l15.2 15.2q.8.8.8 1.9z"></path></g>
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

export default IconTags

