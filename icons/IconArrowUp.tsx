

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

class IconArrowUp extends React.Component<Props, State> {

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
                    <g><path d="m37.5 21.7q0 1.1-0.9 2l-1.6 1.7q-0.9 0.8-2.1 0.8-1.2 0-2-0.8l-6.5-6.6v15.7q0 1.2-0.9 1.9t-2 0.7h-2.9q-1.1 0-2-0.7t-0.8-1.9v-15.7l-6.6 6.6q-0.8 0.8-2 0.8t-2-0.8l-1.7-1.7q-0.8-0.9-0.8-2 0-1.2 0.8-2.1l14.6-14.5q0.7-0.8 2-0.8 1.2 0 2 0.8l14.5 14.5q0.9 0.9 0.9 2.1z"></path></g>
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

export default IconArrowUp

