

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

class IconBuysellads extends React.Component<Props, State> {

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
                    <g><path d="m23.4 24.2h-6.5l3.2-12.3z m1.9 7.2h7l-7.2-22.8h-9.9l-7.2 22.8h6.9l8.6-7z m12-22.1v21.4q0 2.6-1.9 4.5t-4.5 1.9h-21.5q-2.6 0-4.5-1.9t-1.9-4.5v-21.4q0-2.6 1.9-4.5t4.5-1.9h21.5q2.6 0 4.5 1.9t1.9 4.5z"></path></g>
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

export default IconBuysellads

