

import * as React from "react"

export interface Props {
    /** Icon type */
    type: string
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

class IconCommenting extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        type: "reglendo",
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--${this.props.type}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m14.3 20q0-1.2-0.9-2t-2-0.9-2 0.9-0.8 2 0.8 2 2 0.9 2-0.9 0.9-2z m8.6 0q0-1.2-0.9-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m8.5 0q0-1.2-0.8-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.9 2-0.9 0.8-2z m8.6 0q0 3.9-2.7 7.2t-7.3 5.2-10 1.9q-2.5 0-4.7-0.4-3.9 3.8-9.7 5.1-1.2 0.2-1.9 0.3-0.3 0-0.5-0.1t-0.3-0.4q-0.1-0.4 0.4-0.9 0.1-0.1 0.5-0.5t0.6-0.5 0.5-0.5 0.6-0.8 0.4-0.8 0.5-1 0.3-1.3 0.3-1.6q-3.3-2.1-5.1-4.9t-1.9-6q0-3.9 2.7-7.2t7.3-5.2 10-1.9 10 1.9 7.3 5.2 2.7 7.2z"></path></g>
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

export default IconCommenting

