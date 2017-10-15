

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

class IconMarsDouble extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--mars-double ${this.props.addClass}`

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
                    <g><path d="M31.9 10q0-.3.2-.4t.5-.2h5.9q.6 0 1 .4t.4.9v6q0 .3-.2.5t-.5.1h-1.3q-.3 0-.5-.1t-.2-.5v-2.8l-5.3 5.3q1.6 2 2.3 4.4t.2 5.2q-.7 3.7-3.5 6.4t-6.6 3.3q-4.3.6-8-1.7t-5-6.2q-2.4-.1-4.6-1.2T3 26.6t-2.3-4-.7-4.7q.2-2.8 1.6-5.3t3.8-3.9 5.2-1.9q2.4-.3 4.7.4t4.1 2.1l5.3-5.2h-2.8q-.3 0-.4-.2t-.2-.5V2.1q0-.3.2-.5t.4-.2h6q.6 0 .9.4t.4.9v6q0 .3-.1.5t-.5.2h-1.4q-.2 0-.4-.2t-.2-.5V5.9l-5.3 5.3q1.2 1.6 1.9 3.5 3.8.2 6.8 2.6l5.3-5.3h-2.7q-.3 0-.5-.2t-.2-.4V10zm-10.6 8.7q0-.4-.1-1.2-3.4.5-5.6 3.1t-2.3 6q0 .5.1 1.2 3.3-.5 5.6-3.1t2.3-6zm-18.6 0q0 3.5 2.3 6.1t5.7 3.1q-.1-.6-.1-1.3 0-4.3 2.8-7.6t7.1-4.1q-1.1-2.5-3.4-4T12 9.4q-3.9 0-6.6 2.7t-2.7 6.6zm19.9 17.2q3.8 0 6.6-2.7t2.7-6.6q0-3.4-2.3-6.1t-5.7-3.1v1.3q0 4.3-2.8 7.6t-7 4.1q1.1 2.5 3.4 4t5.1 1.5z"></path></g>
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

export default IconMarsDouble

