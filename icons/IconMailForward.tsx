

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

class IconMailForward extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--mail-forward ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m40 14.3q0 0.6-0.4 1l-11.5 11.4q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-5.7h-5q-2.2 0-3.9 0.1t-3.4 0.5-3 1-2.4 1.5-1.7 2.3-1.1 3.1-0.4 4q0 1.2 0.1 2.7 0 0.2 0 0.6t0.1 0.6q0 0.3-0.2 0.5t-0.5 0.2q-0.4 0-0.6-0.3-0.2-0.2-0.3-0.5t-0.3-0.7-0.3-0.5q-2.8-6.4-2.8-10.1 0-4.4 1.2-7.4 3.6-9 19.5-9h5v-5.7q0-0.6 0.4-1t1-0.5 1 0.5l11.5 11.4q0.4 0.4 0.4 1z"></path></g>
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

export default IconMailForward

