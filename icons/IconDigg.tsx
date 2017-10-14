

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

class IconDigg extends React.Component<Props, State> {

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
                    <g><path d="m6.4 8.1h3.9v19.1h-10.3v-13.6h6.4v-5.5z m0 15.9v-7.2h-2.4v7.2h2.4z m5.5-10.4v13.6h4v-13.6h-4z m0-5.5v3.9h4v-3.9h-4z m5.6 5.5h10.3v18.3h-10.3v-3.1h6.4v-1.6h-6.4v-13.6z m6.4 10.4v-7.2h-2.4v7.2h2.4z m5.5-10.4h10.4v18.3h-10.4v-3.1h6.4v-1.6h-6.4v-13.6z m6.4 10.4v-7.2h-2.4v7.2h2.4z"></path></g>
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

export default IconDigg

