

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

class IconDownload extends React.Component<Props, State> {

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
                    <g><path d="m30.1 30q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m5.7 0q0-0.6-0.4-1t-1-0.4-1 0.4-0.5 1 0.5 1 1 0.4 1-0.4 0.4-1z m2.8-5v7.1q0 0.9-0.6 1.6t-1.5 0.6h-32.9q-0.8 0-1.5-0.6t-0.6-1.6v-7.1q0-0.9 0.6-1.5t1.5-0.6h10.4l3 3q1.3 1.2 3.1 1.2t3-1.2l3-3h10.4q0.9 0 1.5 0.6t0.6 1.5z m-7.2-12.7q0.4 0.9-0.3 1.6l-10 10q-0.4 0.4-1 0.4t-1-0.4l-10-10q-0.7-0.7-0.3-1.6 0.3-0.9 1.3-0.9h5.7v-10q0-0.6 0.4-1t1-0.4h5.7q0.6 0 1 0.4t0.5 1v10h5.7q0.9 0 1.3 0.9z"></path></g>
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

export default IconDownload

