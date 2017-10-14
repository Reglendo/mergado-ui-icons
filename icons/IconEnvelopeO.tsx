

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

class IconEnvelopeO extends React.Component<Props, State> {

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
                    <g><path d="M37.1 33.6V16.4q-.7.8-1.5 1.5-6 4.6-9.5 7.5-1.1 1-1.9 1.5T22.3 28t-2.3.6q-1.1 0-2.3-.6t-1.9-1.1-1.9-1.5q-3.5-2.9-9.5-7.5-.8-.7-1.5-1.5v17.2q0 .3.2.5t.5.2h32.8q.3 0 .5-.2t.2-.5zm0-23.5V9l-.2-.2-.2-.2H3.6q-.3 0-.5.2t-.2.5q0 3.7 3.2 6.3 4.3 3.4 9 7.1.1.1.8.7t1 .8 1 .7 1.1.6 1 .2q.5 0 1-.2t1.1-.6 1-.7 1-.8.8-.7q4.7-3.7 9-7.1 1.2-.9 2.2-2.6t1-2.9zm2.9-.8v24.3q0 1.4-1 2.5t-2.6 1H3.6q-1.5 0-2.6-1t-1-2.5V9.3q0-1.5 1.1-2.5t2.5-1.1h32.8q1.5 0 2.6 1.1t1 2.5z"></path></g>
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

export default IconEnvelopeO

