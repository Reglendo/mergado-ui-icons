

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

class IconParagraph extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--paragraph`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m34 4.2v1.6q0 0.7-0.4 1.4t-0.9 0.7q-1.2 0-1.2 0-0.6 0.2-0.8 0.7 0 0.3 0 1.5v25.7q0 0.5-0.4 0.9t-1 0.4h-2.4q-0.6 0-1-0.4t-0.4-0.9v-27.2h-3.1v27.2q0 0.5-0.4 0.9t-1 0.4h-2.4q-0.6 0-1-0.4t-0.4-0.9v-11.1q-3.3-0.3-5.5-1.3-2.8-1.3-4.2-4-1.5-2.6-1.5-5.8 0-3.7 2-6.4 2-2.6 4.7-3.5 2.4-0.8 9.3-0.8h10.7q0.5 0 0.9 0.4t0.4 0.9z"></path></g>
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

export default IconParagraph

