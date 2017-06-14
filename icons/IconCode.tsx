

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

class IconCode extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--code ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m12.8 30.4l-1 1.1q-0.2 0.2-0.5 0.2t-0.5-0.2l-9.7-9.7q-0.2-0.2-0.2-0.5t0.2-0.4l9.7-9.7q0.2-0.2 0.5-0.2t0.5 0.2l1 1q0.2 0.2 0.2 0.5t-0.2 0.5l-8.1 8.1 8.1 8.2q0.2 0.2 0.2 0.5t-0.2 0.4z m12.3-22.1l-7.8 26.8q0 0.3-0.3 0.4t-0.5 0.1l-1.3-0.4q-0.2-0.1-0.4-0.3t0-0.5l7.7-26.8q0.1-0.3 0.4-0.4t0.4-0.1l1.3 0.4q0.3 0 0.4 0.3t0.1 0.5z m13.6 13.5l-9.7 9.7q-0.2 0.2-0.4 0.2t-0.5-0.2l-1-1.1q-0.3-0.2-0.3-0.4t0.3-0.5l8.1-8.2-8.1-8.1q-0.3-0.2-0.3-0.5t0.3-0.5l1-1q0.2-0.2 0.5-0.2t0.4 0.2l9.7 9.7q0.2 0.2 0.2 0.4t-0.2 0.5z"></path></g>
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

export default IconCode

