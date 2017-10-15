

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

class IconIntersex extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--intersex ${this.props.addClass}`

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
                    <g><path d="M27.4.7q0-.3.2-.5t.5-.2h6.4q.6 0 1 .4t.4 1v6.5q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5v-3l-5.7 5.7q2.8 3.5 2.8 8 0 4.9-3.3 8.6t-8.1 4.1v3h2.1q.3 0 .5.2t.2.5v1.4q0 .3-.2.5t-.5.2h-2.1v2.2q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-2.2h-2.1q-.3 0-.5-.2t-.2-.5V35q0-.3.2-.5t.5-.2h2.1v-3q-3.3-.3-6-2.3t-4.2-4.9-1.2-6.6q.4-4.5 3.6-7.8t7.8-3.9q2.6-.3 5.1.4t4.4 2.3l5.7-5.6h-3q-.3 0-.5-.2t-.2-.6V.7zm-10 27.9q4.1 0 7-3t3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7 7.1 3z"></path></g>
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

export default IconIntersex

