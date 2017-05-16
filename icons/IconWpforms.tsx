

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

class IconWpforms extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--wpforms`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m14.5 20.3v2.9h-5.6v-2.9h5.6z m0-5.7v2.9h-5.6v-2.9h5.6z m16.9 11.4v2.9h-7.6v-2.8h7.6z m0-5.7v2.9h-15v-2.9h15z m0-5.7v2.9h-15v-2.9h15z m3 19.2v-27.6q0-0.2-0.1-0.4t-0.3-0.1h-0.7l-8.5 5.7-4.7-3.8-4.6 3.8-8.5-5.7h-0.7q-0.2 0-0.3 0.1t-0.1 0.4v27.6q0 0.2 0.1 0.4t0.3 0.1h27.7q0.2 0 0.3-0.1t0.1-0.4z m-19.1-24.7l4.2-3.4h-9.1z m9.6 0l5-3.4h-9.1z m12.4-2.9v27.6q0 1.4-1 2.4t-2.3 0.9h-27.7q-1.4 0-2.3-0.9t-1-2.4v-27.6q0-1.4 1-2.4t2.3-0.9h27.7q1.4 0 2.3 0.9t1 2.4z"></path></g>
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

export default IconWpforms
