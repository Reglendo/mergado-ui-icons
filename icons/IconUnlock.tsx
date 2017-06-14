

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

class IconUnlock extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--unlock ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m38.6 12.9v5.7q0 0.6-0.4 1t-1 0.4h-1.4q-0.6 0-1-0.4t-0.4-1v-5.7q0-2.4-1.7-4.1t-4.1-1.7-4 1.7-1.7 4.1v4.2h2.2q0.9 0 1.5 0.7t0.6 1.5v12.8q0 0.9-0.6 1.6t-1.5 0.6h-21.5q-0.8 0-1.5-0.6t-0.6-1.6v-12.8q0-0.9 0.6-1.5t1.5-0.7h15v-4.2q0-4.2 3-7.1t7-2.9 7.1 2.9 2.9 7.1z"></path></g>
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

export default IconUnlock

