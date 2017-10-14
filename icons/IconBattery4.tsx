

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

class IconBattery4 extends React.Component<Props, State> {

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
                    <g><path d="M33.6 13.3v13.4H4.5V13.3h29.1zm2.3 10.1h2.2v-6.8h-2.2v-5q0-.2-.2-.4t-.4-.2H2.8q-.2 0-.4.2t-.2.4v16.8q0 .2.2.4t.4.2h32.5q.2 0 .4-.2t.2-.4v-5zm4.4-6.8v6.8q0 .9-.6 1.5t-1.6.7v2.8q0 1.2-.8 2t-2 .8H2.8q-1.2 0-2-.8t-.8-2V11.6q0-1.2.8-2t2-.8h32.5q1.2 0 2 .8t.8 2v2.8q.9 0 1.6.7t.6 1.5z"></path></g>
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

export default IconBattery4

