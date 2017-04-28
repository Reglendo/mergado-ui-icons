

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

class IconTelevision extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--television`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m37.2 27.3v-19.9q0-0.3-0.2-0.5t-0.5-0.2h-33.2q-0.2 0-0.4 0.2t-0.2 0.5v19.9q0 0.3 0.2 0.5t0.4 0.2h33.2q0.3 0 0.5-0.2t0.2-0.5z m2.7-19.9v19.9q0 1.4-1 2.4t-2.4 0.9h-15.2v2.7h7.3q0.3 0 0.4 0.2t0.2 0.5v1.3q0 0.3-0.2 0.5t-0.4 0.1h-17.3q-0.3 0-0.5-0.1t-0.2-0.5v-1.3q0-0.3 0.2-0.5t0.5-0.2h7.3v-2.7h-15.3q-1.3 0-2.3-0.9t-1-2.4v-19.9q0-1.4 1-2.4t2.3-0.9h33.2q1.4 0 2.4 0.9t1 2.4z"></path></g>
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

export default IconTelevision

