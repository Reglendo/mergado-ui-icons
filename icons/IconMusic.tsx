

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

class IconMusic extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--music ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M37.3 5v25q0 1.1-.8 2t-1.9 1.3-2.3.8-2.2.2-2.1-.2-2.3-.8-1.9-1.3-.8-2 .8-2 1.9-1.3 2.3-.8 2.1-.2q2.4 0 4.3.9v-12l-17.1 5.3v15.8q0 1.1-.8 2t-1.9 1.4-2.3.7-2.2.2-2.1-.2-2.3-.7-1.9-1.4-.8-2 .8-2 1.9-1.3 2.3-.7 2.1-.3q2.4 0 4.3.9V10.7q0-.7.5-1.2t1-.8L34.5 3q.3-.1.6-.1.9 0 1.6.6t.6 1.5z"></path></g>
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

export default IconMusic

