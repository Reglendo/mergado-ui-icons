

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

class IconListUl extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--list-ul ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M8.6 31.4q0 1.8-1.3 3.1t-3 1.2-3.1-1.2T0 31.4t1.3-3 3-1.3 3 1.3 1.3 3zm0-11.4q0 1.8-1.3 3t-3 1.3T1.2 23 0 20t1.3-3 3-1.3 3 1.3 1.3 3zM40 29.3v4.3q0 .3-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h27.2q.3 0 .5.2t.2.5zM8.6 8.6q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3.1 3-1.2 3 1.2 1.3 3.1zM40 17.9v4.2q0 .3-.2.5t-.5.3H12.1q-.2 0-.5-.3t-.2-.5v-4.2q0-.3.2-.5t.5-.3h27.2q.3 0 .5.3t.2.5zm0-11.5v4.3q0 .3-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5V6.4q0-.3.2-.5t.5-.2h27.2q.3 0 .5.2t.2.5z"></path></g>
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

export default IconListUl

