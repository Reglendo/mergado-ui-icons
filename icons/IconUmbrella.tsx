

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

class IconUmbrella extends React.Component<Props, State> {

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
                    <g><path d="M21.5 18.5v12.9q0 2.3-1.7 4t-4 1.7-4-1.7-1.7-4q0-.6.4-1t1-.4 1 .4.4 1q0 1.1.9 2t2 .9 2-.9.8-2V18.5q.8-.3 1.5-.3t1.4.3zm17.1.6q0 .3-.2.5t-.5.2q-.2 0-.5-.2-1.1-1.1-2.1-1.6t-2.2-.5q-1.6 0-2.9.8t-2.3 2.2q-.1.2-.4.6t-.3.6q-.3.4-.6.4-.4 0-.7-.4l-.3-.6q-.2-.4-.4-.6-1-1.3-2.3-2.2t-2.8-.8-2.9.8-2.3 2.2q-.1.2-.4.6t-.3.6q-.2.3-.6.3-.4 0-.6-.3-.1-.2-.4-.6t-.4-.6q-.9-1.3-2.3-2.2t-2.8-.8q-1.3 0-2.3.5t-2.1 1.6q-.2.2-.5.2t-.5-.2-.2-.5v-.2q1-4.1 3.9-7.1T12 7.2t8.1-1.5q3.1 0 6.1.9t5.5 2.5 4.3 4.2 2.6 5.6v.2zM21.5 2.9V5h-2.9V2.9q0-.6.5-1t1-.5 1 .5.4 1z"></path></g>
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

export default IconUmbrella

