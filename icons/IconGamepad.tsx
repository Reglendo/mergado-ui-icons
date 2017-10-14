

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

class IconGamepad extends React.Component<Props, State> {

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
                    <g><path d="M17.3 24v-2.7q0-.3-.2-.4t-.5-.2h-4v-4q0-.3-.2-.5T12 16H9.3q-.3 0-.5.2t-.2.5v4H4.7q-.3 0-.5.1t-.2.5V24q0 .3.2.5t.5.2h3.9v3.9q0 .3.2.5t.5.2H12q.3 0 .4-.2t.2-.5v-3.9h4q.3 0 .5-.2t.2-.5zm11.9 1.3q0-1.1-.7-1.9t-1.9-.7-1.9.7-.8 1.9.8 1.9 1.9.8 1.9-.8.7-1.9zm5.4-5.3q0-1.1-.8-1.9t-1.9-.8-1.9.8-.8 1.9.8 1.9 1.9.8 1.9-.8.8-1.9zm5.3 2.7q0 4.4-3.1 7.5t-7.6 3.1q-4 0-7-2.7h-4.6q-3 2.7-7 2.7-4.4 0-7.5-3.1T0 22.7t3.1-7.6 7.5-3.1h18.6q4.4 0 7.6 3.1t3.1 7.6z"></path></g>
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

export default IconGamepad

