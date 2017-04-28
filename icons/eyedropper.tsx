

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

class IconEyedropper extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--eyedropper`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m37.9 2.1q2.1 2.1 2.1 5.1t-2.1 5l-5 5 2.3 2.3q0.2 0.2 0.2 0.5t-0.2 0.5l-4.7 4.7q-0.2 0.2-0.5 0.2t-0.5-0.2l-2.4-2.3-13.4 13.4q-0.8 0.8-2 0.8h-4.6l-5.7 2.9-1.4-1.4 2.9-5.7v-4.6q0-1.2 0.8-2l13.4-13.4-2.3-2.4q-0.2-0.2-0.2-0.5t0.2-0.5l4.7-4.7q0.2-0.2 0.5-0.2t0.5 0.2l2.3 2.3 5-5q2.1-2.1 5-2.1t5.1 2.1z m-26.5 30.8l12.9-12.9-4.3-4.3-12.9 12.9v4.3h4.3z"></path></g>
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

export default IconEyedropper

