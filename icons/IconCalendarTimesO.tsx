

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

class IconCalendarTimesO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--calendar-times-o ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m26.3 30.9l-1 1q-0.2 0.2-0.5 0.2t-0.5-0.2l-4.2-4.2-4.2 4.2q-0.2 0.2-0.5 0.2t-0.5-0.2l-1.1-1q-0.2-0.2-0.2-0.5t0.2-0.5l4.3-4.2-4.3-4.2q-0.2-0.2-0.2-0.5t0.2-0.5l1.1-1q0.2-0.2 0.5-0.2t0.5 0.2l4.2 4.2 4.2-4.2q0.2-0.2 0.5-0.2t0.5 0.2l1 1q0.2 0.2 0.2 0.5t-0.2 0.5l-4.2 4.2 4.2 4.2q0.2 0.2 0.2 0.5t-0.2 0.5z m-21.9 6.2h31.4v-22.8h-31.4v22.8z m8.5-27.1v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m17.2 0v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m8.5-1.4v28.5q0 1.2-0.8 2.1t-2 0.8h-31.4q-1.2 0-2.1-0.9t-0.8-2v-28.5q0-1.2 0.8-2t2.1-0.9h2.8v-2.1q0-1.5 1.1-2.6t2.5-1h1.4q1.5 0 2.5 1.1t1.1 2.5v2.1h8.6v-2.1q0-1.5 1-2.6t2.5-1h1.5q1.4 0 2.5 1.1t1 2.5v2.1h2.9q1.1 0 2 0.9t0.8 2z"></path></g>
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

export default IconCalendarTimesO

