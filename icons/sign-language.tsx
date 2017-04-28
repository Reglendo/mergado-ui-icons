

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

class IconSignLanguage extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--sign-language`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m20.1 15q0.7 0 1.3 0.4l4.9 3.3q1.4 0.9 2.5 2.2l3.2 3.8q0.9 1 0.7 2.4l-1.6 9.2q-0.2 0.7-0.7 1.2t-1.2 0.5l-11.8 1.3-7.8 0.7h-0.2q-0.9 0-1.5-0.6t-0.7-1.5q0-0.9 0.6-1.5t1.5-0.7l5.8-0.7h-10q-0.9 0-1.6-0.7t-0.6-1.6q0.1-0.8 0.7-1.4t1.6-0.6l9.8 0-11.6-1.4q-0.9-0.1-1.5-0.9t-0.4-1.6q0.2-0.8 0.8-1.3t1.5-0.5h0.2l10.7 1.4-7.8-2.1q-0.9-0.3-1.4-1t-0.4-1.5q0.1-0.8 0.7-1.3t1.4-0.5q0.2 0 0.5 0l10 2.2 4.8 0.8q0 0 0.1 0t0 0q0.6 0 0.7-0.5t-0.3-0.8l-4.1-2.8q-0.8-0.5-0.9-1.4t0.4-1.6q0.6-0.9 1.6-0.9z m-1.6 4.5l4.1 2.8-4.8-0.8-0.1-0.1-0.8-0.8-5.4-5.8q0-0.1 0-0.1t-0.1-0.1q-0.5-0.7-0.4-1.6t0.9-1.4q0.6-0.5 1.5-0.4t1.4 0.8l3.2 3.2-0.1 0.1-0.1 0.1q-0.7 1-0.5 2.2t1.2 1.9z m19.8-10.1l0.3 5.9q0.1 1.7-0.2 3.3l-1.1 4.9q-0.3 1.3-1.5 1.9l-2.4 1.3q0.1-1.4-0.8-2.5l-3.3-3.8q-1.2-1.3-2.6-2.3l-5-3.3q-0.7-0.5-1.6-0.5-1.2 0-2 0.8l-5.3-6.9q-0.5-0.8-0.4-1.7t1-1.4q0.7-0.5 1.5-0.3t1.4 0.9l6 7.9-5.9-10.2q-0.4-0.8-0.2-1.7t1.1-1.3q0.7-0.4 1.6-0.1t1.3 1l5.3 9.4-3-7.6q-0.3-0.7-0.1-1.6t1-1.3q0.8-0.4 1.7-0.1t1.2 1.2l4.3 9.2 2.3 4.4q0.2 0.3 0.5 0.4t0.6-0.2 0.3-0.6l-0.3-5q0-0.9 0.6-1.6t1.5-0.6q0.9 0 1.5 0.6t0.7 1.5z"></path></g>
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

export default IconSignLanguage

