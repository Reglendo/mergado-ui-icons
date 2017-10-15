

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

class IconFortAwesome extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--fort-awesome ${this.props.addClass}`

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
                    <g><path d="M15.8 22.5v-5q0-.4-.4-.4h-2.1q-.4 0-.4.4v5q0 .4.4.4h2.1q.4 0 .4-.4zm11.4 0v-5q0-.4-.3-.4h-2.2q-.3 0-.3.4v5q0 .4.3.4h2.2q.3 0 .3-.4zm11.4.7V40H24.4v-7.1q0-1.8-1.3-3.1t-3-1.2-3.1 1.2-1.2 3.1V40H1.5V23.2q0-.3.4-.3H4q.4 0 .4.3v2.5h2.8V11.8q0-.4.4-.4h2.1q.4 0 .4.4v2.5h2.8v-2.5q0-.4.4-.4h2.1q.4 0 .4.4v2.5h2.8v-2.5q0-.4.4-.4h.4V2.7q-.8-.5-.8-1.3 0-.6.5-1t1-.4 1 .4.4 1q0 .8-.7 1.3v.2h6.1q.3 0 .3.3v5q0 .4-.3.4h-6.1v2.8h.3q.4 0 .4.4v2.5h2.9v-2.5q0-.4.3-.4h2.2q.3 0 .3.4v2.5h2.9v-2.5q0-.4.3-.4h2.2q.3 0 .3.4v13.9h2.9v-2.5q0-.3.3-.3h2.2q.3 0 .3.3z"></path></g>
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

export default IconFortAwesome

