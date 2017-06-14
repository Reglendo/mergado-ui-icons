

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

class IconSuitcase extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--suitcase ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m14.3 8.6h11.4v-2.9h-11.4v2.9z m-7.9 0v28.5h-1.4q-2.1 0-3.5-1.4t-1.5-3.6v-18.5q0-2.1 1.5-3.6t3.5-1.4h1.4z m25 0v28.5h-22.8v-28.5h2.8v-3.6q0-0.9 0.7-1.5t1.5-0.6h12.8q0.9 0 1.5 0.6t0.7 1.5v3.6h2.8z m8.6 5v18.5q0 2.1-1.5 3.6t-3.5 1.4h-1.4v-28.5h1.4q2.1 0 3.5 1.4t1.5 3.6z"></path></g>
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

export default IconSuitcase

