

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

class IconBus extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--bus`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m11.6 27.1q0-1.1-0.9-2t-2-0.8-2 0.8-0.8 2 0.8 2.1 2 0.8 2-0.8 0.9-2.1z m22.8 0q0-1.1-0.8-2t-2-0.8-2 0.8-0.9 2 0.9 2.1 2 0.8 2-0.8 0.8-2.1z m-1-8.8l-1.6-8.6q-0.1-0.5-0.5-0.8t-0.9-0.3h-20.5q-0.5 0-0.9 0.3t-0.5 0.8l-1.6 8.6q-0.1 0.7 0.3 1.2t1.1 0.5h23.7q0.7 0 1.1-0.5t0.3-1.2z m-5-13.7q0-0.4-0.4-0.7t-0.7-0.3h-14.3q-0.4 0-0.8 0.3t-0.3 0.7 0.3 0.8 0.8 0.3h14.3q0.4 0 0.7-0.3t0.4-0.8z m8.9 16.2v13.5h-2.9v2.8q0 1.2-0.8 2.1t-2 0.8-2-0.8-0.9-2.1v-2.8h-17.1v2.8q0 1.2-0.9 2.1t-2 0.8-2-0.8-0.8-2.1v-2.8h-2.9v-13.5q0-2.5 0.6-5l2.3-10.1q0.2-1.7 2.1-3t5.2-2 6.9-0.7 7 0.7 5.2 2 2.1 3l2.4 10.1q0.5 2.3 0.5 5z"></path></g>
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

export default IconBus

