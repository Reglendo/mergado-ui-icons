

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

class IconBitbucket extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--bitbucket ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m22.7 19.2q0.2 1.4-1.1 2.2t-2.5 0.2q-0.9-0.4-1.2-1.3t0-1.9 1.1-1.3q0.8-0.4 1.6-0.2t1.5 0.8 0.6 1.5z m2.5-0.5q-0.3-2.4-2.6-3.7t-4.3-0.2q-1.5 0.6-2.3 1.9t-0.8 2.9q0.1 2 1.8 3.5t3.7 1.2q2-0.2 3.4-1.8t1.1-3.8z m5.3-12.1q-0.4-0.6-1.2-1t-1.3-0.5-1.6-0.3q-6.5-1-12.7 0.1-0.9 0.1-1.4 0.3t-1.3 0.4-1.1 1q0.7 0.6 1.7 1t1.7 0.5 1.9 0.3q5.1 0.6 10 0 1.4-0.2 2-0.3t1.6-0.5 1.7-1z m1.3 23.1q-0.2 0.6-0.4 1.7t-0.3 1.9-0.6 1.6-1.3 1.2q-1.9 1.1-4.2 1.6t-4.6 0.5-4.4-0.4q-1.1-0.2-1.9-0.4t-1.7-0.6-1.6-1-1.2-1.4q-0.5-2.1-1.2-6.5l0.1-0.3 0.4-0.2q5 3.3 11.3 3.3t11.3-3.3q0.5 0.1 0.6 0.5t-0.1 1-0.2 0.8z m4-21.4q-0.6 3.7-2.5 14.6-0.1 0.7-0.6 1.2t-0.9 0.9-1.3 0.7q-5.6 2.8-13.6 2-5.5-0.6-8.8-3.1-0.3-0.3-0.5-0.6t-0.4-0.8-0.2-0.8-0.1-0.8-0.2-0.8q-0.2-1.1-0.6-3.4t-0.6-3.6-0.5-3.3-0.5-3.5q0.1-0.6 0.4-1.1t0.7-0.8 1-0.7 1-0.5 1.1-0.4q2.8-1 7-1.4 8.4-0.9 15.1 1.1 3.4 1 4.8 2.7 0.3 0.5 0.3 1.1t-0.1 1.3z"></path></g>
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

export default IconBitbucket

