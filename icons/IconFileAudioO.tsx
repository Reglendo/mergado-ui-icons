

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

class IconFileAudioO extends React.Component<Props, State> {

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
                    <g><path d="m35.8 8.5q0.6 0.6 1 1.7t0.5 1.9v25.8q0 0.8-0.6 1.5t-1.6 0.6h-30q-0.9 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h20q0.9 0 2 0.4t1.7 1.1z m-9.9-5.5v8.4h8.4q-0.3-0.6-0.5-0.9l-7-7q-0.3-0.2-0.9-0.5z m8.5 34.1v-22.8h-9.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-17.1v34.2h28.5z m-17.6-18.1q0.5 0.2 0.5 0.6v12.2q0 0.5-0.5 0.7-0.1 0-0.2 0-0.3 0-0.5-0.2l-3.7-3.7h-3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h3l3.7-3.8q0.3-0.3 0.7-0.1z m9.3 15.4q0.7 0 1.2-0.6 2.8-3.5 2.8-8.1t-2.8-8.1q-0.4-0.5-1-0.5t-1 0.3q-0.5 0.4-0.6 1t0.4 1q2.2 2.8 2.2 6.3t-2.2 6.3q-0.4 0.5-0.4 1.1t0.6 0.9q0.4 0.4 0.8 0.4z m-4.7-3.4q0.6 0 1.1-0.4 1.9-2.1 1.9-4.9t-1.9-4.9q-0.4-0.4-1-0.4t-1 0.4-0.5 1 0.4 1q1.2 1.3 1.2 2.9t-1.2 2.9q-0.4 0.5-0.4 1.1t0.5 1q0.4 0.4 0.9 0.4z"></path></g>
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

export default IconFileAudioO

