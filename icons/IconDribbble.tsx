

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

class IconDribbble extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--dribbble ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m25.9 33.5q-1-5.4-3.2-11.1h0l-0.1 0q-0.3 0.1-0.9 0.4t-2.3 1-3 1.9-3 2.5-2.3 3.3l-0.3-0.2q4.1 3.3 9.3 3.3 3 0 5.8-1.1z m-4.2-13.6q-0.4-1.1-1.2-2.4-6.9 2-15 2 0 0.2 0 0.5 0 2.8 1 5.3t2.8 4.5q1.1-2 2.7-3.7t3.2-2.8 2.9-1.8 2.2-1.1l0.9-0.3q0 0 0.2-0.1t0.3-0.1z m-2.4-4.7q-2.6-4.8-5.4-8.4-3.1 1.4-5.2 4.1t-2.9 6.1q6.8 0 13.5-1.8z m15.3 7.1q-4.7-1.3-9.1-0.6 1.9 5.3 2.8 10.4 2.5-1.6 4.2-4.2t2.1-5.6z m-18-16.5q0 0 0 0 0 0 0 0z m13.2 3.2q-4.1-3.6-9.7-3.6-1.7 0-3.4 0.4 2.9 3.8 5.5 8.5 1.5-0.6 2.9-1.3t2.1-1.4 1.5-1.3 0.8-0.9z m5 10.8q-0.1-5.1-3.3-9.1l-0.1 0q-0.2 0.3-0.4 0.6t-1 1-1.5 1.3-2.3 1.5-2.9 1.4q0.6 1.2 1 2.1 0 0.1 0.1 0.4t0.2 0.4q0.8-0.1 1.6-0.2t1.7 0 1.5 0 1.5 0.1 1.2 0.1 1.1 0.2 0.8 0.1 0.6 0.1z m2.5 0.2q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconDribbble

