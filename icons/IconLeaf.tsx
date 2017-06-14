

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

class IconLeaf extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--leaf ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m28.6 15.7q0-0.6-0.5-1t-1-0.4q-3.8 0-7.1 1.1t-5.7 3-5.3 4.9q-0.4 0.5-0.4 1 0 0.6 0.4 1t1 0.4q0.5 0 1-0.4 0.6-0.5 1.7-1.6t1.5-1.5q3-2.7 5.9-3.9t7-1.2q0.6 0 1-0.4t0.5-1z m11.4-4.4q0 2.1-0.4 4.3-1.1 5-4.2 8.6t-7.9 5.9q-4.8 2.4-9.8 2.4-3.3 0-6.4-1-0.3-0.1-2-0.9t-2.1-0.9q-0.4 0-0.9 0.7t-1 1.6-1.2 1.6-1.3 0.7q-0.7 0-1.1-0.3t-0.7-0.5-0.6-0.9q-0.1-0.1-0.2-0.3t-0.1-0.2-0.1-0.2 0-0.3q0-0.8 0.7-1.7t1.5-1.4 1.5-1.3 0.7-1q0-0.1-0.3-0.9t-0.3-1q-0.2-1.1-0.2-2.3 0-2.6 0.9-4.9t2.7-4.1 3.8-3.1 4.5-2.2q1.3-0.4 3.3-0.5t4-0.2 4-0.2 3.6-0.5 2.5-1.3l0.7-0.6 0.7-0.6 0.6-0.5 0.8-0.3 1-0.1q0.8 0 1.5 1t1.1 2.5 0.5 2.8 0.2 2.1z"></path></g>
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

export default IconLeaf

