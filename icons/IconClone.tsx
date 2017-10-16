

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

class IconClone extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--clone ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M37.1 36.4V12.1q0-.2-.2-.5t-.5-.2H12.1q-.2 0-.5.2t-.2.5v24.3q0 .3.2.5t.5.2h24.3q.3 0 .5-.2t.2-.5zM40 12.1v24.3q0 1.5-1 2.6t-2.6 1H12.1q-1.4 0-2.5-1t-1-2.6V12.1q0-1.4 1-2.5t2.5-1h24.3q1.5 0 2.6 1t1 2.5zm-8.6-8.5v3.5h-2.8V3.6q0-.3-.2-.5t-.5-.2H3.6q-.3 0-.5.2t-.2.5v24.3q0 .2.2.5t.5.2h3.5v2.8H3.6q-1.5 0-2.6-1t-1-2.5V3.6q0-1.5 1.1-2.5T3.6 0h24.3q1.4 0 2.5 1.1t1 2.5z"></path></g>
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

export default IconClone

