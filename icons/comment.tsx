

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

class IconComment extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--comment`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m40 20q0 3.9-2.7 7.2t-7.3 5.2-10 1.9q-1.6 0-3.2-0.2-4.5 3.9-10.3 5.4-1.1 0.3-2.6 0.5-0.3 0-0.6-0.2t-0.4-0.6v-0.1q-0.1-0.1 0-0.2t0-0.3 0.1-0.2l0.1-0.2 0.2-0.2 0.2-0.2q0.1-0.1 0.7-0.7t0.7-0.9 0.7-0.9 0.8-1.1 0.6-1.3 0.5-1.7q-3.5-2-5.5-4.9t-2-6.3q0-2.9 1.6-5.5t4.2-4.6 6.4-3.1 7.8-1.1q5.4 0 10 1.9t7.3 5.2 2.7 7.2z"></path></g>
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

export default IconComment

