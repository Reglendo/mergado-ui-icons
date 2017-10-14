

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
                    <g><path d="m40.3 17.8h-2.2v11.2h2.2v6.7h-6.7v-2.3h-15.7v2.3h-6.7v-6.7h2.2v-2.3h-6.7v2.3h-6.7v-6.8h2.2v-11.2h-2.2v-6.7h6.7v2.3h15.7v-2.3h6.7v6.7h-2.2v2.3h6.7v-2.3h6.7v6.8z m-4.4-4.5v2.2h2.2v-2.2h-2.2z m-11.2-6.7v2.2h2.2v-2.2h-2.2z m-22.5 0v2.2h2.3v-2.2h-2.3z m2.3 20.1v-2.2h-2.3v2.2h2.3z m22.4-2.2h-2.2v2.2h2.2v-2.2z m-20.2 0h15.7v-2.3h2.3v-11.2h-2.3v-2.2h-15.7v2.2h-2.2v11.2h2.2v2.3z m9 8.9v-2.2h-2.3v2.2h2.3z m22.4 0v-2.2h-2.2v2.2h2.2z m-2.2-4.4v-11.2h-2.3v-2.3h-6.7v6.7h2.2v6.8h-6.7v-2.3h-6.7v2.3h2.2v2.2h15.7v-2.2h2.3z"></path></g>
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

