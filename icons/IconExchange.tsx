

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

class IconExchange extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--exchange`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m40 26.4v4.3q0 0.3-0.2 0.5t-0.5 0.2h-30.7v4.3q0 0.3-0.2 0.5t-0.5 0.2q-0.3 0-0.6-0.2l-7.1-7.1q-0.2-0.2-0.2-0.5 0-0.3 0.2-0.5l7.1-7.2q0.2-0.2 0.6-0.2 0.2 0 0.5 0.2t0.2 0.5v4.3h30.7q0.3 0 0.5 0.2t0.2 0.5z m0-12.1q0 0.3-0.2 0.5l-7.1 7.1q-0.2 0.2-0.6 0.2-0.2 0-0.5-0.2t-0.2-0.5v-4.3h-30.7q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.2 0.2-0.5t0.5-0.2h30.7v-4.3q0-0.3 0.2-0.5t0.5-0.2q0.3 0 0.6 0.3l7.1 7.1q0.2 0.2 0.2 0.5z"></path></g>
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

export default IconExchange
