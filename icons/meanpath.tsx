

import * as React from "react"

export interface Props {
    /** Icon type */
    type: string
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

class IconMeanpath extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        type: "reglendo",
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--${this.props.type}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m32.3 18.8v2.5q0 0.6-0.3 0.9t-0.9 0.3h-4.5q-0.5 0-0.8-0.3t-0.3-0.9v-2.5q0-0.5 0.3-0.9t0.8-0.3h4.5q0.6 0 0.9 0.3t0.3 0.9z m-11 5.1v-5.5q0-1.2-0.7-2t-1.9-0.7h-3q-1.5 0-2.1 1.2-0.6-1.2-2.2-1.2h-2.9q-1.1 0-1.9 0.7t-0.7 2v5.5q0 0.5 0.5 0.5h1.2q0.5 0 0.5-0.5v-5.1q0-0.5 0.3-0.9t0.9-0.3h2q0.6 0 0.9 0.3t0.3 0.9v5.1q0 0.5 0.5 0.5h1.2q0.5 0 0.5-0.5v-5.1q0-0.5 0.3-0.9t0.8-0.3h2.2q0.5 0 0.8 0.3t0.3 0.9v5.1q0 0.5 0.5 0.5h1.3q0.4 0 0.4-0.5z m13.2-2.1v-3.5q0-1.1-0.8-1.9t-1.9-0.7h-5.9q-1.2 0-1.9 0.7t-0.7 1.9v9.2q0 0.5 0.5 0.5h1.2q0.5 0 0.5-0.5v-4q0.6 0.9 2.1 0.9h4.2q1.2 0 1.9-0.7t0.8-1.9z m2.8-13.8v24q0 2.1-1.5 3.6t-3.7 1.5h-23.9q-2.2 0-3.7-1.5t-1.5-3.6v-24q0-2.1 1.5-3.6t3.7-1.5h23.9q2.1 0 3.7 1.5t1.5 3.6z"></path></g>
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

export default IconMeanpath

