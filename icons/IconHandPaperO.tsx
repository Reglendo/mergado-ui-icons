

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

class IconHandPaperO extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--hand-paper-o ${this.props.addClass}`

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
                    <g><path d="M21.6 2.9q-1 0-1.7.7t-.8 1.8V20h-.7V8.2q0-1-.7-1.7t-1.8-.8-1.7.8-.8 1.7v17.5L10 21.1Q9.1 20 7.7 20q-1.2 0-2 .8t-.8 2.1q0 .9.5 1.7L14 36q.9 1.1 2.3 1.1h15.3q.8 0 1.4-.4t.8-1.3l1.7-9q.1-.8.1-1.4V13.9q0-1-.8-1.7t-1.7-.8-1.8.8-.7 1.7V20h-.7V8.2q0-1-.8-1.7t-1.7-.8-1.8.8-.7 1.7V20h-.8V5.4q0-1.1-.7-1.8t-1.8-.7zm0-2.9q1.6 0 2.8.8t2 2.1h1q2.2 0 3.7 1.5t1.6 3.8v.4q2.4-.1 4 1.4t1.7 3.9V25q0 .9-.2 1.9l-1.6 9q-.4 1.8-1.8 2.9T31.6 40H16.3q-1.4 0-2.6-.6t-2-1.7L3.1 26.3Q2 24.8 2 22.9q0-2.4 1.7-4.1t4-1.7q1.8 0 2.9.8V8.2q0-2.2 1.5-3.8t3.8-1.5h1q.7-1.3 1.9-2.1t2.8-.8z"></path></g>
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

export default IconHandPaperO

