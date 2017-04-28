

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

class IconWikipediaW extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--wikipedia-w`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m26.2 33l-5.2-12.2q-0.4 0.9-2.8 5.4t-3.5 6.8q0 0-0.4 0t-0.5 0q-1.4-3.4-4.5-10.3t-4.5-10.4q-0.4-0.9-1.2-1.9t-1.8-1.8-1.8-0.7q0-0.1 0-0.4t0-0.5h10.2v0.9q-0.7 0-1.4 0.2t-1.1 0.8-0.2 1.1q0.4 1.1 3.8 8.8t4.1 9.4q0.5-1.1 2.4-4.7t2.3-4.3q-0.3-0.7-2.2-4.9t-2.4-5.2q-0.6-1.2-3.5-1.2v-0.9l9 0v0.8q-1 0.1-1.6 0.5t-0.2 1.2q0.5 1.2 1.5 3.3t1.5 3.3q1.9-3.8 3-6.4 0.4-0.9-0.2-1.4t-2.2-0.4q0-0.1 0-0.5v-0.4q1.1 0 3 0t3.1 0 1.7 0v0.8q-1.1 0.1-2.1 0.6t-1.6 1.4l-3.7 7.8q0.2 0.6 2.2 5.1t2.1 4.8l7.7-17.8q-0.2-0.7-0.8-1.1t-1.2-0.6-0.9-0.1v-0.9l8 0.1 0 0 0 0.8q-2.4 0-3.5 2.5-9.2 21.3-9.8 22.6h-0.8z"></path></g>
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

export default IconWikipediaW

