

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

class IconVolumeUp extends React.Component<Props, State> {

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
                    <g><path d="M18.6 7.9v24.2q0 .6-.4 1t-1 .5-1-.5l-7.4-7.4H2.9q-.6 0-1-.4t-.4-1v-8.6q0-.6.4-1t1-.4h5.9l7.4-7.4q.4-.5 1-.5t1 .5.4 1zM27.2 20q0 1.7-.9 3.2t-2.5 2q-.3.2-.6.2-.6 0-1-.5t-.4-1q0-.4.2-.8t.7-.5.7-.5.7-.8.3-1.3-.3-1.3-.7-.8-.7-.5-.7-.5-.2-.8q0-.6.4-1t1-.5q.3 0 .6.2 1.5.6 2.5 2t.9 3.2zm5.7 0q0 3.4-1.9 6.3t-5 4.2q-.3.1-.5.1-.7 0-1.1-.4t-.4-1q0-.9.9-1.3 1.2-.7 1.7-1 1.6-1.2 2.5-3t1-3.9-1-3.9-2.5-3q-.5-.3-1.7-1-.9-.4-.9-1.3 0-.6.4-1t1-.4q.3 0 .6.1 3.1 1.3 5 4.2t1.9 6.3zm5.7 0q0 5.1-2.8 9.4t-7.5 6.4q-.3.1-.6.1-.6 0-1-.5t-.4-1q0-.8.8-1.3.2-.1.5-.2t.5-.2q1.1-.6 1.9-1.2 2.7-2 4.2-5t1.6-6.5-1.6-6.4T30 8.5q-.8-.6-1.9-1.2-.1 0-.5-.2t-.5-.2q-.8-.5-.8-1.3 0-.6.4-1t1-.5q.3 0 .6.1 4.7 2.1 7.5 6.4t2.8 9.4z"></path></g>
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

export default IconVolumeUp

