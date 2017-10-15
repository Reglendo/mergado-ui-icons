

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

class IconSignal extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--signal ${this.props.addClass}`

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
                    <g><path d="M5.7 32.1v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zm8.6-2.8v7.1q0 .3-.2.5t-.5.2H9.3q-.3 0-.5-.2t-.2-.5v-7.1q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5zm8.6-5.7v12.8q0 .3-.2.5t-.6.2h-4.2q-.4 0-.6-.2t-.2-.5V23.6q0-.3.2-.5t.6-.2h4.2q.4 0 .6.2t.2.5zm8.5-8.6v21.4q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5V15q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5zM40 3.6v32.8q0 .3-.2.5t-.5.2H35q-.3 0-.5-.2t-.2-.5V3.6q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5z"></path></g>
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

export default IconSignal

