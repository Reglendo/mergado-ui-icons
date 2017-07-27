

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
}
export interface State {
}

class IconSunO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--sun-o ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m32.9 20q0-2.6-1.1-5t-2.7-4.1-4.1-2.7-5-1.1-5 1.1-4.1 2.7-2.7 4.1-1.1 5 1.1 5 2.7 4.1 4.1 2.7 5 1.1 5-1.1 4.1-2.7 2.7-4.1 1.1-5z m6.1 6.2q-0.1 0.3-0.4 0.4l-6.5 2.2v6.8q0 0.4-0.3 0.6-0.4 0.2-0.7 0.1l-6.5-2.1-4 5.5q-0.2 0.3-0.6 0.3t-0.6-0.3l-4-5.5-6.5 2.1q-0.3 0.1-0.7-0.1-0.3-0.2-0.3-0.6v-6.8l-6.5-2.2q-0.3-0.1-0.4-0.4-0.1-0.4 0.1-0.7l4-5.5-4-5.5q-0.2-0.3-0.1-0.7 0.1-0.3 0.4-0.4l6.5-2.2v-6.8q0-0.4 0.3-0.6 0.4-0.2 0.7-0.1l6.5 2.1 4-5.5q0.2-0.3 0.6-0.3t0.6 0.3l4 5.5 6.5-2.1q0.3-0.1 0.7 0.1 0.3 0.2 0.3 0.6v6.8l6.5 2.2q0.3 0.1 0.4 0.4 0.1 0.4-0.1 0.7l-4 5.5 4 5.5q0.2 0.3 0.1 0.7z"></path></g>
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

export default IconSunO

