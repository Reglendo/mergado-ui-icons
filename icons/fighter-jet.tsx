

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

class IconFighterJet extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--fighter-jet`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39.9 21.3q-0.1 0.7-6 2l-7.3 0.7-4.7 1.3h-1.3l-6.1 7.3h1.4q0.6 0 1 0.1t0.4 0.3-0.4 0.2-1 0.1h-6.6v-0.7h1.3v-8.6h-3.3l-4 4.6h-2l-0.6-0.6v-4h0.6v-0.7h2.7v-0.1l-4-0.5v-2.7l4-0.5v-0.2h-2.7v-0.6h-0.6v-4l0.6-0.7h2l4 4.7h3.3v-8.7h-1.3v-0.6h6.6q0.6 0 1 0.1t0.4 0.2-0.4 0.2-1 0.1h-1.4l6.1 7.3h1.3l4.7 1.4 7.3 0.6q5.4 1.2 5.9 2z"></path></g>
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

export default IconFighterJet

