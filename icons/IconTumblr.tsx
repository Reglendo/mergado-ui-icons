

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

class IconTumblr extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--tumblr ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m29.1 29.7l1.8 5.3q-0.6 0.7-2.5 1.4t-4 0.7q-2.3 0.1-4.2-0.5t-3.2-1.7-2.1-2.4-1.3-2.6-0.3-2.7v-12.1h-3.8v-4.8q1.6-0.6 2.9-1.6t2-2 1.3-2.2 0.8-2.3 0.3-1.9q0-0.1 0.1-0.2t0.2-0.1h5.4v9.5h7.5v5.6h-7.5v11.5q0 0.7 0.2 1.3t0.5 1.2 1.1 0.9 1.8 0.3q1.7 0 3-0.6z"></path></g>
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

export default IconTumblr

