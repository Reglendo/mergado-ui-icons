

import * as React from "react"

export interface Props {
    /** Size */
    size?: number
    /** Icon text */
    text?: string
    /** Icon title */
    title?: string
    style?: any
}
export interface State {
}

class IconEur extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--eur`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m30.3 29.2l0.8 3.5q0 0.3-0.1 0.5t-0.4 0.3l-0.1 0.1q-0.1 0-0.2 0t-0.4 0.1-0.5 0.2-0.5 0.1-0.7 0.1-0.7 0.1-0.9 0.1-0.8 0q-5.2 0-9.2-2.9t-5.3-7.9h-2.1q-0.3 0-0.5-0.2t-0.2-0.5v-2.5q0-0.3 0.2-0.5t0.5-0.2h1.5q-0.1-1.3 0-2.4h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-2.5q0-0.3 0.2-0.5t0.5-0.2h2.2q1.5-4.7 5.4-7.6t9-2.8q2.3 0 4.3 0.5 0.3 0 0.5 0.3 0.1 0.3 0 0.5l-0.9 3.6q-0.1 0.3-0.4 0.4t-0.5 0.1l-0.1 0q-0.1-0.1-0.2-0.1l-0.4-0.1-0.5-0.1-0.6 0-0.7-0.1-0.6 0q-2.8 0-5.1 1.4t-3.3 4h10.4q0.4 0 0.6 0.2 0.2 0.3 0.2 0.6l-0.6 2.6q-0.1 0.5-0.7 0.5h-10.9q-0.1 0.9 0 2.4h10.3q0.3 0 0.5 0.2 0.2 0.3 0.1 0.6l-0.5 2.5q0 0.3-0.2 0.5t-0.5 0.1h-8.6q1.1 2.6 3.3 4.2t5.1 1.5q0.4 0 0.8 0t0.8-0.1 0.6-0.1 0.6-0.1 0.4-0.1l0.3-0.1 0.1 0q0.3-0.1 0.5 0 0.3 0.2 0.4 0.5z"></path></g>
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

export default IconEur

