

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

class IconYoutubeSquare extends React.Component<Props, State> {

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
                    <g><path d="m23.5 29.1v-3.5q0-1.1-0.6-1.1-0.4 0-0.8 0.3v5q0.4 0.4 0.8 0.4 0.6 0 0.6-1.1z m4.1-2.7h1.5v-0.8q0-1.1-0.7-1.1t-0.8 1.1v0.8z m-12.7-6v1.6h-1.8v9.4h-1.7v-9.4h-1.7v-1.6h5.2z m4.5 2.8v8.2h-1.5v-0.9q-0.9 1-1.7 1-0.8 0-1-0.6-0.1-0.3-0.1-1.2v-6.5h1.5v6.1q0 0.5 0 0.5 0 0.4 0.3 0.4 0.5 0 1-0.7v-6.3h1.5z m5.6 2.5v3.3q0 1.1-0.2 1.6-0.2 0.9-1.1 0.9-0.8 0-1.6-0.9v0.8h-1.5v-11h1.5v3.6q0.7-0.9 1.6-0.9 0.9 0 1.1 1 0.2 0.4 0.2 1.6z m5.6 2.9v0.2q0 0.6-0.1 1 0 0.4-0.3 0.8-0.6 0.9-1.8 0.9-1.1 0-1.8-0.8-0.5-0.6-0.5-1.9v-2.9q0-1.3 0.5-1.9 0.6-0.9 1.8-0.9t1.7 0.9q0.5 0.6 0.5 1.9v1.7h-3v1.4q0 1.2 0.8 1.2 0.5 0 0.6-0.6 0 0 0.1-0.2t0-0.3v-0.5h1.5z m-10.1-18.4v3.5q0 1.1-0.7 1.1t-0.7-1.1v-3.5q0-1.2 0.7-1.2t0.7 1.2z m11.9 15.9q0-3.9-0.4-5.8-0.2-1-1-1.6t-1.7-0.8q-3-0.3-9.2-0.3-6.1 0-9.1 0.3-1 0.1-1.7 0.8t-1 1.6q-0.4 2-0.4 5.8 0 3.9 0.4 5.8 0.2 1 1 1.7t1.6 0.7q3.1 0.4 9.2 0.4t9.2-0.4q1-0.1 1.7-0.7t1-1.7q0.4-1.9 0.4-5.8z m-16.8-14.5l2-6.6h-1.7l-1.1 4.3-1.2-4.3h-1.8l0.6 1.5 0.5 1.6q0.8 2.3 1 3.5v4.5h1.7v-4.5z m6.4 1.8v-2.9q0-1.3-0.5-1.9-0.6-0.9-1.7-0.9-1.1 0-1.7 0.9-0.5 0.6-0.5 1.9v2.9q0 1.3 0.5 1.9 0.6 0.9 1.7 0.9 1.1 0 1.7-0.9 0.5-0.6 0.5-1.9z m4.1 2.7h1.5v-8.3h-1.5v6.3q-0.5 0.7-1 0.7-0.3 0-0.3-0.3-0.1-0.1-0.1-0.6v-6.1h-1.5v6.6q0 0.8 0.2 1.2 0.2 0.6 0.9 0.6 0.8 0 1.8-1v0.9z m11.2-6.8v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconYoutubeSquare

