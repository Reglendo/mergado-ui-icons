

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

class IconServer extends React.Component<Props, State> {

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
                    <g><path d="M2.9 31.4h22.8v-2.8H2.9v2.8zm0-11.4h22.8v-2.9H2.9V20zm35 10q0-.9-.7-1.5t-1.5-.6-1.5.6-.6 1.5.6 1.5 1.5.6 1.5-.6.7-1.5zM2.9 8.6h22.8V5.7H2.9v2.9zm35 10q0-.9-.7-1.5t-1.5-.7-1.5.7-.6 1.5.6 1.5 1.5.6 1.5-.6.7-1.5zm0-11.5q0-.8-.7-1.5T35.7 5t-1.5.6-.6 1.5.6 1.6 1.5.6 1.5-.6.7-1.6zM40 25.7v8.6H0v-8.6h40zm0-11.4v8.6H0v-8.6h40zm0-11.4v8.5H0V2.9h40z"></path></g>
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

export default IconServer

