

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

class IconStrikethrough extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--strikethrough ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39.3 20q0.3 0 0.5 0.2t0.2 0.5v1.4q0 0.4-0.2 0.6t-0.5 0.2h-38.6q-0.3 0-0.5-0.2t-0.2-0.6v-1.4q0-0.3 0.2-0.5t0.5-0.2h38.6z m-28.5-1.4q-0.6-0.8-1.2-1.8-1-2.2-1-4.2 0-4.1 3-6.9 2.9-2.8 8.7-2.8 1.2 0 3.8 0.4 1.4 0.3 3.9 1.1 0.2 0.8 0.5 2.6 0.3 2.7 0.3 4.1 0 0.4-0.1 1l-0.3 0-1.9-0.1-0.3 0q-1.1-3.4-2.3-4.6-1.9-2-4.7-2-2.5 0-4 1.3-1.5 1.3-1.5 3.2 0 1.7 1.5 3.2t6.2 2.8q1.5 0.5 3.8 1.5 1.3 0.6 2.2 1.2h-16.6z m11.3 5.7h9.2q0.1 0.9 0.1 2 0 2.5-0.9 4.8-0.5 1.2-1.6 2.3-0.8 0.8-2.4 1.8-1.8 1.1-3.4 1.5-1.8 0.4-4.5 0.4-2.6 0-4.4-0.5l-3.1-0.9q-1.3-0.3-1.6-0.6-0.2-0.2-0.2-0.5v-0.3q0-2.4-0.1-3.5 0-0.6 0-1.5l0.1-0.8v-1l2.3 0q0.3 0.7 0.6 1.6t0.5 1.2 0.3 0.6q0.8 1.3 1.8 2.1 1 0.8 2.3 1.3 1.4 0.5 3 0.5 1.4 0 3.1-0.6 1.7-0.6 2.7-1.9 1.1-1.4 1.1-2.9 0-1.9-1.8-3.5-0.8-0.7-3.1-1.6z"></path></g>
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

export default IconStrikethrough

