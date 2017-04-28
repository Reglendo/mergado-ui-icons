

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

class IconStackExchange extends React.Component<Props, State> {

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
                    <g><path d="m33.6 28v1.4q0 1.9-1.3 3.3t-3.1 1.3h-1.2l-5.8 6v-6h-11.9q-1.8 0-3-1.3t-1.3-3.3v-1.4h27.6z m0-7.3v5.7h-27.6v-5.7h27.6z m0-7.3v5.7h-27.6v-5.7h27.6z m0-3.2v1.5h-27.6v-1.5q0-1.8 1.3-3.2t3-1.3h18.9q1.8 0 3.1 1.3t1.3 3.2z"></path></g>
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

export default IconStackExchange

