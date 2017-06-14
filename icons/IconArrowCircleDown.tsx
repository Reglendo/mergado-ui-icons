

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

class IconArrowCircleDown extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--arrow-circle-down ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m31.7 20q0-0.6-0.4-1l-2.1-2q-0.4-0.4-1-0.4t-1 0.4l-4.2 4.2v-11.2q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v11.2l-4.2-4.2q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1t0.4 1l10.1 10.1q0.4 0.4 1 0.4t1.1-0.4l10.1-10.1q0.4-0.4 0.4-1z m5.6 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconArrowCircleDown

