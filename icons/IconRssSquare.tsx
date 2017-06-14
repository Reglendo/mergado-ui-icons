

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

class IconRssSquare extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--rss-square ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m14.4 28.6q0-1.2-0.8-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.8 2-0.8 0.8-2z m7.9 2.1q-0.3-5.2-4-8.9t-8.8-3.9q-0.3 0-0.6 0.2t-0.2 0.5v2.9q0 0.2 0.2 0.4t0.5 0.3q3.4 0.2 5.9 2.7t2.7 5.9q0 0.2 0.2 0.4t0.5 0.2h2.8q0.3 0 0.6-0.2t0.2-0.5z m8.5 0q-0.1-3.4-1.2-6.6t-3.1-5.9-4.6-4.5-5.8-3.1-6.6-1.3q-0.4 0-0.6 0.2-0.2 0.2-0.2 0.5v2.9q0 0.3 0.2 0.5t0.5 0.2q4.6 0.2 8.4 2.5t6.3 6.2 2.5 8.4q0 0.3 0.2 0.5t0.5 0.2h2.8q0.3 0 0.5-0.2 0.3-0.2 0.2-0.5z m6.5-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconRssSquare

