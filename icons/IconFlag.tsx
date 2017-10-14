

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

class IconFlag extends React.Component<Props, State> {

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
                    <g><path d="M7 6.1q0 1.5-1.4 2.4V36q0 .3-.2.5t-.5.2H3.5q-.3 0-.5-.2t-.2-.5V8.5q-1.4-.9-1.4-2.4 0-1.2.8-2t2-.8 2 .8.8 2zm32 1.4v16.6q0 .5-.2.8t-.9.6q-4.7 2.5-8 2.5-1.4 0-2.7-.4t-2.4-1.1-2.5-1-3.1-.5Q15 25 9.1 28.2q-.4.2-.7.2-.6 0-1-.4T7 27V10.8q0-.7.6-1.2.5-.3 1.8-.9 5.1-2.6 9.1-2.6 2.4 0 4.4.6t4.8 1.9q.8.4 1.9.4 1.1 0 2.5-.4t2.4-1.1 1.9-1 1.2-.4q.6 0 1 .4t.4 1z"></path></g>
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

export default IconFlag

