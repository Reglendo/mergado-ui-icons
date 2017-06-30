

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

class IconAlignJustify extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--align-justify ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m40 30v2.9q0 0.5-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z m0-8.6v2.9q0 0.6-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.5 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z m0-8.5v2.8q0 0.6-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h37.2q0.5 0 1 0.5t0.4 1z m0-8.6v2.8q0 0.6-0.4 1t-1 0.5h-37.2q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z"></path></g>
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

export default IconAlignJustify

