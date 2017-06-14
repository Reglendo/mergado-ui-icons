

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

class IconBicycle extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--bicycle ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m13.3 24.5h-5.5q-0.7 0-1-0.6t0.2-1.2l3.2-4.4q-1.1-0.5-2.4-0.5-2.3 0-3.9 1.6t-1.7 4 1.7 3.9 3.9 1.7q2.1 0 3.6-1.3t1.9-3.2z m-3.2-2.3h3.2q-0.3-1.4-1.3-2.6z m8.4 0l5-6.7h-8.4l-1.7 2.3q1.8 1.8 2.2 4.4h2.9z m19.6 1.2q0-2.3-1.6-4t-4-1.6q-1.1 0-2.1 0.4l3 4.5q0.3 0.4 0.2 0.9t-0.5 0.7q-0.2 0.2-0.6 0.2-0.6 0-0.9-0.5l-3.1-4.6q-1.6 1.7-1.6 4 0 2.3 1.6 3.9t4 1.7 4-1.7 1.6-3.9z m2.2 0q0 3.2-2.3 5.5t-5.5 2.3-5.5-2.3-2.3-5.5q0-1.7 0.6-3.2t2-2.7l-1.2-1.7-6.2 8.2q-0.3 0.5-0.9 0.5h-3.4q-0.4 2.9-2.6 4.8t-5.2 1.9q-3.2 0-5.5-2.3t-2.3-5.5 2.3-5.6 5.5-2.3q2 0 3.8 1l2.4-3.2h-3.9q-0.5 0-0.8-0.4t-0.3-0.7 0.3-0.8 0.8-0.4h6.7v2.3h7.6l-1.5-2.3h-3.9q-0.4 0-0.7-0.3t-0.4-0.8 0.4-0.8 0.7-0.3h4.5q0.6 0 1 0.5l4.6 7q1.6-0.8 3.4-0.8 3.2 0 5.5 2.3t2.3 5.6z"></path></g>
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

export default IconBicycle

