

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

class IconUmbrella extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--umbrella ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m21.5 18.5v12.9q0 2.3-1.7 4t-4 1.7-4-1.7-1.7-4q0-0.6 0.4-1t1-0.4 1 0.4 0.4 1q0 1.1 0.9 2t2 0.9 2-0.9 0.8-2v-12.9q0.8-0.3 1.5-0.3t1.4 0.3z m17.1 0.6q0 0.3-0.2 0.5t-0.5 0.2q-0.2 0-0.5-0.2-1.1-1.1-2.1-1.6t-2.2-0.5q-1.6 0-2.9 0.8t-2.3 2.2q-0.1 0.2-0.4 0.6t-0.3 0.6q-0.3 0.4-0.6 0.4-0.4 0-0.7-0.4-0.1-0.2-0.3-0.6t-0.4-0.6q-1-1.3-2.3-2.2t-2.8-0.8-2.9 0.8-2.3 2.2q-0.1 0.2-0.4 0.6t-0.3 0.6q-0.2 0.3-0.6 0.3-0.4 0-0.6-0.3-0.1-0.2-0.4-0.6t-0.4-0.6q-0.9-1.3-2.3-2.2t-2.8-0.8q-1.3 0-2.3 0.5t-2.1 1.6q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2t-0.2-0.5q0-0.1 0-0.2 1-4.1 3.9-7.1t6.6-4.6 8.1-1.5q3.1 0 6.1 0.9t5.5 2.5 4.3 4.2 2.6 5.6q0 0.1 0 0.2z m-17.1-16.2v2.1q-0.9 0-1.4 0t-1.5 0v-2.1q0-0.6 0.5-1t1-0.5 1 0.5 0.4 1z"></path></g>
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

export default IconUmbrella

