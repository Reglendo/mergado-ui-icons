

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

class IconArrowRight extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--arrow-right`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m36.4 21.4q0 1.2-0.9 2.1l-14.5 14.5q-0.9 0.8-2 0.8-1.2 0-2-0.8l-1.7-1.7q-0.9-0.8-0.9-2t0.9-2l6.5-6.6h-15.7q-1.1 0-1.9-0.8t-0.7-2v-2.9q0-1.2 0.7-2t1.9-0.9h15.7l-6.5-6.5q-0.9-0.8-0.9-2t0.9-2l1.7-1.7q0.8-0.9 2-0.9 1.2 0 2 0.9l14.5 14.5q0.9 0.8 0.9 2z"></path></g>
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

export default IconArrowRight

