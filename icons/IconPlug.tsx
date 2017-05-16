

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

class IconPlug extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--plug`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39.2 10.1q0.8 0.8 0.8 2t-0.8 2.1l-9 8.9 3.4 3.3-3.6 3.6q-3.6 3.6-8.7 4.2t-9.2-2.3l-8.1 8.1h-4v-4l8.1-8.1q-2.8-4.1-2.3-9.2t4.2-8.7l3.6-3.6 3.3 3.4 8.9-9q0.9-0.8 2.1-0.8t2 0.8 0.8 2-0.8 2.1l-8.9 8.9 5.2 5.2 8.9-8.9q0.9-0.8 2.1-0.8t2 0.8z"></path></g>
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

export default IconPlug
