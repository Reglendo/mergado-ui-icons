

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

class IconBullseye extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--bullseye ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m25.9 20q0 2.4-1.7 4t-4.1 1.7-4-1.7-1.7-4 1.7-4 4-1.7 4.1 1.7 1.7 4z m2.8 0q0-3.6-2.5-6.1t-6.1-2.5-6 2.5-2.5 6.1 2.5 6.1 6 2.5 6.1-2.5 2.5-6.1z m2.9 0q0 4.7-3.4 8.1t-8.1 3.3-8-3.3-3.4-8.1 3.4-8.1 8-3.3 8.1 3.3 3.4 8.1z m2.8 0q0-2.9-1.1-5.5t-3.1-4.6-4.5-3.1-5.6-1.1-5.5 1.1-4.6 3.1-3 4.6-1.1 5.5 1.1 5.5 3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5z m2.9 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
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

export default IconBullseye

