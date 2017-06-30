

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

class IconWifi extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--wifi ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m19.9 32.2q-0.4 0-1.8-1.5t-1.4-1.8q0-0.6 1.2-1t2-0.4 2 0.4 1.2 1q0 0.4-1.4 1.8t-1.8 1.5z m5.2-5.3q0 0-0.8-0.5t-1.9-0.9-2.5-0.5-2.5 0.5-2 0.9-0.8 0.5q-0.3 0-1.8-1.4t-1.4-1.9q0-0.2 0.1-0.4 1.6-1.5 3.9-2.3t4.5-0.9 4.5 0.9 3.8 2.3q0.2 0.2 0.2 0.4 0 0.4-1.5 1.9t-1.8 1.4z m5.3-5.3q-0.2 0-0.4-0.1-2.7-2.1-4.9-3t-5.2-1q-1.7 0-3.3 0.4t-2.9 1.1-2.2 1.2-1.6 1-0.6 0.4q-0.3 0-1.7-1.4t-1.5-1.8q0-0.3 0.2-0.5 2.6-2.5 6.2-3.9t7.4-1.5 7.4 1.5 6.2 3.9q0.2 0.2 0.2 0.5 0 0.3-1.5 1.8t-1.8 1.4z m5.3-5.2q-0.2 0-0.5-0.2-3.4-3.1-7.2-4.6t-8.1-1.5-8.2 1.5-7.2 4.6q-0.2 0.2-0.4 0.2-0.4 0-1.8-1.5t-1.5-1.8q0-0.2 0.2-0.4 3.6-3.6 8.6-5.6t10.3-2 10.2 2 8.6 5.6q0.2 0.2 0.2 0.4 0 0.4-1.4 1.8t-1.8 1.5z"></path></g>
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

export default IconWifi

