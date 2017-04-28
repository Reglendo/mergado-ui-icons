

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

class IconBank extends React.Component<Props, State> {

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
                    <g><path d="m19.9 1.4l20 8v2.6h-2.7q0 0.6-0.4 1t-1 0.4h-31.7q-0.6 0-1-0.4t-0.4-1h-2.7v-2.6z m-14.6 13.3h5.3v15.9h2.7v-15.9h5.3v15.9h2.7v-15.9h5.3v15.9h2.6v-15.9h5.3v15.9h1.3q0.6 0 1 0.4t0.4 1v1.3h-34.5v-1.3q0-0.6 0.4-1t1-0.4h1.2v-15.9z m33.1 19.9q0.6 0 1 0.4t0.5 0.9v2.7h-39.9v-2.7q0-0.5 0.4-0.9t1-0.4h37z"></path></g>
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

export default IconBank

