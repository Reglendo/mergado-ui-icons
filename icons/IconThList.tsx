

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

class IconThList extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--th-list ${this.props.addClass}`

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
                    <g><path d="M11.4 27.9v4.2q0 .9-.6 1.6t-1.5.6H2.1q-.9 0-1.5-.6T0 32.1v-4.2q0-.9.6-1.6t1.5-.6h7.2q.9 0 1.5.6t.6 1.6zm0-11.5v4.3q0 .9-.6 1.5t-1.5.7H2.1q-.9 0-1.5-.7T0 20.7v-4.3q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zM40 27.9v4.2q0 .9-.6 1.6t-1.5.6H16.4q-.9 0-1.5-.6t-.6-1.6v-4.2q0-.9.6-1.6t1.5-.6h21.5q.9 0 1.5.6t.6 1.6zM11.4 5v4.3q0 .9-.6 1.5t-1.5.6H2.1q-.9 0-1.5-.6T0 9.3V5q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zM40 16.4v4.3q0 .9-.6 1.5t-1.5.7H16.4q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h21.5q.9 0 1.5.6t.6 1.5zM40 5v4.3q0 .9-.6 1.5t-1.5.6H16.4q-.9 0-1.5-.6t-.6-1.5V5q0-.9.6-1.5t1.5-.6h21.5q.9 0 1.5.6T40 5z"></path></g>
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

export default IconThList

