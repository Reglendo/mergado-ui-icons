

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

class IconKey extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--key`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m19.6 11.4q0-1.8-1.3-3t-3-1.3-3.1 1.3-1.2 3q0 1 0.4 1.9-0.9-0.4-1.8-0.4-1.8 0-3.1 1.2t-1.2 3 1.2 3.1 3.1 1.2 3-1.2 1.3-3.1q0-0.9-0.5-1.8 0.9 0.4 1.9 0.4 1.8 0 3-1.2t1.3-3.1z m19 15.7q0 0.4-1.1 1.5t-1.5 1.1q-0.2 0-0.6-0.3t-0.9-0.8-0.8-0.9-0.6-0.6l-2.1 2.2 4.9 4.9q0.6 0.6 0.6 1.5 0 1-0.8 1.8t-1.8 0.9q-0.9 0-1.6-0.6l-14.9-15q-4 2.9-8.2 2.9-3.6 0-5.9-2.3t-2.3-5.9q0-3.6 2.1-7t5.6-5.5 6.9-2.1q3.7 0 6 2.2t2.3 6q0 4.2-3 8.1l8 7.9 2.1-2.1q-0.1-0.1-0.6-0.5t-0.9-0.9-0.7-0.8-0.4-0.7q0-0.3 1.1-1.4t1.5-1.1q0.3 0 0.5 0.2 0.1 0.1 1 1t1.9 1.8 1.9 1.9 1.6 1.7 0.7 0.9z"></path></g>
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

export default IconKey

