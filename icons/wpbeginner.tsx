

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

class IconWpbeginner extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--wpbeginner`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m8.6 18.6h3.5v-5h-3.5v5z m18.7 7.4v-2.1q-2.4 0.8-5.5 0.9-3 0-5.8-1.1t-4.9-2.7l0 2.1q2 1.8 4.8 2.9t6 1.1q2.9 0 5.4-1.1z m-13-7.4h14.3v-5h-14.3v5z m25.7-0.7q0 4.1-2.2 7.8 2 2.3 2 5.1 0 3.5-2.9 6t-7 2.5q-2.7 0-5-1.2t-3.6-3.1q-0.5 0-1.3 0t-1.3 0q-1.3 1.9-3.6 3.1t-5 1.2q-4.1 0-7-2.5t-2.9-6q0-2.8 2-5.1-2.2-3.7-2.2-7.8 0-4.7 2.7-8.6t7.3-6.3 10-2.3 10 2.3 7.3 6.3 2.7 8.6z"></path></g>
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

export default IconWpbeginner

