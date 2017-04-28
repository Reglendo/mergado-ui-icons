

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

class IconShareAlt extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--share-alt`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m30.1 22.9q3 0 5.1 2t2.1 5.1-2.1 5.1-5.1 2-5-2-2.1-5.1q0-0.3 0-0.8l-8-4q-2 1.9-4.9 1.9-2.9 0-5-2t-2.1-5.1 2.1-5.1 5-2q2.9 0 4.9 1.9l8-4q0-0.5 0-0.8 0-3 2.1-5.1t5-2 5.1 2 2.1 5.1-2.1 5.1-5.1 2q-2.8 0-4.8-1.9l-8.1 4q0.1 0.5 0.1 0.8t-0.1 0.8l8.1 4q2-1.9 4.8-1.9z"></path></g>
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

export default IconShareAlt

