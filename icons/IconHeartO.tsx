

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

class IconHeartO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--heart-o ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m37.1 13.3q0-1.8-0.4-3.2t-1.3-2.2-1.8-1.3-2.1-0.7-2.2-0.2-2.5 0.6-2.4 1.4-2 1.6-1.3 1.4q-0.4 0.5-1.1 0.5t-1.1-0.5q-0.5-0.6-1.3-1.4t-2-1.6-2.4-1.4-2.5-0.6-2.2 0.2-2.1 0.7-1.8 1.3-1.3 2.2-0.4 3.2q0 3.8 4.1 7.9l13 12.5 12.9-12.4q4.2-4.2 4.2-8z m2.9 0q0 4.9-5.1 10l-13.9 13.4q-0.4 0.4-1 0.4t-1-0.4l-13.9-13.4q-0.2-0.2-0.6-0.6t-1.3-1.4-1.5-2.2-1.2-2.7-0.5-3.1q0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8 0.4t2.7 1.3 2.1 1.6 1.7 1.5q0.8-0.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-0.4q5 0 7.9 2.7t2.8 7.7z"></path></g>
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

export default IconHeartO

