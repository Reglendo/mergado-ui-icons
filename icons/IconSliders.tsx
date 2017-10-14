

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

class IconSliders extends React.Component<Props, State> {

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
                    <g><path d="m10.9 31.4v2.9h-7.9v-2.9h7.9z m7.8-2.8q0.6 0 1 0.4t0.4 1v5.7q0 0.6-0.4 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.4h5.7z m3.6-8.6v2.9h-19.3v-2.9h19.3z m-14.3-11.4v2.8h-5v-2.8h5z m29.3 22.8v2.9h-16.4v-2.9h16.4z m-21.4-25.7q0.5 0 1 0.4t0.4 1v5.8q0 0.5-0.4 1t-1 0.4h-5.8q-0.5 0-1-0.4t-0.4-1v-5.8q0-0.5 0.4-1t1-0.4h5.8z m14.2 11.4q0.6 0 1 0.5t0.5 1v5.7q0 0.6-0.5 1t-1 0.4h-5.7q-0.5 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.5h5.7z m7.2 2.9v2.9h-5v-2.9h5z m0-11.4v2.8h-19.3v-2.8h19.3z"></path></g>
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

export default IconSliders

