

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
    className?: string
}
export interface State {
}

class IconThumbTack extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
    }

    render() {
        let className = `muk-icon ${this.name}--thumb-tack ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M17.7 19.3v-10q0-.3-.2-.5t-.5-.2-.5.2-.2.5v10q0 .3.2.5t.5.2.5-.2.2-.5zm15 7.8q0 .6-.4 1t-1 .5h-9.6l-1.1 10.8q-.1.2-.3.4t-.4.2q-.6 0-.8-.6l-1.7-10.8h-9q-.6 0-1-.5t-.4-1q0-2.7 1.8-4.9t3.9-2.2V8.6q-1.1 0-2-.9t-.8-2 .8-2 2-.8H27q1.2 0 2 .8t.9 2-.9 2-2 .9V20q2.2 0 4 2.2t1.7 4.9z"></path></g>
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

export default IconThumbTack

