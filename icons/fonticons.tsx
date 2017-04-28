

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

class IconFonticons extends React.Component<Props, State> {

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
                    <g><path d="m3 2.9h34.3v34.2h-34.3v-34.2z m20.3 7.1l-0.3 0.7 1.7 1.9-0.7 2.5 0.5 0.6 2.4-1.3 2.4 1.3 0.6-0.6-0.7-2.5 1.7-1.9-0.3-0.7h-2.1l-1.2-2.1h-0.7l-1.2 2.1h-2.1z m-6 3.6q0.7 0 1 0.4t0.3 1.4l3.8-0.5q0-1.2-0.3-2t-1.2-1.3-1.5-0.6-1.9-0.1q-3 0-4.5 1.3t-1.4 4.1v1.6h-2.2v2.8h1.7q0.5 0 0.5 0.2v8.5q0 0.3-0.1 0.5t-0.4 0.1l-1.7 0.2v1.9h10v-1.9l-3.3-0.3q-0.1 0-0.2 0t-0.1-0.1 0-0.1 0-0.1 0.1-0.2v-8.7h4.2l0.9-2.8h-5.2q-0.1 0 0-0.2t0.1-0.2v-1.8q0-0.6 0-0.9t0.2-0.6 0.4-0.4 0.8-0.2z m13.6 18.5v-1.9l-1.2-0.2q-0.2 0-0.3 0t0-0.1 0-0.2 0-0.2v-11.6h-6.1l-0.5 2.2 1.8 0.5q0.5 0.2 0.5 0.6v8.3q0 0.3-0.1 0.4t-0.4 0.1l-1.6 0.2v1.9h7.9z"></path></g>
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

export default IconFonticons

