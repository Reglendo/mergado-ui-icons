

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

class IconMarsStrokeH extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--mars-stroke-h ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39.5 20.4q0.4 0.4 0.4 0.9t-0.4 1l-6.1 6.1q-0.2 0.2-0.5 0.2t-0.5-0.2l-0.9-1q-0.2-0.2-0.2-0.4t0.2-0.5l3.8-3.8h-6.1v4.6q0 0.3-0.2 0.5t-0.4 0.2h-1.4q-0.3 0-0.4-0.2t-0.2-0.5v-4.6h-2.8q-0.5 4.5-3.9 7.5t-7.9 3.1q-3.5 0-6.4-1.8t-4.4-4.9-1.1-6.6q0.3-2.8 1.8-5.1t3.9-3.8 5.2-1.7q3.2-0.2 6 1.1t4.7 3.9 2.1 5.6h2.8v-4.7q0-0.2 0.2-0.4t0.4-0.2h1.4q0.3 0 0.4 0.2t0.2 0.4v4.7h6.1l-3.8-3.8q-0.2-0.2-0.2-0.5t0.2-0.5l0.9-0.9q0.2-0.2 0.5-0.2t0.5 0.2z m-27.5 10.2q3.8 0 6.5-2.7t2.8-6.6-2.8-6.5-6.5-2.8-6.6 2.8-2.7 6.5 2.7 6.6 6.6 2.7z"></path></g>
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

export default IconMarsStrokeH

