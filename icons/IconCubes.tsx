

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

class IconCubes extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--cubes`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m11.7 33.4l7-3.5v-5.7l-7 3v6.2z m-1.2-8.3l7.4-3.1-7.4-3.2-7.4 3.2z m19.8 8.3l7-3.5v-5.7l-7 3v6.2z m-1.1-8.3l7.3-3.1-7.3-3.2-7.4 3.2z m-8.2-5.3l7-3v-4.9l-7 3v4.9z m-1.2-6.9l8.1-3.5-8.1-3.4-8 3.5z m19.8 9.4v7.6q0 0.7-0.3 1.2t-0.9 0.9l-8.2 4.1q-0.5 0.2-1 0.2t-1.1-0.2l-8.1-4.1q-0.1 0-0.2-0.1 0 0.1-0.1 0.1l-8.2 4.1q-0.4 0.2-1 0.2t-1-0.2l-8.2-4.1q-0.6-0.3-1-0.9t-0.3-1.2v-7.6q0-0.7 0.4-1.2t1-0.9l7.9-3.4v-7.3q0-0.7 0.4-1.3t1.1-0.8l8.1-3.5q0.4-0.2 0.9-0.2t0.9 0.2l8.2 3.5q0.6 0.2 1 0.8t0.4 1.3v7.3l7.9 3.4q0.7 0.3 1.1 0.9t0.4 1.2z"></path></g>
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

export default IconCubes
