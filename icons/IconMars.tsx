

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

class IconMars extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--mars`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.9 2.9q0.5 0 1 0.4t0.4 1v9.3q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-5.9l-8.5 8.6q2.8 3.5 2.8 8 0 2.6-1 5t-2.7 4.1-4.2 2.7-4.9 1-5-1-4.1-2.7-2.8-4.1-1-5 1-5 2.8-4.1 4.1-2.8 5-1q4.5 0 8 2.8l8.5-8.5h-5.8q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h9.3z m-20 31.4q4.1 0 7-2.9t3-7.1-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7.1 7.1 2.9z"></path></g>
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

export default IconMars
