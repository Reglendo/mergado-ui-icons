

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

class IconGetPocket extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--get-pocket`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.9 2.9q1.5 0 2.5 1t1 2.4v11.6q0 4-1.5 7.5t-4.1 6.2-6.1 4-7.5 1.5q-3.9 0-7.5-1.5t-6.1-4-4.1-6.2-1.5-7.5v-11.6q0-1.4 1-2.4t2.5-1h31.4z m-15.7 23.7q1.1 0 1.8-0.7l9.1-8.7q0.8-0.8 0.8-1.9 0-1.1-0.8-1.9t-1.8-0.7q-1.1 0-1.9 0.7l-7.2 6.9-7.2-6.9q-0.8-0.7-1.8-0.7-1.1 0-1.9 0.7t-0.7 1.9q0 1.2 0.8 1.9l9 8.7q0.7 0.7 1.8 0.7z"></path></g>
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

export default IconGetPocket
