

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

class IconBriefcase extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--briefcase`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m14.3 5.7h11.4v-2.8h-11.4v2.8z m25.7 14.3v10.7q0 1.5-1 2.5t-2.6 1.1h-32.8q-1.5 0-2.6-1.1t-1-2.5v-10.7h15v3.6q0 0.5 0.4 1t1 0.4h7.2q0.6 0 1-0.4t0.4-1v-3.6h15z m-17.1 0v2.9h-5.8v-2.9h5.8z m17.1-10.7v8.6h-40v-8.6q0-1.5 1.1-2.5t2.5-1.1h7.8v-3.6q0-0.8 0.7-1.5t1.5-0.6h12.8q0.9 0 1.5 0.6t0.7 1.5v3.6h7.8q1.5 0 2.6 1.1t1 2.5z"></path></g>
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

export default IconBriefcase

