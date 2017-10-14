

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

class IconMoney extends React.Component<Props, State> {

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
                    <g><path d="M15.9 25.3h8v-2h-2.6V14h-2.4l-3.1 2.9 1.6 1.6q.9-.7 1.2-1.2v6h-2.7v2zM26.6 20q0 1.5-.5 2.9t-1.2 2.8-2.1 2.1-2.9.8-2.8-.8-2.1-2.1-1.3-2.8-.4-2.9.4-2.9 1.3-2.8 2.1-2.1 2.8-.8 2.9.8 2.1 2.1 1.2 2.8.5 2.9zm10.6 5.3V14.7q-2.2 0-3.7-1.6t-1.6-3.7H8q0 2.2-1.6 3.7t-3.7 1.6v10.6q2.2 0 3.7 1.6T8 30.6h23.9q0-2.2 1.6-3.7t3.7-1.6zM39.9 8v24q0 .5-.4.9t-1 .4H1.3q-.5 0-.9-.4T0 32V8q0-.5.4-.9t.9-.4h37.2q.6 0 1 .4t.4.9z"></path></g>
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

export default IconMoney

