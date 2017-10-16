

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

class IconFire extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--fire ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M35.9 37.9v1.4q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.3h30q.3 0 .5.3t.2.5zm-5.7-23.6q0 1.7-.5 3.2T28.2 20t-1.9 2-2.2 1.7-1.9 1.6-1.4 1.8-.6 2.2q0 2.1 1.5 5h-.1q-2-.9-3.5-1.9T15 30.2t-2.6-2.7-1.6-3.4-.6-4.1q0-1.7.6-3.2t1.4-2.5 1.9-2 2.2-1.7T18.2 9t1.5-1.8.5-2.2q0-2.1-1.5-5h.1q2 .9 3.6 1.9t3 2.2T28 6.8t1.6 3.4.6 4.1z"></path></g>
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

export default IconFire

