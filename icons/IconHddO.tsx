

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

class IconHddO extends React.Component<Props, State> {

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
                    <g><path d="M26.2 27.1q0 .8-.5 1.3t-1.3.5-1.2-.5-.6-1.3.6-1.2 1.2-.5 1.3.5.5 1.2zm5.7 0q0 .8-.5 1.3t-1.3.5-1.2-.5-.5-1.3.5-1.2 1.2-.5 1.3.5.5 1.2zm2.5 3.6v-7.1q0-.3-.2-.5t-.5-.2H6.6q-.3 0-.5.2t-.2.5v7.1q0 .3.2.5t.5.2h27.1q.3 0 .5-.2t.2-.5zM7 20h26.3L29.8 9.2q-.1-.2-.4-.4t-.5-.2H11.4q-.3 0-.6.2t-.3.4zm30.3 3.6v7.1q0 1.5-1.1 2.5t-2.5 1.1H6.6q-1.5 0-2.6-1.1t-1-2.5v-7.1q0-.6.4-1.7L7.8 8.4q.3-1.2 1.4-2t2.2-.7h17.5q1.2 0 2.2.7t1.4 2l4.4 13.5q.4 1.1.4 1.7z"></path></g>
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

export default IconHddO

