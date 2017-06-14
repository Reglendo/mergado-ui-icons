

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

class IconICursor extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--i-cursor ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m28.6 2.9q-7.2 0-7.2 5v9.2h2.9v2.9h-2.9v12.1q0 5 7.2 5h1.4v2.9h-1.4q-6.1 0-8.6-3.3-2.5 3.3-8.6 3.3h-1.4v-2.9h1.4q7.2 0 7.2-5v-12.1h-2.9v-2.9h2.9v-9.2q0-5-7.2-5h-1.4v-2.9h1.4q6.1 0 8.6 3.3 2.5-3.3 8.6-3.3h1.4v2.9h-1.4z"></path></g>
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

export default IconICursor

