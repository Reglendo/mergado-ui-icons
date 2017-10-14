

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

class IconObjectUngroup extends React.Component<Props, State> {

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
                    <g><path d="M40.3 17.8h-2.2V29h2.2v6.7h-6.7v-2.3H17.9v2.3h-6.7V29h2.2v-2.3H6.7V29H0v-6.8h2.2V11H0V4.3h6.7v2.3h15.7V4.3h6.7V11h-2.2v2.3h6.7V11h6.7v6.8zm-4.4-4.5v2.2h2.2v-2.2h-2.2zM24.7 6.6v2.2h2.2V6.6h-2.2zm-22.5 0v2.2h2.3V6.6H2.2zm2.3 20.1v-2.2H2.2v2.2h2.3zm22.4-2.2h-2.2v2.2h2.2v-2.2zm-20.2 0h15.7v-2.3h2.3V11h-2.3V8.8H6.7V11H4.5v11.2h2.2v2.3zm9 8.9v-2.2h-2.3v2.2h2.3zm22.4 0v-2.2h-2.2v2.2h2.2zM35.9 29V17.8h-2.3v-2.3h-6.7v6.7h2.2V29h-6.7v-2.3h-6.7V29h2.2v2.2h15.7V29h2.3z"></path></g>
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

export default IconObjectUngroup

