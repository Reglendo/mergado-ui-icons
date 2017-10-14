

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

class IconForumbee extends React.Component<Props, State> {

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
                    <g><path d="M23.8 3.3q-7 2.7-12.4 8.1t-8 12.5Q3 22 3 20q0-4.6 2.3-8.6t6.2-6.2 8.6-2.3q1.8 0 3.7.4zM29.9 6q2 1.5 3.6 3.5-8.7 2.5-15 8.9T9.6 33.5q-2.1-1.6-3.5-3.6 2.5-8.6 8.9-15T29.9 6zM13.5 35.8q2.6-8 8.5-13.9t13.8-8.6q.9 2.1 1.2 4.4-6.5 2.7-11.5 7.7t-7.7 11.5q-2.3-.3-4.3-1.1zm23.8 1.3Q33 36 29.1 34.5q-3 1.9-6.5 2.4 2.5-4.6 6.1-8.3t8.3-6.1q-.5 3.4-2.3 6.3 1.5 3.9 2.6 8.3z"></path></g>
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

export default IconForumbee

