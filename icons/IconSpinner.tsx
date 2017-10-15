

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

class IconSpinner extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--spinner ${this.props.addClass}`

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
                    <g><path d="M11.7 31.1q0 1.2-.8 2t-2 .9q-1.2 0-2-.9t-.9-2q0-1.2.9-2t2-.8 2 .8.8 2zm11.2 4.6q0 1.2-.9 2t-2 .9-2-.9-.9-2 .9-2 2-.8 2 .8.9 2zM7.1 20q0 1.2-.8 2t-2 .9-2-.9-.9-2 .9-2 2-.9 2 .9.8 2zM34 31.1q0 1.2-.9 2t-2 .9q-1.2 0-2-.9t-.8-2 .8-2 2-.8 2 .8.9 2zM12.5 8.9q0 1.5-1.1 2.5t-2.5 1.1-2.5-1.1-1.1-2.5 1.1-2.5 2.5-1.1 2.5 1.1 1.1 2.5zM38.6 20q0 1.2-.9 2t-2 .9-2-.9-.8-2 .8-2 2-.9 2 .9.9 2zM24.3 4.3q0 1.8-1.3 3t-3 1.3-3-1.3-1.3-3T17 1.2 20 0t3 1.3 1.3 3zm11.8 4.6q0 2.1-1.5 3.5t-3.5 1.5q-2.1 0-3.5-1.5t-1.5-3.5q0-2.1 1.5-3.5t3.5-1.5q2.1 0 3.5 1.5t1.5 3.5z"></path></g>
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

export default IconSpinner

