

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

class IconBed extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--bed ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m5 22.5h33.5q0.5 0 0.9 0.4t0.3 0.8v8.7h-4.9v-4.9h-29.8v4.9h-5v-23.6q0-0.5 0.4-0.9t0.8-0.3h2.5q0.5 0 0.9 0.3t0.4 0.9v13.7z m11.1-6.2q0-2.1-1.4-3.5t-3.5-1.5-3.5 1.5-1.5 3.5 1.5 3.5 3.5 1.4 3.5-1.4 1.4-3.5z m23.7 4.9v-1.2q0-3.1-2.2-5.3t-5.3-2.2h-13.7q-0.5 0-0.8 0.4t-0.4 0.9v7.4h22.4z"></path></g>
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

export default IconBed

