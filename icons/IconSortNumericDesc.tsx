

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

class IconSortNumericDesc extends React.Component<Props, State> {

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
                    <g><path d="m33 6.5q0-1.5-0.9-2.6t-2.3-1.2q-1.2 0-1.9 0.8t-0.7 2.1 0.8 2.1 2.4 0.9q1.1 0 1.9-0.6t0.7-1.6z m-13.6 25.6q0 0.3-0.2 0.6l-7.1 7.1q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-7.2-7.1q-0.3-0.4-0.1-0.8 0.1-0.5 0.6-0.5h4.3v-30.7q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v30.7h4.3q0.3 0 0.5 0.2t0.2 0.5z m16.1 5.4v2.5h-10.5v-2.5h3.8v-9.7q0-0.1 0-0.4t0-0.4v-0.3h-0.1l-0.1 0.2q-0.2 0.3-0.6 0.7l-1.4 1.3-1.8-1.9 4.3-4.1h2.7v14.6h3.7z m0.7-29.8q0 1.4-0.3 2.8t-0.9 2.5-1.6 2.1-2.2 1.5-2.8 0.5q-1.4 0-2.4-0.3-0.5-0.2-0.9-0.3l0.8-2.6q0.4 0.2 0.7 0.3 0.8 0.3 1.7 0.3 1.9 0 3-1.3t1.5-3.3h-0.1q-0.4 0.5-1.3 0.8t-1.9 0.4q-2.4 0-3.9-1.6t-1.5-3.9q0-2.3 1.6-4t4.1-1.6q2.7 0 4.5 2.1t1.9 5.6z"></path></g>
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

export default IconSortNumericDesc

