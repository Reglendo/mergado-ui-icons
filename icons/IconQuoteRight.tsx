

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

class IconQuoteRight extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--quote-right ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m18.6 7.1v15.8q0 2.3-0.9 4.4t-2.4 3.6-3.7 2.5-4.4 0.9h-1.4q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h1.4q2.4 0 4.1-1.7t1.6-4v-0.8q0-0.8-0.6-1.5t-1.5-0.6h-5q-1.8 0-3.1-1.2t-1.2-3.1v-8.6q0-1.7 1.3-3t3-1.2h8.6q1.7 0 3 1.2t1.2 3z m20 0v15.8q0 2.3-0.9 4.4t-2.4 3.6-3.7 2.5-4.4 0.9h-1.4q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h1.4q2.4 0 4.1-1.7t1.6-4v-0.8q0-0.8-0.6-1.5t-1.5-0.6h-5q-1.8 0-3.1-1.2t-1.2-3.1v-8.6q0-1.7 1.3-3t3-1.2h8.6q1.7 0 3 1.2t1.2 3z"></path></g>
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

export default IconQuoteRight

