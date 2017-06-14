

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

class IconSnapchatGhost extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--snapchat-ghost ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m20.4 2.9q3-0.1 5.4 1.5t3.6 4.3q0.7 1.3 0.7 4 0 1-0.2 4.2 0.3 0.2 0.6 0.2 0.4 0 1.1-0.3t1.2-0.3q0.6 0 1.2 0.4t0.6 1q0 0.7-0.7 1.2t-1.5 0.7-1.6 0.7-0.7 1q0 0.4 0.3 1 0.8 1.8 2.3 3.3t3.2 2.3q0.6 0.3 1.8 0.5 0.6 0.1 0.6 0.8 0 1.6-4.9 2.3-0.1 0.2-0.2 0.9t-0.3 1-0.8 0.4q-0.4 0-1.4-0.1t-1.4-0.2q-0.8 0-1.4 0.1-0.7 0.1-1.4 0.5t-1.3 0.9-1.3 0.9-1.7 0.7-2.2 0.3q-1.1 0-2.1-0.3t-1.7-0.7-1.3-0.9-1.3-0.9-1.4-0.5q-0.5-0.1-1.4-0.1-0.5 0-1.4 0.2t-1.3 0.2q-0.6 0-0.8-0.5t-0.3-1-0.3-0.9q-4.9-0.7-4.9-2.3 0-0.7 0.7-0.8 1.1-0.2 1.7-0.5 1.8-0.7 3.3-2.3t2.3-3.3q0.2-0.6 0.2-1 0-0.6-0.7-1t-1.5-0.7-1.6-0.7-0.7-1.2q0-0.6 0.6-1t1.2-0.4q0.4 0 1.1 0.3t1.2 0.3q0.4 0 0.7-0.2-0.2-3.1-0.2-4.2 0-2.7 0.6-4 1.4-3.1 3.8-4.4t5.9-1.4z"></path></g>
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

export default IconSnapchatGhost

