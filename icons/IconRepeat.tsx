

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

class IconRepeat extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--repeat ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m37.3 5.7v10q0 0.6-0.4 1t-1 0.4h-10q-1 0-1.4-0.9-0.3-0.8 0.4-1.5l3-3.1q-3.3-3-7.8-3-2.3 0-4.4 0.9t-3.6 2.4-2.5 3.7-0.9 4.4 0.9 4.4 2.5 3.7 3.6 2.4 4.4 0.9q2.7 0 5.1-1.1t4-3.3q0.1-0.2 0.5-0.3 0.3 0 0.5 0.2l3.1 3.1q0.2 0.2 0.2 0.5t-0.2 0.5q-2.4 2.9-5.9 4.5t-7.3 1.6q-3.4 0-6.6-1.3t-5.5-3.7-3.6-5.4-1.4-6.7 1.4-6.7 3.6-5.4 5.5-3.7 6.6-1.3q3.3 0 6.4 1.2t5.5 3.5l2.9-2.9q0.6-0.7 1.5-0.3 0.9 0.4 0.9 1.3z"></path></g>
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

export default IconRepeat

