

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

class IconArrowsH extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--arrows-h ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m40 20q0 0.6-0.4 1l-5.7 5.7q-0.5 0.4-1 0.4t-1-0.4-0.5-1v-2.8h-22.8v2.8q0 0.6-0.5 1t-1 0.4-1-0.4l-5.7-5.7q-0.4-0.4-0.4-1t0.4-1l5.7-5.7q0.5-0.4 1-0.4t1.1 0.4 0.4 1v2.8h22.8v-2.8q0-0.6 0.5-1t1-0.4 1 0.4l5.7 5.7q0.4 0.4 0.4 1z"></path></g>
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

export default IconArrowsH

