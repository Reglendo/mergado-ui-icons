

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

class IconFlask extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--flask`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.6 32.3q1.2 2 0.5 3.4t-3.2 1.4h-25.7q-2.4 0-3.1-1.4t0.5-3.4l11.2-17.7v-8.9h-1.4q-0.6 0-1-0.4t-0.5-1 0.5-1 1-0.4h11.4q0.6 0 1 0.4t0.4 1-0.4 1-1 0.4h-1.4v8.9z m-17.4-16.2l-6.1 9.6h15.9l-6.1-9.6-0.4-0.7v-9.7h-2.9v9.7z"></path></g>
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

export default IconFlask

