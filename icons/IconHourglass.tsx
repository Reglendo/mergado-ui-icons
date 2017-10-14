

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

class IconHourglass extends React.Component<Props, State> {

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
                    <g><path d="M36.6 35.7q.3 0 .5.2t.2.5v2.9q0 .3-.2.5t-.5.2H3.7q-.3 0-.5-.2t-.2-.5v-2.9q0-.3.2-.5t.5-.2h32.9zM5.9 34.3q.1-1.2.4-2.4t.6-2.1 1.1-2 1.2-1.7 1.4-1.5 1.5-1.4 1.5-1.2 1.5-1 1.5-1q-1-.6-1.5-1t-1.5-1-1.5-1.2-1.5-1.4-1.4-1.5T8 12.2t-1.1-2-.6-2.1-.4-2.4h28.5q-.1 1.2-.4 2.4t-.6 2.1-1.1 2-1.2 1.7-1.4 1.5-1.5 1.4-1.6 1.2-1.4 1-1.5 1q1 .6 1.5 1t1.4 1 1.6 1.3 1.5 1.3 1.4 1.5 1.2 1.7 1.1 2 .6 2.1.4 2.4H5.9zM36.6 0q.3 0 .5.2t.2.5v2.9q0 .3-.2.5t-.5.2H3.7q-.3 0-.5-.2T3 3.6V.7q0-.3.2-.5t.5-.2h32.9z"></path></g>
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

export default IconHourglass

