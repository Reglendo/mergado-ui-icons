

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

class IconLineChart extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--line-chart`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39.8 32.4v2.5h-39.8v-29.8h2.5v27.3h37.3z m-2.5-24.2v8.4q0 0.5-0.4 0.6t-0.7-0.1l-2.3-2.4-12.3 12.3q-0.2 0.2-0.5 0.2t-0.4-0.2l-4.5-4.5-8.1 8.1-3.8-3.8 11.4-11.3q0.2-0.2 0.4-0.2t0.5 0.2l4.5 4.5 9-9-2.3-2.4q-0.3-0.3-0.2-0.6t0.6-0.4h8.4q0.3 0 0.5 0.2t0.2 0.4z"></path></g>
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

export default IconLineChart
