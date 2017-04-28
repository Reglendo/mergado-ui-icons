

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

class IconFlag extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--flag`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m7 6.1q0 1.5-1.4 2.4v27.5q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-27.5q-1.4-0.9-1.4-2.4 0-1.2 0.8-2t2-0.8 2 0.8 0.8 2z m32 1.4v16.6q0 0.5-0.2 0.8t-0.9 0.6q-4.7 2.5-8 2.5-1.4 0-2.7-0.4t-2.4-1.1-2.5-1-3.1-0.5q-4.2 0-10.1 3.2-0.4 0.2-0.7 0.2-0.6 0-1-0.4t-0.4-1v-16.2q0-0.7 0.6-1.2 0.5-0.3 1.8-0.9 5.1-2.6 9.1-2.6 2.4 0 4.4 0.6t4.8 1.9q0.8 0.4 1.9 0.4 1.1 0 2.5-0.4t2.4-1.1 1.9-1 1.2-0.4q0.6 0 1 0.4t0.4 1z"></path></g>
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

export default IconFlag

