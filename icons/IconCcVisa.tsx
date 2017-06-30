

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

class IconCcVisa extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--cc-visa ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m34.6 21.6h-2.4q0.2-0.6 1.1-3.1l0.1-0.1q0-0.2 0.1-0.5t0.2-0.5l0.2 1z m-25.3-1.1l-1-5.2q-0.2-0.9-1.3-0.9h-4.7l-0.1 0.2q5.5 1.4 7.1 5.9z m3.1-6.1l-2.8 7.7-0.3-1.6q-0.5-1.2-1.5-2.3t-2.3-1.5l2.4 8.9h3l4.6-11.2h-3.1z m2.5 11.2h2.9l1.8-11.2h-2.9z m13.4-10.9q-1.2-0.5-2.6-0.5-2.2 0-3.5 1t-1.4 2.7q0 1.8 2.5 3.1 0.9 0.4 1.2 0.7t0.3 0.7q0 0.5-0.5 0.8t-1.2 0.2q-1.5 0-2.7-0.5l-0.4-0.2-0.4 2.5q1.3 0.6 3.2 0.6 2.3 0 3.7-1t1.4-2.8q0-1.9-2.5-3.1-0.8-0.4-1.2-0.7t-0.4-0.7q0-0.4 0.4-0.7t1.3-0.2q1.2-0.1 2.1 0.4l0.3 0.1z m7.4-0.3h-2.2q-1.1 0-1.5 0.9l-4.3 10.3h3l0.6-1.6h3.8q0 0.3 0.3 1.6h2.7z m4.6-5.6v22.4q0 0.9-0.6 1.6t-1.6 0.6h-35.9q-0.9 0-1.5-0.6t-0.7-1.6v-22.4q0-0.9 0.7-1.6t1.5-0.6h35.9q0.9 0 1.6 0.6t0.6 1.6z"></path></g>
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

export default IconCcVisa

