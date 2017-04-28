

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

class IconServer extends React.Component<Props, State> {

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
                    <g><path d="m2.9 31.4h22.8v-2.8h-22.8v2.8z m0-11.4h22.8v-2.9h-22.8v2.9z m35 10q0-0.9-0.7-1.5t-1.5-0.6-1.5 0.6-0.6 1.5 0.6 1.5 1.5 0.6 1.5-0.6 0.7-1.5z m-35-21.4h22.8v-2.9h-22.8v2.9z m35 10q0-0.9-0.7-1.5t-1.5-0.7-1.5 0.7-0.6 1.5 0.6 1.5 1.5 0.6 1.5-0.6 0.7-1.5z m0-11.5q0-0.8-0.7-1.5t-1.5-0.6-1.5 0.6-0.6 1.5 0.6 1.6 1.5 0.6 1.5-0.6 0.7-1.6z m2.1 18.6v8.6h-40v-8.6h40z m0-11.4v8.6h-40v-8.6h40z m0-11.4v8.5h-40v-8.5h40z"></path></g>
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

export default IconServer

