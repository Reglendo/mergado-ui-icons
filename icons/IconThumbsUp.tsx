

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

class IconThumbsUp extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--thumbs-up`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m7.7 30q0-0.6-0.4-1t-1-0.4q-0.6 0-1 0.4t-0.4 1q0 0.6 0.4 1t1 0.4q0.6 0 1-0.4t0.4-1z m3.6-11.4v14.3q0 0.5-0.4 1t-1 0.4h-6.5q-0.6 0-1-0.4t-0.4-1v-14.3q0-0.6 0.4-1t1-0.5h6.5q0.5 0 1 0.5t0.4 1z m26.4 0q0 1.9-1.2 3.3 0.3 1 0.3 1.7 0.1 1.7-0.9 3.1 0.3 1.2 0 2.6-0.4 1.2-1.2 2.1 0.2 2.5-1.1 4-1.5 1.7-4.4 1.7h-2.9q-1.5 0-3.2-0.3t-2.7-0.6-2.7-0.9q-2.8-1-3.6-1-0.5 0-1-0.4t-0.4-1v-14.3q0-0.6 0.4-1t1-0.5q0.5 0 1.7-1.3t2.2-2.7q1.5-1.9 2.3-2.7 0.4-0.4 0.7-1t0.4-1.1 0.3-1.4q0.1-0.9 0.2-1.3t0.5-1.2 0.7-1.1q0.5-0.4 1-0.4 1.1 0 1.9 0.2t1.3 0.6 0.9 0.9 0.6 1 0.2 1.1 0.1 1 0 0.9q0 0.8-0.2 1.7t-0.4 1.3-0.6 1.3q-0.1 0.1-0.2 0.4t-0.3 0.4-0.2 0.6h6.2q1.8 0 3 1.3t1.3 3z"></path></g>
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

export default IconThumbsUp
