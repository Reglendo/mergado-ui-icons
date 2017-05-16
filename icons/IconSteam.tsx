

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

class IconSteam extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--steam`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.3 13q0 2.2-1.6 3.8t-3.8 1.6-3.9-1.6-1.6-3.8 1.6-3.9 3.9-1.6 3.8 1.6 1.6 3.9z m-17.2 16.6q0-2.4-1.6-4t-4-1.6q-0.6 0-1.2 0.1l2.4 0.9q1.7 0.7 2.4 2.4t0 3.4q-0.7 1.7-2.3 2.4t-3.4 0.1q-0.5-0.2-1.4-0.6t-1.4-0.5q0.7 1.3 2 2.1t2.9 0.8q2.4 0 4-1.6t1.6-3.9z m18.6-16.6q0-2.8-2-4.8t-4.9-2q-2.8 0-4.8 2t-2 4.8q0 2.8 2 4.8t4.8 2q2.9 0 4.9-2t2-4.8z m3.3 0q0 4.2-3 7.2t-7.2 3l-9.7 7.1q-0.3 2.9-2.4 4.9t-5.2 1.9q-2.7 0-4.7-1.6t-2.7-4.3l-5.1-2.1v-9.6l8.7 3.5q1.7-1 3.8-1 0.3 0 0.8 0l6.4-9.1q0-4.1 3-7.1t7.1-2.9q4.2 0 7.2 2.9t3 7.2z"></path></g>
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

export default IconSteam
