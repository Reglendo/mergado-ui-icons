

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

class IconMapSigns extends React.Component<Props, State> {

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
                    <g><path d="m39 6.6q0.2 0.3 0.2 0.5t-0.2 0.6l-3.2 3.1q-0.6 0.6-1.5 0.6h-30q-0.6 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.4h12.8v-1.5q0-0.6 0.5-1t1-0.4h2.8q0.6 0 1 0.4t0.5 1v1.5h11.4q0.9 0 1.5 0.6z m-21.9 20.5h5.8v11.5q0 0.6-0.5 1t-1 0.4h-2.8q-0.6 0-1-0.4t-0.5-1v-11.5z m18.6-10q0.6 0 1 0.5t0.4 1v5.7q0 0.6-0.4 1t-1 0.4h-30q-0.9 0-1.5-0.6l-3.1-3.2q-0.3-0.2-0.3-0.5t0.2-0.5l3.2-3.1q0.6-0.7 1.5-0.7h11.4v-4.2h5.8v4.2h12.8z"></path></g>
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

export default IconMapSigns

