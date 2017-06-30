

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

class IconUserPlus extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--user-plus ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m13.7 20q-3.1 0-5.3-2.2t-2.2-5.3 2.2-5.2 5.3-2.2 5.2 2.2 2.2 5.2-2.2 5.3-5.2 2.2z m18.6 2.5h6.8q0.3 0 0.5 0.2t0.2 0.4v3.7q0 0.3-0.2 0.5t-0.5 0.2h-6.8v6.8q0 0.2-0.2 0.4t-0.4 0.2h-3.7q-0.3 0-0.5-0.2t-0.2-0.4v-6.8h-6.8q-0.3 0-0.4-0.2t-0.2-0.5v-3.7q0-0.2 0.2-0.4t0.4-0.2h6.8v-6.8q0-0.3 0.2-0.5t0.4-0.2h3.8q0.2 0 0.4 0.2t0.2 0.5v6.8z m-14.3 4.3q0 1 0.7 1.8t1.8 0.7h5v4.6q-1.4 1-3.4 1h-16.9q-2.4 0-3.8-1.3t-1.4-3.7q0-1 0.1-2t0.2-2.1 0.6-2.2 0.8-1.8 1.2-1.6 1.7-1.1 2.1-0.3q0.4 0 0.8 0.3 1.5 1.2 3 1.8t3.2 0.6 3.2-0.6 3-1.8q0.3-0.3 0.7-0.3 2.6 0 4.2 1.8h-4.3q-1 0-1.7 0.8t-0.8 1.7v3.7z"></path></g>
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

export default IconUserPlus

