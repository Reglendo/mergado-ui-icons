

import * as React from "react"

export interface Props {
    /** Size */
    size?: number
    /** Icon text */
    text?: string
    /** Icon title */
    title?: string
    style?: any
}
export interface State {
}

class IconFortAwesome extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--fort-awesome`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m15.8 22.5v-5q0-0.4-0.4-0.4h-2.1q-0.4 0-0.4 0.4v5q0 0.4 0.4 0.4h2.1q0.4 0 0.4-0.4z m11.4 0v-5q0-0.4-0.3-0.4h-2.2q-0.3 0-0.3 0.4v5q0 0.4 0.3 0.4h2.2q0.3 0 0.3-0.4z m11.4 0.7v16.8h-14.2v-7.1q0-1.8-1.3-3.1t-3-1.2-3.1 1.2-1.2 3.1v7.1h-14.3v-16.8q0-0.3 0.4-0.3h2.1q0.4 0 0.4 0.3v2.5h2.8v-13.9q0-0.4 0.4-0.4h2.1q0.4 0 0.4 0.4v2.5h2.8v-2.5q0-0.4 0.4-0.4h2.1q0.4 0 0.4 0.4v2.5h2.8v-2.5q0-0.4 0.4-0.4h0.4v-8.7q-0.8-0.5-0.8-1.3 0-0.6 0.5-1t1-0.4 1 0.4 0.4 1q0 0.8-0.7 1.3v0.2h6.1q0.3 0 0.3 0.3v5q0 0.4-0.3 0.4h-6.1v2.8h0.3q0.4 0 0.4 0.4v2.5h2.9v-2.5q0-0.4 0.3-0.4h2.2q0.3 0 0.3 0.4v2.5h2.9v-2.5q0-0.4 0.3-0.4h2.2q0.3 0 0.3 0.4v13.9h2.9v-2.5q0-0.3 0.3-0.3h2.2q0.3 0 0.3 0.3z"></path></g>
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

export default IconFortAwesome

