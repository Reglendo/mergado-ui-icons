

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
}
export interface State {
}

class IconBolt extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--bolt ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m29.8 12.6q0.4 0.5 0.1 1l-12 25.8q-0.3 0.6-1 0.6-0.1 0-0.3 0-0.4-0.2-0.6-0.5t-0.1-0.6l4.4-18.1-9 2.3q-0.1 0-0.3 0-0.4 0-0.7-0.2-0.4-0.4-0.3-0.9l4.5-18.4q0.1-0.3 0.4-0.5t0.6-0.2h7.3q0.4 0 0.7 0.2t0.3 0.7q0 0.2-0.1 0.4l-3.8 10.3 8.8-2.2q0.2 0 0.3 0 0.4 0 0.8 0.3z"></path></g>
                </svg>
                {this.props.text ? (
                    <span className={`${this.name}__text`}>
                        {this.props.text}
                    </span>
                ) : null}
            </span>
        )
    }
}

export default IconBolt

