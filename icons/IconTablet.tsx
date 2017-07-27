

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

class IconTablet extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--tablet ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m21.3 31.4q0-0.5-0.4-1t-1-0.4-1 0.4-0.5 1 0.5 1 1 0.5 1-0.5 0.4-1z m8.6-3.5v-21.5q0-0.3-0.3-0.5t-0.5-0.2h-18.5q-0.3 0-0.5 0.2t-0.2 0.5v21.5q0 0.2 0.2 0.5t0.5 0.2h18.5q0.3 0 0.5-0.2t0.3-0.5z m2.8-21.5v24.3q0 1.5-1 2.5t-2.6 1.1h-18.5q-1.5 0-2.6-1.1t-1-2.5v-24.3q0-1.4 1.1-2.5t2.5-1h18.5q1.5 0 2.6 1t1 2.5z"></path></g>
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

export default IconTablet

