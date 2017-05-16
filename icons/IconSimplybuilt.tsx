

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

class IconSimplybuilt extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--simplybuilt`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m16.8 22.6q0-2.1-1.6-3.7t-3.7-1.5-3.7 1.5-1.6 3.7 1.6 3.7 3.7 1.6 3.7-1.6 1.6-3.7z m16.7 0q0-2.2-1.5-3.7t-3.7-1.5-3.8 1.5-1.5 3.7q0 2.2 1.5 3.7t3.8 1.6 3.7-1.6 1.5-3.7z m6.3-15.7v26.2q0 0.8-0.7 1.4t-1.4 0.7h-35.6q-0.9 0-1.5-0.7t-0.6-1.4v-26.2q0-0.8 0.6-1.4t1.5-0.7h8.4q0.8 0 1.4 0.7t0.7 1.4v3.1h14.6v-3.1q0-0.8 0.6-1.4t1.5-0.7h8.4q0.8 0 1.4 0.7t0.7 1.4z"></path></g>
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

export default IconSimplybuilt
