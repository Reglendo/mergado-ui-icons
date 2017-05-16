

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

class IconGoogle extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--google`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m20.1 17.5h16.2q0.3 1.5 0.3 2.9 0 4.8-2 8.7t-5.8 5.9-8.7 2.1q-3.5 0-6.6-1.3t-5.5-3.7-3.7-5.4-1.3-6.7 1.3-6.7 3.7-5.4 5.5-3.7 6.6-1.3q6.7 0 11.5 4.4l-4.6 4.5q-2.8-2.6-6.9-2.6-2.8 0-5.3 1.4t-3.9 4-1.4 5.4 1.4 5.4 3.9 4 5.3 1.4q2 0 3.6-0.5t2.7-1.3 1.8-1.9 1.2-1.9 0.5-1.8h-9.8v-5.9z"></path></g>
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

export default IconGoogle
