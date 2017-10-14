

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

class IconListOl extends React.Component<Props, State> {

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
                    <g><path d="M8.5 36.2q0 1.7-1.2 2.8t-3 1q-2.4 0-3.9-1.5l1.3-1.9q1.1 1 2.4 1 .6 0 1.1-.4t.5-.9q0-1.4-2.4-1.3l-.6-1.2q.2-.2.8-1t.9-1.2.8-.8v-.1q-.3 0-1 .1t-1.1 0V32H.7v-3.4h7.4v1.9L6 33.1q1.2.3 1.8 1.1t.7 2zm0-14v3.5h-8q-.2-.8-.2-1.2 0-1.1.6-2.1t1.2-1.5 1.5-1 1.3-1 .5-1q0-.6-.3-.9t-.9-.3q-1.1 0-1.8 1.3L.5 16.7q.5-1.1 1.6-1.8t2.3-.6q1.6 0 2.8.9t1.1 2.5q0 1.1-.8 2.1t-1.7 1.4-1.6 1.1-.8 1.2h2.8v-1.3h2.4zM40 29.3v4.3q0 .3-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h27.2q.3 0 .5.2t.2.5zM8.6 9.2v2.2H1.1V9.2h2.4V3.5q-.2.4-1.2 1.2L.8 3l3-2.8h2.4v9h2.4zM40 17.9v4.2q0 .3-.2.5t-.5.3H12.1q-.2 0-.5-.3t-.2-.5v-4.2q0-.4.2-.6t.5-.2h27.2q.3 0 .5.3t.2.5zm0-11.5v4.3q0 .3-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5V6.4q0-.3.2-.5t.5-.2h27.2q.3 0 .5.2t.2.5z"></path></g>
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

export default IconListOl

