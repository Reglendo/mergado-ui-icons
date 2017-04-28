

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

class IconViadeoSquare extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--viadeo-square`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m26.4 23.2q0-1.7-0.6-3.2-0.9 0.5-1.9 0.7 0.5 1.1 0.5 2.6 0 2.6-1.7 4.4t-4.3 1.8-4.3-1.8-1.8-4.4q0-2.6 1.8-4.5t4.3-1.9q1.2 0 2.2 0.4 0.1-0.9 0.6-1.9-1.4-0.5-2.8-0.5-3.5 0-5.8 2.5t-2.3 5.8 2.3 5.9 5.8 2.3 5.7-2.3 2.3-5.9z m-3.9-7.9q0 0.5 0 1.6 0 1.4-0.1 2.7t-0.5 3-0.9 2.9-1.5 2.4-2.2 1.5q0.4 0.1 0.9 0.1h0.2q4.9-3.1 4.9-9.2 0-2.6-0.8-5z m0 0q-0.1-1.8-1-3.8t-2.2-2.9q2 3.5 3.2 6.7z m7.4-2.3q0-2.3-1.1-3.9-0.9 1.9-2.8 2.4-1.5 0.4-2.4 1.2t-0.9 2.2q0 0.9 0.5 1.8 1.7-0.4 3.2-1.5t2.1-2.6q-0.1 1.1-1.6 2.5t-3.1 2.2q1.1 1.1 2.4 1.1 1.2 0 2-0.8t1.4-2q0.3-1 0.3-2.6z m7.4-3.7v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconViadeoSquare

