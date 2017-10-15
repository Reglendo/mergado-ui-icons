

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

class IconIls extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--ils ${this.props.addClass}`

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
                    <g><path d="M26.6 13.9V25q0 .3-.2.5t-.5.2h-3.5q-.4 0-.6-.2t-.2-.5V13.9q0-2.5-1.7-4.3t-4.3-1.7H9.5v25.7q0 .3-.2.5t-.5.2H5.2q-.3 0-.5-.2t-.2-.5v-30q0-.3.2-.5t.5-.2h10.4q3 0 5.5 1.4t4.1 4.1 1.4 5.5zm8.6-10.3v19.6q0 3-1.5 5.6t-4 4-5.6 1.5H13.8q-.3 0-.5-.2t-.2-.5V12.1q0-.3.2-.5t.5-.2h3.6q.3 0 .5.2t.2.5v17.2h6q2.5 0 4.3-1.8t1.8-4.3V3.6q0-.3.2-.5t.5-.2h3.6q.3 0 .5.2t.2.5z"></path></g>
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

export default IconIls

