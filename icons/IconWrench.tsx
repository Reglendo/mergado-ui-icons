

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

class IconWrench extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--wrench ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m9.6 32.9q0-0.6-0.5-1t-1-0.5-1 0.5-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m14.3-9.4l-15.2 15.2q-0.8 0.8-2 0.8-1.1 0-2-0.8l-2.4-2.4q-0.8-0.8-0.8-2 0-1.2 0.8-2l15.2-15.2q0.9 2.1 2.6 3.8t3.8 2.6z m14.2-9.7q0 0.8-0.5 2.3-1.1 3-3.7 4.9t-5.8 1.9q-4.1 0-7-3t-3-7 3-7.1 7-2.9q1.3 0 2.8 0.3t2.4 1.1q0.3 0.2 0.3 0.6t-0.3 0.6l-6.6 3.8v5l4.3 2.4q0.1-0.1 1.8-1.1t3-1.8 1.6-0.8q0.3 0 0.5 0.2t0.2 0.6z"></path></g>
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

export default IconWrench

