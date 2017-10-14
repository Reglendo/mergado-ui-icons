

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

class IconAndroid extends React.Component<Props, State> {

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
                    <g><path d="M15.5 10.8q.4 0 .6-.3t.3-.6-.3-.6-.6-.3-.6.3-.2.6.2.6.6.3zm9.4 0q.4 0 .6-.3t.3-.6-.3-.6-.6-.3-.6.3-.2.6.2.6.6.3zM6.8 14.9q.9 0 1.6.7t.7 1.6v9.6q0 .9-.7 1.6t-1.6.7-1.6-.7-.7-1.6v-9.6q0-1 .7-1.6t1.6-.7zm23.7.4v14.9q0 1-.8 1.7t-1.7.7h-1.6v5.1q0 1-.7 1.6t-1.6.7-1.7-.7-.6-1.6v-5.1h-3.1v5.1q0 1-.7 1.6t-1.6.7q-1 0-1.6-.7t-.7-1.6v-5.1h-1.7q-1 0-1.7-.7t-.7-1.7V15.3h20.5zm-5.2-9q2.4 1.2 3.8 3.4t1.4 4.8H9.9q0-2.6 1.4-4.8t3.8-3.4l-1.5-3q-.2-.2.1-.4.3-.1.4.1l1.6 3q2.1-1 4.5-1t4.5 1l1.6-3q.2-.2.5-.1.2.2.1.4zm10.6 10.9v9.6q0 .9-.6 1.6t-1.7.7q-.9 0-1.6-.7t-.6-1.6v-9.6q0-1 .6-1.7t1.6-.6q1 0 1.7.6t.6 1.7z"></path></g>
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

export default IconAndroid

