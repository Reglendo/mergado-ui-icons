

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

class IconMobile extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--mobile ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m21.9 31.4q0-0.7-0.6-1.2t-1.2-0.6-1.3 0.6-0.5 1.2 0.5 1.3 1.3 0.5 1.2-0.5 0.6-1.3z m4.6-3.5v-15.8q0-0.2-0.2-0.5t-0.5-0.2h-11.4q-0.3 0-0.5 0.2t-0.3 0.5v15.8q0 0.2 0.3 0.5t0.5 0.2h11.4q0.3 0 0.5-0.2t0.2-0.5z m-4.3-19q0-0.3-0.3-0.3h-3.6q-0.4 0-0.4 0.3t0.4 0.4h3.6q0.3 0 0.3-0.4z m6.4-0.3v22.8q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-22.8q0-1.2 0.8-2t2.1-0.9h11.4q1.1 0 2 0.9t0.8 2z"></path></g>
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

export default IconMobile

