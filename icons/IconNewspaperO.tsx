

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

class IconNewspaperO extends React.Component<Props, State> {

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
                    <g><path d="m19.9 12.5h-7.5v7.5h7.5v-7.5z m2.5 12.5v2.5h-12.5v-2.5h12.5z m0-14.9v12.4h-12.5v-12.4h12.5z m12.4 14.9v2.5h-10v-2.5h10z m0-5v2.5h-10v-2.5h10z m0-5v2.5h-10v-2.5h10z m0-4.9v2.4h-10v-2.4h10z m-29.8 18.6v-18.6h-2.5v18.6q0 0.5 0.4 0.9t0.8 0.3 0.9-0.3 0.4-0.9z m32.3 0v-21.1h-29.8v21.1q0 0.6-0.3 1.2h28.8q0.5 0 0.9-0.3t0.4-0.9z m2.5-23.6v23.6q0 1.5-1.1 2.6t-2.7 1.1h-32.3q-1.5 0-2.6-1.1t-1.1-2.6v-21.1h5v-2.5h34.8z"></path></g>
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

export default IconNewspaperO

