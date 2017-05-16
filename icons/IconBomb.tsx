

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

class IconBomb extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--bomb`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m12.7 13.1q-0.2-0.5-0.7-0.7t-1.1 0q-2.4 0.9-4.3 2.8t-2.8 4.3q-0.2 0.5 0 1.1t0.8 0.7q0.3 0.1 0.5 0.1 1 0 1.4-0.9 0.7-1.8 2.2-3.3t3.3-2.2q0.5-0.2 0.7-0.8t0-1.1z m21.1-7.9l1 1-5.4 5.5 1.5 1.5q0.4 0.4 0.4 1t-0.4 1l-1.5 1.4q2 3.6 2 7.7 0 3.2-1.2 6.1t-3.4 5-5 3.4-6.1 1.2-6.1-1.2-5-3.4-3.4-5-1.2-6.1 1.2-6.1 3.4-5 5-3.4 6.1-1.2q4.1 0 7.7 2l1.4-1.5q0.4-0.4 1-0.4t1 0.4l1.6 1.6z m0.2-1.2q-0.3 0.2-0.5 0.2-0.3 0-0.6-0.2l-2-2.1q-0.2-0.2-0.2-0.5t0.2-0.5q0.2-0.2 0.5-0.2t0.5 0.2l2.1 2q0.2 0.2 0.2 0.5t-0.2 0.5z m5.1 5.1q-0.3 0.2-0.5 0.2t-0.5-0.2l-2.1-2q-0.2-0.2-0.2-0.5t0.2-0.5q0.2-0.3 0.6-0.3t0.5 0.3l2 2q0.2 0.2 0.2 0.5t-0.2 0.5z m0.9-4.1q0 0.3-0.2 0.5t-0.5 0.2h-2.2q-0.3 0-0.5-0.2t-0.2-0.5 0.2-0.5 0.5-0.2h2.2q0.3 0 0.5 0.2t0.2 0.5z m-4.3-4.3v2.2q0 0.3-0.2 0.5t-0.5 0.2-0.5-0.2-0.2-0.5v-2.2q0-0.3 0.2-0.5t0.5-0.2 0.5 0.2 0.2 0.5z m3.4 1.2l-2 2.1q-0.3 0.2-0.5 0.2-0.3 0-0.6-0.2-0.2-0.2-0.2-0.5t0.2-0.6l2.1-2q0.2-0.2 0.5-0.2t0.5 0.2q0.2 0.2 0.2 0.5t-0.2 0.5z"></path></g>
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

export default IconBomb
