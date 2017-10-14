

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

class IconCommenting extends React.Component<Props, State> {

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
                    <g><path d="M14.3 20q0-1.2-.9-2t-2-.9-2 .9-.8 2 .8 2 2 .9 2-.9.9-2zm8.6 0q0-1.2-.9-2t-2-.9-2 .9-.9 2 .9 2 2 .9 2-.9.9-2zm8.5 0q0-1.2-.8-2t-2-.9-2 .9-.9 2 .9 2 2 .9 2-.9.8-2zm8.6 0q0 3.9-2.7 7.2T30 32.4t-10 1.9q-2.5 0-4.7-.4-3.9 3.8-9.7 5.1-1.2.2-1.9.3-.3 0-.5-.1t-.3-.4q-.1-.4.4-.9l.5-.5q.4-.4.6-.5t.5-.5.6-.8.4-.8.5-1 .3-1.3.3-1.6Q3.7 28.8 1.9 26T0 20q0-3.9 2.7-7.2T10 7.6t10-1.9 10 1.9 7.3 5.2T40 20z"></path></g>
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

export default IconCommenting

