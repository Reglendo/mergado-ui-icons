

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

class IconQuestionCircle extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--question-circle ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m23 30.7v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-4.3q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h4.3q0.3 0 0.5-0.2t0.2-0.5z m5.7-15q0-2-1.2-3.6t-3.1-2.6-3.8-0.9q-5.4 0-8.3 4.7-0.3 0.6 0.2 1l2.9 2.2q0.2 0.1 0.5 0.1 0.3 0 0.5-0.2 1.2-1.6 1.9-2.1 0.8-0.5 2-0.5 1 0 1.9 0.6t0.8 1.3q0 0.8-0.4 1.3t-1.6 1q-1.4 0.7-2.5 2t-1.2 2.8v0.8q0 0.3 0.2 0.5t0.5 0.2h4.3q0.3 0 0.5-0.2t0.2-0.5q0-0.5 0.5-1.1t1.2-1.1q0.7-0.4 1.1-0.7t1-0.8 1-1 0.6-1.4 0.3-1.8z m8.6 4.3q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconQuestionCircle

