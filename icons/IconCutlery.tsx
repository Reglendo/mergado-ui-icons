

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

class IconCutlery extends React.Component<Props, State> {

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
                    <g><path d="M18.8 1.4v14.3q0 1.4-.8 2.5t-2.1 1.6v17.3q0 1.2-.8 2.1t-2 .8h-2.9q-1.1 0-2-.8t-.8-2.1V19.8q-1.3-.5-2.1-1.6t-.8-2.5V1.4q0-.6.4-1t1-.4 1 .4.5 1v9.3q0 .6.4 1t1 .4 1-.4.4-1V1.4q0-.6.4-1t1-.4 1 .4.5 1v9.3q0 .6.4 1t1 .4 1-.4.4-1V1.4q0-.6.4-1t1.1-.4 1 .4.4 1zm17.1 0v35.7q0 1.2-.8 2.1t-2 .8h-2.9q-1.1 0-2-.8t-.8-2.1V25.7h-5q-.3 0-.5-.2t-.3-.5V7.1q0-2.9 2.1-5T28.8 0h5.7q.6 0 1 .4t.4 1z"></path></g>
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

export default IconCutlery

