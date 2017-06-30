

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

class IconStarO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--star-o ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m26.9 22.4l6.8-6.6-9.4-1.4-4.2-8.5-4.2 8.5-9.5 1.4 6.9 6.6-1.7 9.4 8.5-4.4 8.4 4.4z m11.7-8q0 0.5-0.5 1.1l-8.1 7.9 1.9 11.2q0 0.1 0 0.4 0 1.1-0.9 1.1-0.4 0-0.9-0.2l-10-5.3-10 5.3q-0.5 0.2-0.9 0.2-0.5 0-0.7-0.3t-0.3-0.8q0-0.1 0.1-0.4l1.9-11.2-8.1-7.9q-0.6-0.6-0.6-1.1 0-0.8 1.3-1l11.2-1.6 5-10.2q0.4-0.9 1.1-0.9t1.1 0.9l5 10.2 11.2 1.6q1.2 0.2 1.2 1z"></path></g>
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

export default IconStarO

