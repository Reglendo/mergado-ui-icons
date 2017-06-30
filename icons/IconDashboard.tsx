

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

class IconDashboard extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--dashboard ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m8.6 25.7q0-1.2-0.9-2t-2-0.8-2 0.8-0.8 2 0.8 2 2 0.9 2-0.9 0.9-2z m4.3-10q0-1.2-0.9-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m9.5 10.7l2.3-8.5q0.1-0.6-0.2-1.1t-0.9-0.6-1 0.1-0.7 0.9l-2.3 8.5q-1.3 0.1-2.3 1t-1.5 2.2q-0.4 1.7 0.5 3.3t2.6 2 3.3-0.5 2-2.6q0.3-1.3-0.2-2.6t-1.6-2z m14.7-0.7q0-1.2-0.8-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.8-2z m-14.2-14.3q0-1.2-0.9-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m10 4.3q0-1.2-0.9-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m7.1 10q0 5.8-3.1 10.8-0.5 0.6-1.3 0.6h-31.2q-0.8 0-1.3-0.6-3.1-4.9-3.1-10.8 0-4 1.6-7.8t4.2-6.3 6.4-4.3 7.8-1.6 7.8 1.6 6.4 4.3 4.2 6.3 1.6 7.8z"></path></g>
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

export default IconDashboard

