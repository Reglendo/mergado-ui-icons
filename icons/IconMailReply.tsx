

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

class IconMailReply extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--mail-reply ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m40 25q0 3.7-2.8 10.1-0.1 0.1-0.3 0.5t-0.3 0.7-0.3 0.5q-0.2 0.3-0.6 0.3-0.3 0-0.5-0.2t-0.2-0.5q0-0.2 0.1-0.6t0-0.6q0.1-1.5 0.1-2.7 0-2.3-0.4-4t-1-3.1-1.8-2.3-2.4-1.5-3-1-3.4-0.5-3.9-0.1h-5v5.7q0 0.6-0.4 1t-1 0.4-1-0.4l-11.5-11.4q-0.4-0.4-0.4-1t0.4-1l11.5-11.4q0.4-0.5 1-0.5t1 0.5 0.4 1v5.7h5q15.9 0 19.5 9 1.2 3 1.2 7.4z"></path></g>
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

export default IconMailReply

