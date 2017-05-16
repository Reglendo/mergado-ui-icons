

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

class IconVenusDouble extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--venus-double`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m40 11.8q0.2 3.5-1.2 6.5t-4.2 5-6 2.3v5.8h5q0.3 0 0.5 0.2t0.2 0.5v1.5q0 0.3-0.2 0.5t-0.5 0.2h-5v5q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-5h-11.4v5q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-5h-5q-0.3 0-0.5-0.2t-0.2-0.5v-1.5q0-0.3 0.2-0.5t0.5-0.2h5v-5.8q-3.3-0.3-6-2.3t-4.2-5-1.2-6.5q0.4-4.6 3.7-7.9t7.9-3.8q4.6-0.5 8.4 2.1 3.8-2.6 8.4-2.1 4.6 0.4 7.9 3.8t3.7 7.9z m-20 8q2.9-2.9 2.9-6.9t-2.9-7q-2.9 2.9-2.9 7t2.9 6.9z m-7.1 3.1q2.5 0 4.8-1.3-3.4-3.7-3.4-8.7 0-5 3.4-8.8-2.3-1.2-4.8-1.2-4.2 0-7.1 2.9t-2.9 7.1 2.9 7 7.1 3z m12.8 8.5v-5.8q-3-0.3-5.7-2.1-2.7 1.8-5.7 2.1v5.8h11.4z m1.4-8.5q4.2 0 7.1-3t2.9-7-2.9-7.1-7.1-2.9q-2.5 0-4.8 1.2 3.4 3.8 3.4 8.8 0 5-3.4 8.7 2.3 1.3 4.8 1.3z"></path></g>
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

export default IconVenusDouble
