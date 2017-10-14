

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

class IconBarcode extends React.Component<Props, State> {

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
                    <g><path d="m1.4 34.3h-1.4v-31.4h1.4v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m2.1 0h-0.7v-31.4h0.7v31.4z m3.5 0h-0.7v-31.4h0.7v31.4z m3.5 0h-1.4v-31.4h1.4v31.4z m2.8 0h-0.7v-31.4h0.7v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m1.4 0h-0.6v-31.4h0.6v31.4z m3.6 0h-1.5v-31.4h1.4v31.4z m3.5 0h-1.5v-31.4h1.5v31.4z m2.8 0h-1.4v-31.4h1.4v31.4z m2.8 0h-1.4v-31.4h1.4v31.4z m2.1 0h-1.4v-31.4h1.4v31.4z m4.2 0h-2.1v-31.4h2.1v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m2.1 0h-1.4v-31.4h1.4v31.4z"></path></g>
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

export default IconBarcode

