

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

class IconBookmark extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--bookmark ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m31.5 2.9q0.5 0 1 0.2 0.7 0.2 1.1 0.9t0.5 1.4v28.7q0 0.8-0.5 1.4t-1.1 0.9q-0.5 0.2-1 0.2-1.1 0-1.9-0.7l-9.8-9.5-9.9 9.5q-0.8 0.7-1.8 0.7-0.5 0-1-0.2-0.7-0.3-1.2-0.9t-0.4-1.4v-28.7q0-0.8 0.4-1.4t1.2-0.9q0.5-0.2 1-0.2h23.4z"></path></g>
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

export default IconBookmark

