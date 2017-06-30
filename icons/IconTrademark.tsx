

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

class IconTrademark extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--trademark ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m17.4 12.9v2.3q0 0.3-0.2 0.5t-0.5 0.2h-6v16.4q0 0.3-0.2 0.5t-0.4 0.2h-2.8q-0.2 0-0.4-0.2t-0.2-0.5v-16.4h-6.1q-0.2 0-0.4-0.2t-0.2-0.5v-2.3q0-0.3 0.2-0.5t0.5-0.2h16q0.3 0 0.5 0.2t0.2 0.5z m21.1-0.1l1.5 19.5q0 0.3-0.1 0.5-0.2 0.2-0.5 0.2h-2.7q-0.3 0-0.5-0.2t-0.2-0.4l-0.9-11.9-3.8 8.6q-0.2 0.4-0.6 0.4h-2.5q-0.4 0-0.5-0.4l-3.9-8.7-0.9 12q0 0.2-0.2 0.4t-0.4 0.2h-2.7q-0.3 0-0.5-0.2-0.2-0.2-0.2-0.5l1.6-19.5q0-0.2 0.2-0.4t0.4-0.2h2.9q0.4 0 0.6 0.4l4.5 10.5q0.2 0.5 0.4 1.1 0-0.2 0.2-0.5t0.2-0.6l4.5-10.5q0.1-0.4 0.5-0.4h2.9q0.3 0 0.4 0.2t0.3 0.4z"></path></g>
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

export default IconTrademark

