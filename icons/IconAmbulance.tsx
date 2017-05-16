

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

class IconAmbulance extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--ambulance`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m13 30.4q0-1.1-0.8-1.8t-1.8-0.8-1.8 0.8-0.8 1.8 0.8 1.8 1.8 0.8 1.8-0.8 0.8-1.8z m-7.8-10.4h7.8v-5.2h-3.2q-0.3 0-0.5 0.2l-3.9 3.9q-0.2 0.3-0.2 0.5v0.6z m26 10.4q0-1.1-0.8-1.8t-1.8-0.8-1.9 0.8-0.7 1.8 0.7 1.8 1.9 0.8 1.8-0.8 0.8-1.8z m2.6-13.6v-3.9q0-0.3-0.2-0.5t-0.5-0.2h-4.5v-4.5q0-0.3-0.2-0.5t-0.5-0.2h-3.9q-0.3 0-0.4 0.2t-0.2 0.5v4.5h-4.6q-0.3 0-0.4 0.2t-0.2 0.5v3.9q0 0.2 0.2 0.4t0.4 0.2h4.6v4.5q0 0.3 0.2 0.5t0.4 0.2h3.9q0.3 0 0.5-0.2t0.2-0.5v-4.5h4.5q0.3 0 0.5-0.2t0.2-0.4z m5.2-11.1v23.4q0 0.5-0.4 0.9t-0.9 0.4h-3.9q0 2.1-1.6 3.7t-3.6 1.5-3.7-1.5-1.5-3.7h-7.8q0 2.1-1.5 3.7t-3.7 1.5-3.7-1.5-1.5-3.7h-2.6q-0.5 0-0.9-0.4t-0.4-0.9 0.4-0.9 0.9-0.4v-8.4q0-0.6 0.3-1.2t0.6-1.1l4-4q0.4-0.4 1.1-0.6t1.1-0.3h3.3v-6.5q0-0.5 0.4-0.9t0.9-0.4h23.4q0.5 0 0.9 0.4t0.4 0.9z"></path></g>
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

export default IconAmbulance
