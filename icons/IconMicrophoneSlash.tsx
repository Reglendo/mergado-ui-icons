

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

class IconMicrophoneSlash extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--microphone-slash ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m10.6 21.1l-2.3 2.2q-0.9-2.3-0.9-4.7v-2.9q0-0.6 0.4-1t1-0.4 1 0.4 0.4 1v2.9q0 1.2 0.3 2.5z m24.8-13.4l-8 8v2.9q0 2.9-2.1 5t-5.1 2.1q-1.2 0-2.4-0.4l-2.2 2.1q2.2 1.2 4.6 1.2 4.1 0 7.1-3t2.9-7v-2.9q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v2.9q0 4.9-3.3 8.6t-8.2 4.1v3h5.8q0.5 0 1 0.4t0.4 1-0.4 1-1 0.4h-14.3q-0.6 0-1-0.4t-0.5-1 0.5-1 1-0.4h5.7v-3q-2.8-0.2-5.3-1.8l-5.6 5.7q-0.3 0.2-0.5 0.2t-0.6-0.2l-1.8-1.8q-0.2-0.3-0.2-0.5t0.2-0.6l27.6-27.5q0.2-0.2 0.5-0.2t0.5 0.2l1.8 1.8q0.2 0.3 0.2 0.5t-0.2 0.6z m-8.5-3l-13.8 13.9v-11.5q0-2.9 2.1-5t5-2.1q2.3 0 4.1 1.3t2.6 3.4z"></path></g>
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

export default IconMicrophoneSlash

