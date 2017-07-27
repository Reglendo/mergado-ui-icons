

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
}
export interface State {
}

class IconCircleONotch extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--circle-o-notch ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m39.3 20q0 3.9-1.5 7.5t-4.2 6.1-6.1 4.2-7.5 1.5-7.5-1.5-6.2-4.2-4.1-6.1-1.5-7.5q0-4.8 2.2-8.9t5.9-6.8 8.3-3.4v5.1q-4.9 1-8.1 4.9t-3.3 9.1q0 2.9 1.1 5.5t3.1 4.6 4.6 3 5.5 1.2 5.5-1.2 4.6-3 3-4.6 1.2-5.5q0-5.1-3.3-9.1t-8.1-4.9v-5.1q4.6 0.7 8.3 3.4t5.9 6.8 2.2 8.9z"></path></g>
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

export default IconCircleONotch

