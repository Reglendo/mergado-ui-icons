

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

class IconTextHeight extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--text-height ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M38.9 31.4q.8 0 1 .4t-.3 1l-2.8 3.7q-.4.5-1.1.5t-1.1-.5l-2.8-3.7q-.4-.5-.2-1t.9-.4h1.8V8.6h-1.8q-.7 0-.9-.4t.2-1l2.8-3.7q.5-.5 1.1-.5t1.1.5l2.8 3.7q.5.5.3 1t-1 .4h-1.8v22.8h1.8zM1.8 2.9l1.2.6q.3.1 4.7.1 1 0 3-.1t2.9 0h12.6q.1 0 .4-.2t.4-.4h1.5q.1 2.5.1 7.5 0 1.8-.1 2.4-.9.3-1.6.4-.5-1-1.2-2.8 0-.2-.2-1.1t-.3-1.7-.2-.7q-.1-.2-.3-.3t-.3-.2-.3 0-.4 0-.4 0h-4.5q-.9 0-1.6.1-.2 1.8-.2 3.1v8.6q0 6.5.1 10.2 0 .4-.1 1.6t0 2 .3 1.6q.9.4 2.8.9t2.6.9q.2.8.2 1.1 0 .3-.1.6H22q-1.7.1-4.8-.1t-4.7-.3q-1.1 0-3.3.2t-3.4.2L5.7 36v-.2q.4-.6 1.4-1t2.2-.6 1.7-.6q.5-1 .5-8.6 0-2.2-.1-6.7t-.1-6.8V7.4q0-.4-.1-.5t-.1-.3q-.2-.3-3.6-.3-.7 0-2.1.3t-1.7.5q-.5.3-.8 1.7t-.7 2.4-.9 1.2q-1-.6-1.3-1V2.9z"></path></g>
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

export default IconTextHeight

