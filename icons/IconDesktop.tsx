

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

class IconDesktop extends React.Component<Props, State> {

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
                    <g><path d="M37.2 22V4.7q0-.3-.2-.4t-.5-.2H3.3q-.2 0-.4.2t-.2.4V22q0 .3.2.5t.4.2h33.2q.3 0 .5-.2t.2-.5zm2.7-17.3v22.6q0 1.4-1 2.4t-2.4.9H25.2q0 .8.4 1.6t.6 1.5.4.9q0 .6-.4 1t-1 .3H14.6q-.5 0-.9-.3t-.4-1q0-.3.3-.9t.7-1.5.3-1.6H3.3q-1.3 0-2.3-.9t-1-2.4V4.7q0-1.4 1-2.3t2.3-1h33.2q1.4 0 2.4 1t1 2.3z"></path></g>
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

export default IconDesktop

