

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

class IconFire extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--fire ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.9 37.9v1.4q0 0.3-0.2 0.5t-0.5 0.2h-30q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.3h30q0.3 0 0.5 0.3t0.2 0.5z m-5.7-23.6q0 1.7-0.5 3.2t-1.5 2.5-1.9 2-2.2 1.7-1.9 1.6-1.4 1.8-0.6 2.2q0 2.1 1.5 5l-0.1 0 0 0q-2-0.9-3.5-1.9t-3.1-2.2-2.6-2.7-1.6-3.4-0.6-4.1q0-1.7 0.6-3.2t1.4-2.5 1.9-2 2.2-1.7 1.9-1.6 1.5-1.8 0.5-2.2q0-2.1-1.5-5l0.1 0 0 0q2 0.9 3.6 1.9t3 2.2 2.6 2.7 1.6 3.4 0.6 4.1z"></path></g>
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

export default IconFire

