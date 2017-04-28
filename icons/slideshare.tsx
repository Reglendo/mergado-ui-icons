

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

class IconSlideshare extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--slideshare`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m19.5 16.5q0 1.9-1.4 3.2t-3.4 1.3-3.4-1.3-1.5-3.2q0-1.9 1.5-3.2t3.4-1.3 3.4 1.3 1.4 3.2z m11.2 0q0 1.9-1.4 3.2t-3.4 1.3q-2 0-3.4-1.3t-1.4-3.2q0-1.9 1.4-3.2t3.4-1.3q2 0 3.4 1.3t1.4 3.2z m5 4v-14.9q0-1.9-0.7-2.7t-2.5-0.8h-24.8q-1.9 0-2.5 0.7t-0.7 2.8v15.1q1 0.5 2 0.9t1.8 0.6 1.8 0.4 1.6 0.2 1.6 0.1 1.3 0 1.2 0 1 0q1.6-0.1 2.2 0.6 0.1 0.1 0.2 0.2 0.6 0.5 1.3 1.1 0.2-2 2.7-1.9 0.1 0 0.8 0t0.9 0 1.1 0.1 1.1-0.1 1.3-0.1 1.3-0.2 1.4-0.3 1.5-0.4 1.5-0.6 1.6-0.8z m3.7-0.1q-2.7 3.4-8.4 5.6 1.9 6.4-0.5 10.4-1.4 2.5-4.1 3.3-2.3 0.7-4-0.3-1.9-1.1-1.8-3.7l-0.1-7.2v-0.1q-0.1 0-0.5-0.1t-0.5-0.1l-0.1 7.5q0.1 2.6-1.8 3.7-1.8 1-4.1 0.3-2.6-0.8-4.1-3.3-2.3-4-0.5-10.4-5.6-2.3-8.3-5.6-0.5-0.8 0-1.4t1.3 0q0.1 0.1 0.2 0.2t0.3 0.2v-15.5q0-1.6 1-2.8t2.6-1.1h28q1.5 0 2.6 1.1t1 2.8v15.5l0.5-0.4q0.9-0.6 1.3 0t0 1.4z"></path></g>
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

export default IconSlideshare

