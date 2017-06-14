

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

class IconHeadphones extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--headphones ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m38.6 19.8q0 3.7-1.3 7l-0.4 1.1-4.2 0.7q-0.5 1.9-2 3.1t-3.5 1.2v0.7q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-12.9q0-0.3 0.2-0.5t0.5-0.2h1.4q0.3 0 0.5 0.2t0.2 0.5v0.7q1.6 0 2.9 0.8t2.1 2.2l1.5-0.3q0.7-2.1 0.7-4.3 0-3.3-2-6.3t-5.3-4.6-7-1.8-7.1 1.8-5.2 4.6-2 6.3q0 2.2 0.6 4.3l1.6 0.2q0.7-1.3 2-2.1t2.9-0.8v-0.7q0-0.3 0.2-0.5t0.5-0.2h1.5q0.3 0 0.5 0.2t0.2 0.5v12.9q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-0.7q-1.9 0-3.5-1.2t-2-3.1l-4.1-0.7-0.5-1.1q-1.3-3.3-1.3-7 0-3.4 1.5-6.5t4-5.4 5.9-3.7 7.2-1.3 7.1 1.3 6 3.7 4 5.4 1.5 6.5z"></path></g>
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

export default IconHeadphones

