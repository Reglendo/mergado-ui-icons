

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

class IconHandPaperO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--hand-paper-o ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m21.6 2.9q-1 0-1.7 0.7t-0.8 1.8v14.6h-0.7v-11.8q0-1-0.7-1.7t-1.8-0.8-1.7 0.8-0.8 1.7v17.5l-3.4-4.6q-0.9-1.1-2.3-1.1-1.2 0-2 0.8t-0.8 2.1q0 0.9 0.5 1.7l8.6 11.4q0.9 1.1 2.3 1.1h15.3q0.8 0 1.4-0.4t0.8-1.3l1.7-9q0.1-0.8 0.1-1.4v-11.1q0-1-0.8-1.7t-1.7-0.8-1.8 0.8-0.7 1.7v6.1h-0.7v-11.8q0-1-0.8-1.7t-1.7-0.8-1.8 0.8-0.7 1.7v11.8h-0.8v-14.6q0-1.1-0.7-1.8t-1.8-0.7z m0-2.9q1.6 0 2.8 0.8t2 2.1q0.4 0 1 0 2.2 0 3.7 1.5t1.6 3.8v0.4q2.4-0.1 4 1.4t1.7 3.9v11.1q0 0.9-0.2 1.9l-1.6 9q-0.4 1.8-1.8 2.9t-3.2 1.2h-15.3q-1.4 0-2.6-0.6t-2-1.7l-8.6-11.4q-1.1-1.5-1.1-3.4 0-2.4 1.7-4.1t4-1.7q1.8 0 2.9 0.8v-9.7q0-2.2 1.5-3.8t3.8-1.5q0.5 0 1 0 0.7-1.3 1.9-2.1t2.8-0.8z"></path></g>
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

export default IconHandPaperO

