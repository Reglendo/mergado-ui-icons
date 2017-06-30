

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

class IconCodiepie extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--codiepie ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.6 15.2q1.2 0 1.9 0.6t0.7 1.9-0.8 1.8-2 0.6h-3.1v3.9h-0.5v-8.8h3.8z m3.6 13.1l-0.1 0.3-0.1 0.2q-2.6 5.1-7.4 8.2t-10.6 3q-4.1 0-7.8-1.6t-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6q5.4 0 10.1 2.8t7.4 7.5l0.2 0.5q-0.6 0.3-3 1.5t-3.7 1.9q-0.1 0-10.7 6 8.6 4 17.9 8.1z m-18.2 11.2q5.6 0 10.3-3t7.2-7.9l-6.4-2.9q-1.6 3.1-4.6 4.9t-6.5 1.9q-3.4 0-6.2-1.7t-4.6-4.5-1.7-6.3 1.7-6.2 4.6-4.6 6.2-1.7 6.3 1.7 4.5 4.5l6.3-3.2q-2.6-4.6-7.2-7.3t-9.9-2.7q-2.7 0-5.2 0.7t-4.7 1.9-3.9 3.1-3.1 3.9-1.9 4.7-0.7 5.2 0.7 5.2 1.9 4.7 3.1 3.9 3.9 3.1 4.7 1.9 5.2 0.7z"></path></g>
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

export default IconCodiepie

