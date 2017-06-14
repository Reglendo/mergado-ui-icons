

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

class IconXing extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--xing ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m17.8 14.9q-0.2 0.4-5.7 10.2-0.6 1-1.5 1h-5.3q-0.5 0-0.7-0.4t0-0.8l5.7-10q0 0 0 0l-3.6-6.2q-0.3-0.5-0.1-0.9 0.2-0.3 0.8-0.3h5.3q0.9 0 1.5 1z m18-14.3q0.3 0.3 0 0.8l-11.8 20.8v0.1l7.5 13.7q0.3 0.4 0.1 0.8-0.3 0.3-0.8 0.3h-5.3q-0.9 0-1.5-1l-7.5-13.8 11.8-21.1q0.6-1 1.4-1h5.4q0.5 0 0.7 0.4z"></path></g>
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

export default IconXing

