

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

class IconCutlery extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--cutlery ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m18.8 1.4v14.3q0 1.4-0.8 2.5t-2.1 1.6v17.3q0 1.2-0.8 2.1t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2.1v-17.3q-1.3-0.5-2.1-1.6t-0.8-2.5v-14.3q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v9.3q0 0.6 0.4 1t1 0.4 1-0.4 0.4-1v-9.3q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v9.3q0 0.6 0.4 1t1 0.4 1-0.4 0.4-1v-9.3q0-0.6 0.4-1t1.1-0.4 1 0.4 0.4 1z m17.1 0v35.7q0 1.2-0.8 2.1t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2.1v-11.4h-5q-0.3 0-0.5-0.2t-0.3-0.5v-17.9q0-2.9 2.1-5t5.1-2.1h5.7q0.6 0 1 0.4t0.4 1z"></path></g>
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

export default IconCutlery

