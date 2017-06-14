

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

class IconTicket extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--ticket ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m22.9 10.1l7 7-12.8 12.8-7-7z m-4.8 21.8l13.8-13.8q0.5-0.4 0.5-1t-0.5-1l-8-8q-0.4-0.4-1-0.4t-1 0.4l-13.8 13.8q-0.5 0.4-0.5 1t0.5 1l8 8q0.4 0.4 1 0.4t1-0.4z m19.9-14.2l-20.3 20.3q-0.8 0.8-2 0.8t-2-0.8l-2.8-2.8q1.2-1.3 1.2-3.1t-1.2-3-3-1.2-3.1 1.2l-2.8-2.8q-0.8-0.8-0.8-2t0.8-2l20.3-20.3q0.8-0.8 2-0.8t2 0.8l2.8 2.8q-1.2 1.3-1.2 3.1t1.2 3 3 1.2 3.1-1.2l2.8 2.8q0.8 0.8 0.8 2t-0.8 2z"></path></g>
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

export default IconTicket

