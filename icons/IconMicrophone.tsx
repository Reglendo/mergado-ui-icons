

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

class IconMicrophone extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--microphone ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m32.7 15.7v2.9q0 4.9-3.3 8.6t-8.1 4.1v3h5.7q0.6 0 1 0.4t0.4 1-0.4 1-1 0.4h-14.3q-0.6 0-1-0.4t-0.4-1 0.4-1 1-0.4h5.7v-3q-4.8-0.5-8.1-4.1t-3.3-8.6v-2.9q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v2.9q0 4.1 2.9 7t7.1 3 7-3 3-7v-2.9q0-0.6 0.4-1t1-0.4 1 0.4 0.4 1z m-5.7-8.6v11.5q0 2.9-2.1 5t-5 2.1-5.1-2.1-2.1-5v-11.5q0-2.9 2.1-5t5.1-2.1 5 2.1 2.1 5z"></path></g>
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

export default IconMicrophone

