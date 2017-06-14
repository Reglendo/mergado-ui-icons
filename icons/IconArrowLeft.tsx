

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

class IconArrowLeft extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--arrow-left ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m36.3 20v2.9q0 1.1-0.7 2t-1.9 0.8h-15.7l6.5 6.6q0.9 0.8 0.9 2t-0.9 2l-1.7 1.7q-0.8 0.8-2 0.8-1.1 0-2-0.8l-14.5-14.6q-0.9-0.8-0.9-2 0-1.1 0.9-2l14.5-14.5q0.8-0.9 2-0.9 1.2 0 2 0.9l1.7 1.6q0.9 0.9 0.9 2.1t-0.9 2l-6.5 6.5h15.7q1.1 0 1.9 0.9t0.7 2z"></path></g>
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

export default IconArrowLeft

