

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

class IconThLarge extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--th-large ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m18.6 22.9v8.5q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-8.5q0-1.2 0.8-2.1t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2.1z m0-17.2v8.6q0 1.1-0.8 2t-2 0.8h-11.4q-1.2 0-2.1-0.8t-0.8-2v-8.6q0-1.1 0.8-2t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2z m20 17.2v8.5q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-8.5q0-1.2 0.8-2.1t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2.1z m0-17.2v8.6q0 1.1-0.8 2t-2 0.8h-11.4q-1.2 0-2.1-0.8t-0.8-2v-8.6q0-1.1 0.8-2t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2z"></path></g>
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

export default IconThLarge

