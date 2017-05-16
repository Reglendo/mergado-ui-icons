

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

class IconStethoscope extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--stethoscope`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m33.1 15.7q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m2.8 0q0 1.4-0.8 2.5t-2 1.6v8.8q0 3.5-3 6t-7 2.5-7.1-2.5-2.9-6v-3q-3.7-0.4-6.1-2.8t-2.5-5.7v-11.4q0-0.6 0.4-1t1-0.4q0.2 0 0.4 0 0.4-0.6 1-1t1.5-0.4q1.2 0 2 0.8t0.8 2-0.8 2-2 0.9q-0.8 0-1.4-0.4v8.9q0 2.4 2.1 4.1t5 1.7 5-1.7 2.1-4.1v-8.9q-0.6 0.4-1.4 0.4-1.2 0-2-0.9t-0.8-2 0.8-2 2-0.8q0.8 0 1.5 0.4t1 1q0.2 0 0.4 0 0.6 0 1 0.4t0.4 1v11.4q0 3.3-2.5 5.7t-6.1 2.8v3q0 2.3 2.1 4t5.1 1.7 5-1.7 2.1-4v-8.8q-1.3-0.5-2.1-1.6t-0.7-2.5q0-1.8 1.2-3t3-1.3 3.1 1.3 1.2 3z"></path></g>
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

export default IconStethoscope
