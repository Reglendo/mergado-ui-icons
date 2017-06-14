

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

class IconMagic extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--magic ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m27.6 13l6.5-6.6-2.4-2.4-6.5 6.6z m9.9-6.6q0 0.6-0.4 1l-28.7 28.7q-0.4 0.4-1 0.4t-1-0.4l-4.4-4.4q-0.4-0.4-0.4-1t0.4-1l28.7-28.7q0.4-0.4 1-0.4t1 0.4l4.4 4.4q0.4 0.4 0.4 1z m-30.1-4.2l2.2 0.7-2.2 0.6-0.7 2.2-0.7-2.2-2.1-0.6 2.1-0.7 0.7-2.2z m7.8 3.6l4.4 1.3-4.4 1.4-1.3 4.4-1.4-4.4-4.4-1.4 4.4-1.3 1.4-4.4z m20.8 10.7l2.1 0.6-2.1 0.7-0.7 2.2-0.7-2.2-2.2-0.7 2.2-0.6 0.7-2.2z m-14.3-14.3l2.2 0.7-2.2 0.6-0.7 2.2-0.7-2.2-2.2-0.6 2.2-0.7 0.7-2.2z"></path></g>
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

export default IconMagic

