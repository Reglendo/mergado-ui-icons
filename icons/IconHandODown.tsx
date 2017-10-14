

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

class IconHandODown extends React.Component<Props, State> {

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
                    <g><path d="M34.4 21.4q0-1.8-.7-4.1T32.3 13t-.7-3.7v-.7H17.3v.7q0 .8-.3 1.5t-.8 1.4-1 1.1-1.2 1.1q-.2.2-.4.3-1.8 1.6-3.2 2.5-.5.3-1.5.8-.1 0-.5.2t-.8.5-.8.4-.7.5-.2.4q0 1.6.6 2.6t2.2 1q1 0 1.9-.4t1.5-.7 1.2-.7 1.1-.4v12.9q0 1.1.9 2t2 .8q1.1 0 2-.8t.8-2v-7.4q1.1.8 2.3.8 1.6 0 2.7-1.2.7.4 1.5.4t1.7-.4 1.1-1.1q.6.1 1.3.1 1.9 0 2.8-1t.9-3.1zM31.6 4.3q0-.6-.5-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.5-1zm5.7 17q0 3.2-1.7 5.2t-4.9 1.9h-.1q-1.7 1.4-4 1.4-.5 0-.9-.1-1.2.7-2.7.8v3.8q0 2.3-1.7 4t-4 1.7q-2.3 0-4-1.7t-1.7-4v-8.4q-1.2.5-2.9.5-2.7 0-4.2-1.8T3 20q0-.8.4-1.6t1.1-1.2 1.4-.9 1.6-.8 1.4-.7q1.2-.8 2.9-2.3l.3-.3q.3-.3.5-.4t.5-.5.5-.5.4-.5.3-.5.1-.5V2.9q0-1.2.9-2.1t2-.8h14.3q1.2 0 2 .8t.8 2.1v6.4q0 1.3 1.3 5 1.6 4.2 1.6 7z"></path></g>
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

export default IconHandODown

