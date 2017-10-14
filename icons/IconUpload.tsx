

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

class IconUpload extends React.Component<Props, State> {

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
                    <g><path d="m30.1 32.9q0-0.6-0.5-1t-1-0.5-1 0.5-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m5.7 0q0-0.6-0.4-1t-1-0.5-1 0.5-0.5 1 0.5 1 1 0.4 1-0.4 0.4-1z m2.8-5v7.1q0 0.9-0.6 1.5t-1.5 0.6h-32.9q-0.8 0-1.5-0.6t-0.6-1.5v-7.1q0-0.9 0.6-1.6t1.5-0.6h9.6q0.4 1.3 1.5 2.1t2.5 0.8h5.7q1.4 0 2.5-0.8t1.6-2.1h9.5q0.9 0 1.5 0.6t0.6 1.6z m-7.2-14.5q-0.4 0.9-1.3 0.9h-5.7v10q0 0.6-0.5 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.4-1v-10h-5.7q-1 0-1.3-0.9-0.4-0.9 0.3-1.5l10-10q0.4-0.5 1-0.5t1 0.5l10 10q0.7 0.6 0.3 1.5z"></path></g>
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

export default IconUpload

