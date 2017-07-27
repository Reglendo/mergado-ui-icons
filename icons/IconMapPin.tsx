

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

class IconMapPin extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--map-pin ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m19.9 24.3q1.5 0 2.9-0.3v14.6q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-14.6q1.3 0.3 2.8 0.3z m0-24.3q4.8 0 8.1 3.3t3.4 8.1-3.4 8.1-8.1 3.4-8.1-3.4-3.3-8.1 3.3-8.1 8.1-3.3z m0 5q0.3 0 0.5-0.2t0.2-0.5-0.2-0.5-0.5-0.2q-3.2 0-5.5 2.3t-2.3 5.5q0 0.3 0.2 0.5t0.5 0.2 0.5-0.2 0.2-0.5q0-2.6 1.9-4.5t4.5-1.9z"></path></g>
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

export default IconMapPin

