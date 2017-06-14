

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

class IconCopyright extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--copyright ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m28.7 24v2.4q0 1.1-0.8 2t-2.1 1.3-2.7 0.8-2.6 0.2q-4.6 0-7.6-3.1t-3.1-7.7q0-4.5 3-7.6t7.6-3q0.7 0 1.7 0.1t2 0.4 2.1 0.7 1.6 1.3 0.6 1.8v2.4q0 0.4-0.4 0.4h-2.6q-0.4 0-0.4-0.4v-1.5q0-1-1.4-1.5t-3.1-0.6q-3.1 0-5.1 2.1t-2 5.3q0 3.3 2.1 5.5t5.2 2.2q1.5 0 3.1-0.5t1.5-1.5v-1.5q0-0.2 0.1-0.3t0.3-0.1h2.6q0.1 0 0.3 0.1t0.1 0.3z m-8.6-18.3q-2.9 0-5.5 1.2t-4.6 3-3 4.6-1.1 5.5 1.1 5.5 3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5-1.1-5.5-3.1-4.6-4.5-3.1-5.6-1.1z m17.2 14.3q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconCopyright

