

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

class IconAndroid extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--android ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m15.5 10.8q0.4 0 0.6-0.3t0.3-0.6-0.3-0.6-0.6-0.3-0.6 0.3-0.2 0.6 0.2 0.6 0.6 0.3z m9.4 0q0.4 0 0.6-0.3t0.3-0.6-0.3-0.6-0.6-0.3-0.6 0.3-0.2 0.6 0.2 0.6 0.6 0.3z m-18.1 4.1q0.9 0 1.6 0.7t0.7 1.6v9.6q0 0.9-0.7 1.6t-1.6 0.7-1.6-0.7-0.7-1.6v-9.6q0-1 0.7-1.6t1.6-0.7z m23.7 0.4v14.9q0 1-0.8 1.7t-1.7 0.7h-1.6v5.1q0 1-0.7 1.6t-1.6 0.7-1.7-0.7-0.6-1.6v-5.1h-3.1v5.1q0 1-0.7 1.6t-1.6 0.7q-1 0-1.6-0.7t-0.7-1.6l0-5.1h-1.7q-1 0-1.7-0.7t-0.7-1.7v-14.9h20.5z m-5.2-9q2.4 1.2 3.8 3.4t1.4 4.8h-20.6q0-2.6 1.4-4.8t3.8-3.4l-1.5-3q-0.2-0.2 0.1-0.4 0.3-0.1 0.4 0.1l1.6 3q2.1-1 4.5-1t4.5 1l1.6-3q0.2-0.2 0.5-0.1 0.2 0.2 0.1 0.4z m10.6 10.9v9.6q0 0.9-0.6 1.6t-1.7 0.7q-0.9 0-1.6-0.7t-0.6-1.6v-9.6q0-1 0.6-1.7t1.6-0.6q1 0 1.7 0.6t0.6 1.7z"></path></g>
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

export default IconAndroid

