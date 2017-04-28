

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

class IconGamepad extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--gamepad`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m17.3 24v-2.7q0-0.3-0.2-0.4t-0.5-0.2h-4v-4q0-0.3-0.2-0.5t-0.4-0.2h-2.7q-0.3 0-0.5 0.2t-0.2 0.5v4h-3.9q-0.3 0-0.5 0.1t-0.2 0.5v2.7q0 0.3 0.2 0.5t0.5 0.2h3.9v3.9q0 0.3 0.2 0.5t0.5 0.2h2.7q0.3 0 0.4-0.2t0.2-0.5v-3.9h4q0.3 0 0.5-0.2t0.2-0.5z m11.9 1.3q0-1.1-0.7-1.9t-1.9-0.7-1.9 0.7-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.7-1.9z m5.4-5.3q0-1.1-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.8-1.9z m5.3 2.7q0 4.4-3.1 7.5t-7.6 3.1q-4 0-7-2.7h-4.6q-3 2.7-7 2.7-4.4 0-7.5-3.1t-3.1-7.5 3.1-7.6 7.5-3.1h18.6q4.4 0 7.6 3.1t3.1 7.6z"></path></g>
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

export default IconGamepad

