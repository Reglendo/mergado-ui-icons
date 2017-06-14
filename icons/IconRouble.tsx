

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

class IconRouble extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--rouble ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m28.8 12.6q0-2.2-1.5-3.6t-3.8-1.4h-7.1v10h7.1q2.4 0 3.8-1.4t1.5-3.6z m5.3 0q0 4.3-2.9 7t-7.2 2.8h-7.6v2.6h11.2q0.4 0 0.6 0.2t0.2 0.5v2.9q0 0.3-0.2 0.5t-0.6 0.2h-11.2v4.3q0 0.3-0.2 0.5t-0.5 0.2h-3.8q-0.3 0-0.5-0.2t-0.2-0.5v-4.3h-5q-0.3 0-0.5-0.2t-0.2-0.5v-2.9q0-0.3 0.2-0.5t0.5-0.2h5v-2.6h-5q-0.3 0-0.5-0.2t-0.2-0.6v-3.3q0-0.3 0.2-0.5t0.5-0.2h5v-14q0-0.3 0.2-0.5t0.5-0.2h12.1q4.4 0 7.2 2.7t2.9 7z"></path></g>
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

export default IconRouble

