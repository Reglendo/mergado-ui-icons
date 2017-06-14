

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

class IconHeader extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--header ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m37.5 37.1q-0.9 0-2.9 0t-3-0.1q-1 0-2.9 0.1t-3 0q-0.5 0-0.8-0.4t-0.3-1q0-0.7 0.4-1.1t0.8-0.3 1.2-0.2 1-0.3q0.7-0.5 0.7-3.2l0-8.7q0-0.5 0-0.7-0.3-0.1-1.1-0.1h-15.1q-0.8 0-1.1 0.1-0.1 0.2-0.1 0.7l0 8.3q0 3.2 0.8 3.7 0.4 0.2 1.1 0.2t1.3 0.1 1 0.4 0.4 1q0 0.6-0.2 1t-0.9 0.5q-1 0-3.1 0t-3.1-0.1q-0.9 0-2.8 0.1t-2.9 0q-0.5 0-0.7-0.4t-0.3-1q0-0.7 0.3-1t0.8-0.4 1.1-0.2 0.9-0.3q0.8-0.5 0.8-3.2l-0.1-1.3v-18.1q0-0.1 0.1-0.6t0-0.8-0.1-0.9-0.1-0.9-0.1-0.8-0.3-0.7-0.3-0.4q-0.3-0.3-1-0.3t-1.2-0.1-0.9-0.3-0.4-1q0-0.6 0.3-1t0.8-0.5q1 0 3.1 0t3 0.1q1 0 2.9-0.1t2.8 0q0.6 0 0.8 0.4t0.3 1.1q0 0.7-0.4 1t-0.8 0.3-1.1 0.1-1 0.3q-0.8 0.5-0.8 3.6l0 7.1q0 0.5 0.1 0.7 0.3 0.1 0.8 0.1h15.6q0.6 0 0.9-0.1 0-0.2 0-0.7l0-7.1q0-3.1-0.7-3.6-0.5-0.3-1.4-0.3t-1.4-0.3-0.6-1.1q0-0.6 0.3-1.1t0.8-0.4q1 0 3 0t2.9 0.1q1 0 2.9-0.1t2.9 0q0.5 0 0.8 0.4t0.3 1.1q0 0.7-0.4 1t-0.9 0.3-1.1 0.1-1 0.3q-0.8 0.5-0.8 3.6l0 21q0 2.7 0.8 3.1 0.3 0.3 1 0.3t1.2 0.1 0.9 0.4 0.4 1q0 0.6-0.2 1t-0.9 0.5z"></path></g>
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

export default IconHeader

