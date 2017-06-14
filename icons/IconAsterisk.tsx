

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

class IconAsterisk extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--asterisk ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m34.6 23.4q1 0.6 1.3 1.8t-0.3 2.1l-1.4 2.5q-0.6 1-1.7 1.3t-2.2-0.3l-5.9-3.4v6.9q0 1.1-0.9 2t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2v-6.9l-6 3.4q-1 0.6-2.1 0.3t-1.8-1.3l-1.4-2.5q-0.6-1-0.3-2.1t1.4-1.8l5.9-3.4-5.9-3.4q-1.1-0.6-1.4-1.8t0.3-2.1l1.4-2.5q0.6-1 1.8-1.3t2.1 0.3l6 3.4v-6.9q0-1.1 0.8-2t2-0.8h2.9q1.2 0 2 0.8t0.9 2v6.9l5.9-3.4q1-0.6 2.2-0.3t1.7 1.3l1.4 2.5q0.6 1 0.3 2.1t-1.3 1.8l-6 3.4z"></path></g>
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

export default IconAsterisk

