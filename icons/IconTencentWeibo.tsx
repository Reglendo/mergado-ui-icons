

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

class IconTencentWeibo extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--tencent-weibo ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m24.3 12.8q0 1.8-1.3 3t-3 1.3q-1.4 0-2.5-0.8-1.4 1.5-2.6 3.3-5.5 8.2-4.5 19.1 0.1 0.5-0.2 0.9t-0.8 0.4h-0.1q-0.5 0-0.8-0.3t-0.4-0.8q-0.3-2.8-0.1-5.5t0.7-4.8 1.2-4.2 1.5-3.4 1.7-2.8q1.3-2 2.9-3.7-0.3-0.8-0.3-1.7 0-1.8 1.2-3.1t3.1-1.2 3 1.2 1.3 3.1z m8.5 0.2q0 3.5-1.7 6.5t-4.8 4.8-6.5 1.7q-1.4 0-2.9-0.3-0.5-0.1-0.8-0.5t-0.1-0.9q0.1-0.5 0.5-0.7t0.9-0.2q1.1 0.3 2.4 0.3 2.2 0 4.1-0.8t3.5-2.3 2.2-3.4 0.9-4.2-0.9-4.1-2.2-3.5-3.5-2.2-4.1-0.9-4.2 0.9-3.4 2.2-2.3 3.5-0.8 4.1q0 2.6 1.2 4.9 0.2 0.4 0 0.9t-0.5 0.6-0.9 0.1-0.7-0.6q-1.4-2.7-1.4-5.9 0-2.6 1-5.1t2.8-4.1 4.1-2.8 5.1-1q3.5 0 6.5 1.7t4.8 4.8 1.7 6.5z"></path></g>
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

export default IconTencentWeibo

