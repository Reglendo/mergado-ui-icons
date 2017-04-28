

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

class IconHandPeaceO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--hand-peace-o`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m31.8 14.4q1.3 0 2.3 0.6 3.2 1.4 3.2 5v3.9q0 2.2-0.5 4.2l-1.9 7.6q-0.5 1.9-2 3.1t-3.6 1.2h-14.9q-2.3 0-4-1.7t-1.7-4v-9l-5.3-14q-0.4-1-0.4-2 0-2.4 1.7-4.1t4-1.6q1.8 0 3.3 1t2 2.7l0.4 0.9v-2.5q0-2.4 1.7-4t4-1.7 4.1 1.7 1.7 4v5.8q0.6-0.1 1-0.1 1.6 0 2.9 0.8t1.9 2.2z m-4.9-0.1q-0.7 0-1.3 0.4t-0.9 1.1l-1.7 3.6-1.6 3.5h1.2q1.2 0 2.1 0.7t1.1 1.8l3.4-7.6q0.2-0.4 0.2-1 0-1-0.7-1.8t-1.8-0.7z m5 3q-0.5 0-0.9 0.2t-0.7 0.3-0.5 0.7-0.4 0.7-0.4 0.8l-2.9 6.5q-0.2 0.4-0.2 1 0 1 0.7 1.8t1.8 0.7q0.7 0 1.3-0.4t0.9-1.1l3.6-7.8q0.2-0.4 0.2-0.9 0-1.1-0.7-1.8t-1.8-0.7z m-26-8q0 0.5 0.1 1l5.6 14.5v1.6l2.2-2.5q1-1 2.4-1h4.4l2.4-5.2v-12q0-1.2-0.8-2t-2.1-0.8-2 0.8-0.8 2v14.3h-1.4l-4.5-11.7q-0.3-0.9-1.1-1.4t-1.6-0.5q-1.2 0-2 0.9t-0.8 2z m23.4 27.8q1 0 1.8-0.6t1-1.5l1.9-7.6q0.4-1.6 0.4-3.5v-2l-3.1 6.9q-0.4 0.9-1.2 1.4t-1.7 0.5q-1.2 0-2.1-0.8t-1.1-1.9q-1 1.3-2.6 1.3h-4.6v-0.7h4.6q1.1 0 1.8-0.8t0.8-1.7-0.7-1.8-1.7-0.7h-6.6q-1.1 0-1.8 0.8l-2.8 3v6.9q0 1.2 0.8 2t2 0.8h14.9z"></path></g>
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

export default IconHandPeaceO

