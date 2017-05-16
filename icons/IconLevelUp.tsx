

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

class IconLevelUp extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--level-up`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m31.2 13.5q-0.4 0.8-1.3 0.8h-4.3v19.3q0 0.3-0.2 0.5t-0.5 0.2h-15.7q-0.5 0-0.6-0.4-0.2-0.5 0.1-0.8l3.5-4.3q0.2-0.2 0.6-0.2h7.1v-14.3h-4.3q-0.9 0-1.3-0.8-0.3-0.9 0.2-1.6l7.2-8.5q0.4-0.5 1.1-0.5t1.1 0.5l7.1 8.5q0.6 0.8 0.2 1.6z"></path></g>
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

export default IconLevelUp
