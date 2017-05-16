

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

class IconItalic extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--italic`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m8.5 37.1l0.4-1.9q0.1 0 1.8-0.5t2.5-0.8q0.6-0.8 0.9-2.3 0-0.1 1.4-6.4t2.5-12.2 1.2-6.6v-0.5q-0.5-0.3-1.2-0.4t-1.6-0.2-1.3-0.1l0.5-2.3q0.7 0 2.6 0.1t3.4 0.2 2.7 0q1 0 2.2 0t2.7-0.2 2.2-0.1q-0.2 0.8-0.5 1.9-0.6 0.3-2.2 0.7t-2.5 0.7q-0.1 0.4-0.3 1t-0.2 0.9-0.1 1-0.2 0.9q-0.6 3.3-1.9 9.4t-1.8 7.9q0 0.2-0.3 1.3t-0.4 2-0.4 1.9-0.1 1.3l0 0.4q0.4 0.1 4.2 0.7-0.1 0.9-0.4 2.2-0.2 0-0.7 0t-0.7 0q-0.7 0-2-0.2t-1.9-0.2q-3.1 0-4.6 0-1.1 0-3.2 0.2t-2.7 0.2z"></path></g>
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

export default IconItalic
