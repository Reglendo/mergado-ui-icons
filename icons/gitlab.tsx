

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

class IconGitlab extends React.Component<Props, State> {

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
                    <g><path d="m2.3 15.8l17.7 22.6-19.4-14q-0.4-0.3-0.5-0.8t0-1l2.2-6.8z m10.3 0h14.8l-7.4 22.6z m-4.4-13.7l4.4 13.7h-10.3l4.4-13.7q0.2-0.5 0.8-0.5t0.7 0.5z m29.5 13.7l2.2 6.8q0.2 0.5 0 1t-0.5 0.8l-19.4 14 17.7-22.6z m0 0h-10.3l4.4-13.7q0.2-0.5 0.7-0.5t0.8 0.5z"></path></g>
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

export default IconGitlab

