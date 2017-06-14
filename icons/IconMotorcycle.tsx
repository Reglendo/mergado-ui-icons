

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

class IconMotorcycle extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--motorcycle ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39.5 22.4q0.2 1.8-0.4 3.4t-1.7 2.8-2.7 1.8-3.4 0.6q-2.7-0.2-4.8-2.2t-2.3-4.7q-0.2-1.9 0.5-3.6t2-2.9l-1.2-1.9q-1.6 1.4-2.6 3.4t-0.9 4.2q0 0.4-0.3 0.8t-0.8 0.3h-5.6q-0.4 2.8-2.6 4.7t-5 1.9q-3.2 0-5.4-2.3t-2.3-5.4 2.3-5.4 5.4-2.3q1.3 0 2.6 0.5l0.4-0.8q-2.1-1.9-5.2-1.9h-1.1q-0.5 0-0.8-0.3t-0.3-0.8 0.3-0.8 0.8-0.3h2.2q1.3 0 2.5 0.2t2 0.7 1.2 0.7 0.9 0.6h10.8l-1.5-2.2h-3.8q-0.5 0-0.9-0.4t-0.2-0.9q0.1-0.4 0.4-0.6t0.7-0.3h4.4q0.5 0 0.9 0.5l1.2 1.8 1.9-2q0.4-0.3 0.8-0.3h1.8q0.4 0 0.7 0.3t0.4 0.8v2.2q0 0.5-0.4 0.8t-0.7 0.3h-3.1l2 3q2.2-1.1 4.7-0.7 2.4 0.5 4.2 2.4t2 4.3z m-31.8 6.4q2 0 3.5-1.3t1.9-3.1h-5.4q-0.6 0-1-0.5-0.3-0.6 0-1.1l2.6-4.8q-0.9-0.2-1.6-0.2-2.3 0-3.9 1.6t-1.6 3.9 1.6 3.9 3.9 1.6z m24.2 0q2.2 0 3.8-1.6t1.7-3.9-1.7-3.9-3.8-1.6q-1.1 0-2.1 0.4l3 4.5q0.2 0.4 0.1 0.8t-0.4 0.7q-0.3 0.2-0.6 0.2-0.6 0-0.9-0.5l-3-4.5q-1.6 1.7-1.6 3.9 0 2.3 1.6 3.9t3.9 1.6z"></path></g>
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

export default IconMotorcycle

