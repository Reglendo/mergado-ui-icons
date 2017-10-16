

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

class IconClose extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--close ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M33.5 29.5q0 .9-.7 1.5l-3 3.1q-.6.6-1.5.6t-1.5-.6l-6.6-6.6-6.5 6.6q-.7.6-1.6.6t-1.5-.6l-3-3.1q-.6-.6-.6-1.5t.6-1.5l6.5-6.6-6.5-6.5q-.6-.7-.6-1.6t.6-1.5l3-3q.6-.6 1.5-.6t1.6.6l6.5 6.6 6.6-6.6q.6-.6 1.5-.6t1.5.6l3.1 3q.6.7.6 1.5t-.6 1.6l-6.6 6.5 6.6 6.6q.6.6.6 1.5z"></path></g>
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

export default IconClose

