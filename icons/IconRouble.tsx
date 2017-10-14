

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

class IconRouble extends React.Component<Props, State> {

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
                    <g><path d="m28.8 12.6q0-2.2-1.5-3.6t-3.8-1.4h-7.1v10h7.1q2.4 0 3.8-1.4t1.5-3.6z m5.3 0q0 4.3-2.9 7t-7.2 2.8h-7.6v2.6h11.2q0.4 0 0.6 0.2t0.2 0.5v2.9q0 0.3-0.2 0.5t-0.6 0.2h-11.2v4.3q0 0.3-0.2 0.5t-0.5 0.2h-3.8q-0.3 0-0.5-0.2t-0.2-0.5v-4.3h-5q-0.3 0-0.5-0.2t-0.2-0.5v-2.9q0-0.3 0.2-0.5t0.5-0.2h5v-2.6h-5q-0.3 0-0.5-0.2t-0.2-0.6v-3.3q0-0.3 0.2-0.5t0.5-0.2h5v-14q0-0.3 0.2-0.5t0.5-0.2h12.1q4.4 0 7.2 2.7t2.9 7z"></path></g>
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

export default IconRouble

