

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

class IconFastBackward extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--fast-backward ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39 3.1q0.4-0.4 0.7-0.2t0.3 0.7v32.8q0 0.6-0.3 0.7t-0.7-0.2l-15.9-15.9q-0.2-0.2-0.2-0.4v15.8q0 0.6-0.3 0.7t-0.7-0.2l-15.9-15.9q-0.2-0.2-0.3-0.4v15.1q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-31.4q0-0.6 0.4-1t1-0.4h2.9q0.6 0 1 0.4t0.4 1v15.1q0.1-0.2 0.3-0.4l15.9-15.9q0.4-0.4 0.7-0.2t0.3 0.7v15.8q0-0.2 0.2-0.4z"></path></g>
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

export default IconFastBackward

