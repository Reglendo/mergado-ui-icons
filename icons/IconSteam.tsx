

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

class IconSteam extends React.Component<Props, State> {

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
                    <g><path d="M35.3 13q0 2.2-1.6 3.8t-3.8 1.6-3.9-1.6-1.6-3.8T26 9.1t3.9-1.6 3.8 1.6 1.6 3.9zM18.1 29.6q0-2.4-1.6-4t-4-1.6q-.6 0-1.2.1l2.4.9q1.7.7 2.4 2.4t0 3.4q-.7 1.7-2.3 2.4t-3.4.1q-.5-.2-1.4-.6t-1.4-.5q.7 1.3 2 2.1t2.9.8q2.4 0 4-1.6t1.6-3.9zM36.7 13q0-2.8-2-4.8t-4.9-2q-2.8 0-4.8 2T23 13q0 2.8 2 4.8t4.8 2q2.9 0 4.9-2t2-4.8zm3.3 0q0 4.2-3 7.2t-7.2 3l-9.7 7.1q-.3 2.9-2.4 4.9t-5.2 1.9q-2.7 0-4.7-1.6t-2.7-4.3L0 29.1v-9.6L8.7 23q1.7-1 3.8-1h.8l6.4-9.1q0-4.1 3-7.1t7.1-2.9q4.2 0 7.2 2.9t3 7.2z"></path></g>
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

export default IconSteam

