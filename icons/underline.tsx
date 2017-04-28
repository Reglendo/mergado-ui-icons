

import * as React from "react"

export interface Props {
    /** Size */
    size?: number
    /** Icon text */
    text?: string
    /** Icon title */
    title?: string
    style?: any
}
export interface State {
}

class IconUnderline extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--underline`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m4.1 5q-0.9-0.1-1-0.1l-0.1-2q0.3 0 0.9 0 1.3 0 2.5 0.1 2.9 0.1 3.7 0.1 1.9 0 3.7 0l3.3-0.1q1.3 0 1.9-0.1l0 0.3 0.1 1.5v0.2q-1.4 0.2-2.8 0.2-1.4 0-1.8 0.5-0.3 0.3-0.3 3 0 0.3 0 0.7t0 0.6l0.1 5.1 0.3 6.2q0.1 2.8 1.1 4.5 0.8 1.4 2.2 2.1 1.9 1 3.9 1 2.3 0 4.3-0.6 1.2-0.4 2.2-1.1 1.1-0.8 1.4-1.4 0.8-1.3 1.2-2.6 0.5-1.6 0.5-5.1 0-1.8-0.1-2.9t-0.2-2.7-0.3-3.6l-0.1-1.3q-0.1-1.5-0.6-1.9-0.7-0.8-1.7-0.8l-2.2 0-0.3 0 0-1.9h1.9l4.6 0.2q1.7 0 4.4-0.2l0.4 0q0.1 0.9 0.1 1.1 0 0.2-0.1 0.7-1 0.3-1.9 0.3-1.6 0.3-1.7 0.4-0.4 0.3-0.4 0.9 0 0.2 0.1 0.6t0 0.7q0.2 0.4 0.5 8.9 0.1 4.3-0.4 6.7-0.3 1.7-0.9 2.8-0.8 1.4-2.5 2.7-1.6 1.3-4 2-2.5 0.7-5.7 0.7-3.8 0-6.4-1-2.6-1-4-2.7-1.3-1.7-1.8-4.4-0.4-1.8-0.4-5.3v-7.4q0-4.2-0.3-4.7-0.6-0.9-3.3-0.9z m33.2 31.4v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-32.9q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h32.9q0.3 0 0.5-0.2t0.2-0.5z"></path></g>
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

export default IconUnderline

