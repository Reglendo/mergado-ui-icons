

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

class IconExclamation extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--exclamation ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m24.4 27.9v5q0 0.5-0.4 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.4-1v-5q0-0.6 0.4-1t1-0.5h5.7q0.6 0 1 0.5t0.4 1z m0.7-23.6l-0.6 17.1q0 0.6-0.5 1t-1 0.5h-5.7q-0.6 0-1-0.5t-0.5-1l-0.6-17.1q0-0.6 0.4-1t1-0.4h7.1q0.6 0 1 0.4t0.4 1z"></path></g>
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

export default IconExclamation

