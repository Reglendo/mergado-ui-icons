

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

class IconTrello extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--trello ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m18.7 30v-22.9q0-0.3-0.2-0.5t-0.5-0.2h-10.7q-0.3 0-0.5 0.2t-0.2 0.5v22.9q0 0.3 0.2 0.5t0.5 0.2h10.7q0.3 0 0.5-0.2t0.2-0.5z m15-8.6v-14.3q0-0.3-0.2-0.5t-0.5-0.2h-10.7q-0.3 0-0.5 0.2t-0.2 0.5v14.3q0 0.3 0.2 0.5t0.5 0.2h10.7q0.3 0 0.5-0.2t0.2-0.5z m3.6-17.1v31.4q0 0.6-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-31.4q0-0.6 0.4-1t1-0.4h31.5q0.5 0 1 0.4t0.4 1z"></path></g>
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

export default IconTrello

