

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
}
export interface State {
}

class IconShip extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--ship ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.2 32.8q0.3-0.4 0.8-0.4t0.9 0.4l2.5 2.5-1.8 1.7-1.6-1.6-1.6 1.6q-0.3 0.4-0.9 0.4t-0.8-0.4l-1.6-1.6-1.7 1.6q-0.3 0.4-0.8 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.8-0.4l-1.7-1.6-1.6 1.6q-0.3 0.4-0.8 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.8-0.4l-2.5-2.5 1.7-1.7 1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.3-0.4 0.8-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.8 0.4l1.6 1.6z m-30.6-0.7q-0.4 0.3-0.9 0.3t-0.8-0.3l-2.5-2.5 1.7-1.8 1.6 1.6 1.6-1.6q0.4-0.3 0.9-0.3t0.9 0.3l1.6 1.6 1.2-1.2v-5.7l-4-6.1q-0.4-0.5-0.2-1.1t0.8-0.8l3.4-1.1v-5.8h2.5v-2.5h5v-2.5h5v2.5h4.9v2.5h2.5v5.8l3.4 1.1q0.6 0.2 0.8 0.8t-0.1 1.1l-4.1 6.1v5.7l0.4-0.4q0.4-0.3 0.9-0.3t0.8 0.3l1.6 1.6 1.7-1.6q0.3-0.3 0.8-0.3t0.9 0.3l2.5 2.5-1.8 1.8-1.6-1.7-1.6 1.7q-0.3 0.3-0.9 0.3t-0.8-0.3l-1.6-1.7-1.7 1.7q-0.3 0.3-0.8 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.8-0.3l-1.7-1.7-1.6 1.7q-0.3 0.3-0.8 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.9-0.3l-1.6-1.7z m7.8-22v2.4l7.5-2.4 7.4 2.4v-2.4h-2.5v-2.5h-9.9v2.5h-2.5z"></path></g>
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

export default IconShip

