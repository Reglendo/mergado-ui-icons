

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

class IconMusic extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--music`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m37.3 5v25q0 1.1-0.8 2t-1.9 1.3-2.3 0.8-2.2 0.2-2.1-0.2-2.3-0.8-1.9-1.3-0.8-2 0.8-2 1.9-1.3 2.3-0.8 2.1-0.2q2.4 0 4.3 0.9v-12l-17.1 5.3v15.8q0 1.1-0.8 2t-1.9 1.4-2.3 0.7-2.2 0.2-2.1-0.2-2.3-0.7-1.9-1.4-0.8-2 0.8-2 1.9-1.3 2.3-0.7 2.1-0.3q2.4 0 4.3 0.9v-21.6q0-0.7 0.5-1.2t1-0.8l18.6-5.7q0.3-0.1 0.6-0.1 0.9 0 1.6 0.6t0.6 1.5z"></path></g>
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

export default IconMusic

