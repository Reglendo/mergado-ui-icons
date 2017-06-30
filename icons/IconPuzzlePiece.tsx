

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

class IconPuzzlePiece extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--puzzle-piece ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m38.6 24.5q0 1.8-1 3t-2.7 1.2q-0.9 0-1.7-0.4t-1.4-0.8-1.2-0.9-1.6-0.3q-2.5 0-2.5 2.7 0 0.9 0.4 2.6t0.3 2.6v0.1q-0.5 0-0.7 0-0.8 0.1-2.2 0.2t-2.6 0.3-2.1 0.2q-1.4 0-2.3-0.6t-1-1.9q0-0.8 0.4-1.6t0.9-1.2 0.8-1.4 0.4-1.7q0-1.8-1.2-2.8t-3-0.9q-1.9 0-3.2 1t-1.3 2.8q0 1 0.3 1.9t0.8 1.4 0.7 1.2 0.3 1.1q0 1-1 2-0.8 0.8-2.6 0.8-2.1 0-5.5-0.5-0.2-0.1-0.6-0.1t-0.6-0.1l-0.3-0.1q0 0-0.1 0 0 0 0 0v-22.9q0 0 0.4 0.1t0.7 0.1 0.5 0.1q3.4 0.5 5.5 0.5 1.8 0 2.6-0.7 1-1 1-2 0-0.5-0.3-1.2t-0.7-1.1-0.8-1.5-0.3-1.8q0-1.9 1.3-2.9t3.2-1q1.8 0 3 1t1.2 2.8q0 0.9-0.4 1.7t-0.8 1.3-0.9 1.3-0.4 1.5q0 1.3 1 1.9t2.3 0.6q1.4 0 4-0.3t3.6-0.4v0q0 0.1-0.1 0.4t-0.1 0.8-0.1 0.5q-0.5 3.3-0.5 5.4 0 1.8 0.8 2.6 1 1.1 2 1.1 0.5 0 1.1-0.4t1.2-0.7 1.4-0.8 1.9-0.3q1.8 0 2.8 1.3t1 3.2z"></path></g>
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

export default IconPuzzlePiece

