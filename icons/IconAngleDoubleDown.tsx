

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

class IconAngleDoubleDown extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--angle-double-down ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m31 19.3q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.2-0.5 0.2t-0.6-0.2l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l1.2-1.1q0.2-0.3 0.5-0.3t0.5 0.3l8.8 8.7 8.7-8.7q0.3-0.3 0.5-0.3t0.6 0.3l1.1 1.1q0.2 0.2 0.2 0.5z m0-8.6q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.5 0.3t-0.6-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l1.2-1.1q0.2-0.2 0.5-0.2t0.5 0.2l8.8 8.8 8.7-8.8q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z"></path></g>
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

export default IconAngleDoubleDown

