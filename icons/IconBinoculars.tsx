

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

class IconBinoculars extends React.Component<Props, State> {

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
                    <g><path d="m15.7 7.1v17.2q0 0.6-0.4 1t-1 0.4v12.9q0 0.5-0.4 1t-1 0.4h-11.5q-0.6 0-1-0.4t-0.4-1v-11.5l5.6-19.4q0.1-0.6 0.7-0.6h9.4z m7.2 0v15.8h-5.8v-15.8h5.8z m17.1 20v11.5q0 0.6-0.4 1t-1 0.4h-11.5q-0.5 0-1-0.4t-0.4-1v-12.9q-0.6 0-1-0.4t-0.4-1v-17.2h9.5q0.5 0 0.6 0.6z m-23.6-26.4v5h-7.8v-5q0-0.3 0.2-0.5t0.5-0.2h6.4q0.3 0 0.5 0.2t0.2 0.5z m15 0v5h-7.8v-5q0-0.3 0.2-0.5t0.5-0.2h6.4q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconBinoculars

