

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

class IconQuoteLeft extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--quote-left ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m18.6 21.4v8.6q0 1.8-1.2 3t-3 1.3h-8.6q-1.8 0-3-1.3t-1.3-3v-15.7q0-2.3 0.9-4.4t2.4-3.7 3.7-2.4 4.4-0.9h1.5q0.5 0 1 0.4t0.4 1v2.8q0 0.6-0.4 1t-1 0.5h-1.5q-2.3 0-4 1.6t-1.7 4.1v0.7q0 0.9 0.6 1.5t1.6 0.6h5q1.7 0 3 1.3t1.2 3z m20 0v8.6q0 1.8-1.2 3t-3 1.3h-8.6q-1.8 0-3-1.3t-1.3-3v-15.7q0-2.3 0.9-4.4t2.4-3.7 3.7-2.4 4.4-0.9h1.5q0.5 0 1 0.4t0.4 1v2.8q0 0.6-0.4 1t-1 0.5h-1.5q-2.3 0-4 1.6t-1.7 4.1v0.7q0 0.9 0.6 1.5t1.6 0.6h5q1.7 0 3 1.3t1.2 3z"></path></g>
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

export default IconQuoteLeft

