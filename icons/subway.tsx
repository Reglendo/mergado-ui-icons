

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

class IconSubway extends React.Component<Props, State> {

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
                    <g><path d="m27.3 0q4.1 0 7.1 2.1t2.9 5v20q0 2.9-2.8 5t-6.8 2.2l4.7 4.5q0.4 0.3 0.2 0.8t-0.7 0.4h-23.5q-0.5 0-0.7-0.4t0.2-0.8l4.7-4.5q-4-0.2-6.8-2.2t-2.8-5v-20q0-2.9 2.9-5t7.1-2.1h14.3z m-17.9 29.3q1.5 0 2.5-1.1t1.1-2.5-1.1-2.5-2.5-1.1-2.5 1.1-1 2.5 1 2.5 2.5 1.1z m9.3-12.2v-11.4h-12.1v11.4h12.1z m12.2 12.2q1.4 0 2.5-1.1t1-2.5-1-2.5-2.5-1.1-2.6 1.1-1 2.5 1 2.5 2.6 1.1z m3.5-12.2v-11.4h-12.8v11.4h12.8z"></path></g>
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

export default IconSubway

