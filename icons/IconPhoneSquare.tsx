

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

class IconPhoneSquare extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--phone-square ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m31.6 26.6q0-0.2-0.1-0.3 0-0.2-0.8-0.7t-2-1.1l-1.2-0.6q-0.1-0.1-0.4-0.3t-0.6-0.4-0.4-0.1q-0.4 0-1.1 0.7t-1.3 1.5-0.9 0.7q-0.2 0-0.4 0t-0.4-0.2-0.3-0.2-0.4-0.2q-2.2-1.2-3.8-2.8t-2.8-3.8q0-0.1-0.2-0.3t-0.2-0.4-0.1-0.3-0.1-0.4q0-0.3 0.4-0.8t1.1-0.8 1-0.9 0.4-0.8q0-0.2-0.1-0.5t-0.3-0.5-0.3-0.5q-0.1-0.1-0.4-0.6t-0.5-1-0.6-1.1-0.6-0.9-0.3-0.4-0.4 0q-1.1 0-2.2 0.5-1.1 0.4-1.8 2.1t-0.8 2.9q0 0.3 0.1 0.7t0.1 0.7 0.2 0.8 0.2 0.6 0.3 0.8 0.2 0.6q1.4 3.7 4.9 7.2t7.1 4.8q0.2 0.1 0.7 0.3t0.7 0.2 0.7 0.3 0.7 0.2 0.7 0.1 0.8 0q1.2 0 2.9-0.7t2.1-1.8q0.5-1.2 0.5-2.3z m5.7-17.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
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

export default IconPhoneSquare

